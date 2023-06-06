import React from "react"
import UpdateTextArea from "../components/UpdateTextArea";
import Memo from "./Memo";

interface NotedListProps {
  name: string;
  list: Record<string, any>;
}

const RecordedList: React.FC<NotedListProps> = ({
  name,
  list,
}) => {

  return (
    list.isEditing ?
      (
        <UpdateTextArea
          name={list.category}
          addClassName={"max-w-[100px]"}
          defaultValue={list.recorded.text}
          list={list.recorded}
        />
      )
      :
      (
        <Memo
          list={list.recorded}
        />
      )
  )
}

export default RecordedList;