import React, { useRef, useContext } from 'react';
import utils from "../utils/utils";
import Button from './Button';
import { NotesContext } from '../note/Note';

interface UpdateTextAreaProps {
  name: string;
  addClassName: string;
  defaultValue: string;
  list: Record<string, any>;
}

const UpdateTextArea: React.FC<UpdateTextAreaProps> = ({
  name,
  addClassName,
  defaultValue,
  list,
}) => {
  const { lists, setLists, setIsRequested } = useContext(NotesContext);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = ref.current?.value;
    const tempList = [...lists];
    for (let i=0; i<tempList.length; i++) {
      for (let j=0; j<tempList[i].recorded.length; j++) {
        const note = tempList[i].recorded[j];
        if (note.id === list.id) {
          note.isEditing = false;
          note.text = text;
        }
      }
    }
    setLists(tempList);

    if (text) {
      const data = {
        id: list.id,
        category: name,
        text: text
      }

      const url = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}/happynote/notes/update/`;
      try {
        const results = await utils.request.put(url, data);
        setIsRequested(prevState => !prevState);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-2">
          <div className='shadow-xl rounded-[20px] border border-gray-200 w-full mr-10'>
            <textarea
              className='relative hidden-scrollbar text-[#8A8684] min-w-[300px]
            border-gray-200 outline-none focus:border-[#D9D9D9] w-full p-4 rounded-[20px]'
              name={`${name}`}
              ref={ref}
              id=""
              cols={40}
              rows={2}
              defaultValue={defaultValue}
            />
          </div>
          <Button
            type="submit"
            addClassName={`min-w-[80px] p-2 h-[50px] ${addClassName}`}
          >
            保存
          </Button>
        </div>
      </form>
    </div>
  )
}

export default UpdateTextArea;