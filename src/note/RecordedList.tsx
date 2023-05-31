import React, { useState, useEffect, useContext } from "react"
import axios from 'axios';
import { NotesContext } from "./Note";
import Memo from "./Memo";

interface NotedListProps {
  name: string;
}

const RecordedList: React.FC<NotedListProps> = ({ name }) => {

  const { isAdded } = useContext(NotesContext);
  const [recordedList, setRecordedList] = useState<Record<string, any>[]>([]);
  const [noteId, setNoteId] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}/happynote/notes/list/`;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setRecordedList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [isAdded])

  return (
    <div>
      {recordedList.map((note: Record<string, any>) => {
        if (name === note.category)
          return (
            <div key={note.id}>
              <Memo
                note={note}
              />
            </div>
          )
      })}
    </div >
  )
}

export default RecordedList;