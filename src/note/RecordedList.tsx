import React from "react"
import UpdateTextArea from "../components/UpdateTextArea";
import Memo from "./Memo";

interface NotedListProps {
  list: Record<string, any>;
}

const RecordedList: React.FC<NotedListProps> = ({
  list,
}) => {
  return (
    list.recorded.map((note: Record<string, any>, index:number) => {
      return note.isEditing ?
        (
          <div key={index}>
            <UpdateTextArea
              name={note.category}
              addClassName={"max-w-[100px]"}
              defaultValue={note.text}
              list={note}
            />
          </div>
        )
        :
        (
          <div key={index}>
            <Memo
              list={note}
            />
          </div>
        )
    })
  )
}

export default RecordedList;