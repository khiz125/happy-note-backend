import React, { useState, useRef } from 'react';
import Button from './Button';

interface InputTextAreaProps {
  name: string;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({ name }) => {

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = ref.current?.value;

    if (message) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Authorization": `Basic ${process.env.HARPERDB_API_KEY}`
        },
        body: JSON.stringify({
          message
        })

      }

      const url = `${process.env.HARPERDB_CUSTOM_FUNCTIONS_URL}/api-v1/notes/add`;
      const testurl = `${process.env.HARPERDB_CUSTOM_FUNCTIONS_URL}/happynote/notes/`

      try {
        const results = await fetch(testurl, requestOptions).then(r => r.json());
        console.log(results);
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