import React from "react";
import HappyList from "./HappyList";

import InputTextArea from "@/components/InputTextArea";

import Button from "../components/Button";

const note = () => {


  return (
    <main className='box-border text-gray-600 w-full px-20'>
      <div className="flex flex-col items-center justify-center w-full m-10 px-40">
        <section className='flex items-center justify-center m-10 px-40'>
          <h1>
            Happy note
          </h1>
        </section>
        <section className='flex flex-col items-center justify-center m-10'>
          <h3>今日のハッピーノート</h3>
          <h3 className="text-left w-4/5 mt-4">今日の出来事でハッピーだったことは…</h3>
          <div className="flex mb-2">
            <div className='shadow-xl rounded-[20px] border border-gray-200 mr-2'>
              <textarea
                className='relative hidden-scrollbar text-[#8A8684]  
            border-gray-200 outline-none focus:border-[#D9D9D9] w-full p-4 rounded-[20px]'
                name="note"
                id=""
                cols={40}
                rows={2}
              />
            </div>
            <Button
              addClassName="w-[80px] h-[50px]"
            >
              保存
            </Button>
          </div>
          <h3 className="text-left w-4/5 mt-4">今日の出来事で感謝したいことは…</h3>
          <div className="flex mb-2">
            <div className='shadow-xl rounded-[20px] border border-gray-200 mr-2'>
              <textarea
                className='relative hidden-scrollbar text-[#8A8684]  
            border-gray-200 outline-none focus:border-[#D9D9D9] w-full p-4 rounded-[20px]'
                name="note"
                id=""
                cols={40}
                rows={2}
              />
            </div>
            <Button
              addClassName="w-[80px] h-[50px]"
            >
              保存
            </Button>
          </div>
          <h3 className="text-left w-4/5 mt-4">今日の出来事で達成できたことは…</h3>
          <div className="flex mb-2">
            <div className='shadow-xl rounded-[20px] border border-gray-200 mr-2'>
              <textarea
                className='relative hidden-scrollbar text-[#8A8684]  
            border-gray-200 outline-none focus:border-[#D9D9D9] w-full p-4 rounded-[20px]'
                name="note"
                id=""
                cols={40}
                rows={2}
              />
            </div>
            <Button
              addClassName="w-[80px] h-[50px]"
            >
              保存
            </Button>
          </div>
        </section>
        <section className='flex flex-col items-center justify-center m-10'>
          <h3>これまでハッピーだったことリスト</h3>
          <HappyList />
        </section>
      </div>

    </main>
  )
}

export default note;