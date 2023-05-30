import React, { useState, useEffect, useContext } from "react"
import axios from 'axios';
import { NotesContext } from "./Note";

interface NotedListProps {
  name: string;
}

const NotedList: React.FC<NotedListProps> = ({ name }) => {

  const { isAdded } = useContext(NotesContext);
  const [notedList, setNotedList] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}/happynote/notes/list/`;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setNotedList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [isAdded])

  return (
    <div>
      {notedList.map((note: Record<string, any>) => {
        if (name === note.category)
        return (
          <ul>
            <li className="list-disc list-inside pl-10 my-4">{note.text}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default NotedList;