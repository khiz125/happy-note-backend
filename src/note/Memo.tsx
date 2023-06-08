import React, { useContext } from 'react';
import utils from "../utils/utils";
import { NotesContext } from "./Note";
import Button from '../components/Button';
interface MemoProps {
  list: Record<string, any>;
}

const Memo: React.FC<MemoProps> = ({
  list
}) => {
  const {
    lists,
    setLists,
    setIsRequested
  } = useContext(NotesContext);

  const handleRemove = async () => {
    const id = list.id;
    const url = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}/happynote/notes/remove/${id}/`;

    try {
      const response = await utils.request.remove(url, {id: id});
      setIsRequested(prevState => !prevState);
      console.log(response);

      const tempList = [...lists];
      for (let i = 0; i < tempList.length; i++) {
        for (let j = 0; j < tempList[i].recorded.length; j++) {
          const note = tempList[i].recorded[j];
          if (note.id === id) {
            tempList[i].recorded.splice(j, 1);
            break;
          }
        }
      }
      setLists(tempList);
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = (id: string) => {
    const tempList = [...lists];
    for (let i = 0; i < tempList.length; i++) {
      for (let j = 0; j < tempList[i].recorded.length; j++) {
        const note = tempList[i].recorded[j];
        if (note.id === id) {
          note.isEditing = true;
        }
      }
    }
    setLists(tempList);
  }

  return (
    <div>
      <div className='my-4 w-full border-b-[1px]'>
        {list.text}
      </div>
      <div className='flex w-[200px] mb-10'>
        <Button
          type="button"
          variant="lemon-chiffon"
          addClassName="flex items-center justify-center my-1 w-[60px] h-[40px] text-sm mr-2"
          onClick={() => handleEdit(list.id)}
        >
          編集
        </Button>
        <Button
          type="button"
          variant="light-gray"
          addClassName="flex items-center justify-center my-1 w-[60px] h-[40px] text-sm ml-2"
          onClick={() => handleRemove()}
        >
          削除
        </Button>
      </div>
    </div>
  )
}

export default Memo;