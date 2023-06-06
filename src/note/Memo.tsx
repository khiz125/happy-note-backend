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
    setLists,
    setIsRequested
  } = useContext(NotesContext);

  const handleRemove = async () => {
    const id = list.id;
    const url = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}/happynote/notes/remove/${id}/`;

    try {
      const response = await utils.request.remove(url);
      setIsRequested(prevState => !prevState);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = (category: string) => {
      setLists((prevState) =>
      prevState.map((cat) => (cat.category === category 
      ? {...cat, isEditing: true} 
      : cat
      ))
    )
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
          onClick={() => handleEdit(list.category)}
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
  )
}

export default Memo;