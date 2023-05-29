import React, { useState, useEffect } from "react"

interface NotedListProps {
  name: string;
}

const NotedList: React.FC<NotedListProps> = ({ name }) => {

  const [notedList, setNotedList] = useState<string[]>(["happy"]);

  return (
    <div>
      {notedList.map((note: string) => {
        return (
          <ul>
            <li className="list-disc list-inside pl-10 my-4">{note}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default NotedList;