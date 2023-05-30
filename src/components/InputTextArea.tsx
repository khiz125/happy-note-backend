import React, { useRef, useContext } from 'react';
import axios from 'axios';
import Button from './Button';
import { NotesContext } from '../note/Note';

interface InputTextAreaProps {
  name: string;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({ name }) => {
  
  const { setIsAdded } = useContext(NotesContext);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = ref.current?.value;

    if (text) {
      const data = {
        category: name,
        text: text
      }

      const url = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}/happynote/notes/add/`;

      try {
        const results = await axios.post(url, data);
        console.log(results);
        setIsAdded(prevState =>!prevState)
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
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
          />
        </div>
        <Button
          addClassName="min-w-[80px] p-2 h-[50px]"
        >
          保存
        </Button>
      </div>
    </form>
  )
}

export default InputTextArea;