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

  const { 
    setIsRequested,
    isEditing, 
    setIsEditing
   } = useContext(NotesContext);

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
          <div>
            <div className='my-4 w-full border-b-[1px]'>
              {note.text}
            </div>
            <div className='flex'>
              <Button
                type="button"
                variant="lemon-chiffon"
                addClassName="flex items-center justify-center my-1 w-[60px] h-[40px] text-sm mr-2"
                onClick={() => {
                  setIsEditing(true)
                }}
              >
                編集
              </Button>
              <Button
                type="button"
                variant="light-gray"
                addClassName="flex items-center justify-center my-1 w-[60px] h-[40px] text-sm ml-2"
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