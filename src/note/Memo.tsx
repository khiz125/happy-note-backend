import React, { useState, useContext } from 'react'
import { NotesContext } from "./Note";
import axios from 'axios';
import Button from '../components/Button';
import UpdateTextArea from "../components/UpdateTextArea";
interface MemoProps {
  note: Record<string, any>;
}

const Memo: React.FC<MemoProps> = ({
  note,
}) => {

  const { isRequested, setIsRequested } = useContext(NotesContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleRemove = async () => {
    const id = note.id;
    const url = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}/happynote/notes/remove/${id}/`;

    try {
      const response = await axios.delete(url);
      setIsRequested(prevState => !prevState);
      console.log(response);
    } catch(error) {
      console.log(error);
    }
  }

  // const handleEdit = () => {
    
  // }

  return (
    <div>
      {
        isEditing ?
          <UpdateTextArea
            name={note.category}
            addClassName={"max-w-[100px]"}
            defaultValue={note.text}
            setIsEditing={setIsEditing}
            note={note}
          />
          :
          <div className="flex justify-between" >
            <div className='pl-10 my-4 w-full'>
              ■ {note.text}
            </div>
            <div>
              <Button
                variant="lemon-chiffon"
                addClassName="my-1"
                onClick={() => {
                  setIsEditing(true)
                }}
              >
                編集
              </Button>
              <Button
                variant="light-gray"
                addClassName="my-1"
                onClick={handleRemove}
              >
                削除
              </Button>
            </div>
          </div>
      }
    </div>
  )
}

export default Memo;