import React, { useState } from 'react'
import Button from '../components/Button';
import UpdateTextArea from "../components/UpdateTextArea";
interface MemoProps {
  note: Record<string, any>;
}

const Memo: React.FC<MemoProps> = ({
  note,
}) => {

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleRemove = () => {

  }

  const handleEdit = () => {
    
  }

  return (
    <div>
      {
        isEditing ?
          <UpdateTextArea
            name={note.category}
            addClassName={"max-w-[100px]"}
            defaultValue={note.text}
            setIsEditing={setIsEditing}
          />
          :
          <div className="flex justify-between" >
            <div className='pl-10 my-4 w-full'>
              {note.text}
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