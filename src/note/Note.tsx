import React from "react";
import NotedList from "./NotedList";

import InputTextArea from "../components/InputTextArea";

import Button from "../components/Button";

const note = () => {


  return (
    <main className='box-border text-gray-600 w-full px-20 my-10'>
      <div className="flex flex-col items-center justify-center w-full px-40">
        <h1 className="text-4xl">Happy note</h1>
        <h3 className="mt-10">今日のハッピーノート</h3>
        <section className='flex flex-col items-start justify-center my-10'>
          <h3 className="text-left w-4/5 mt-4">今日の出来事でハッピーだったことは…</h3>
          <InputTextArea name="happy"/>
          <h3 className="text-left w-4/5 mt-4">今日の出来事で感謝したいことは…</h3>
          <InputTextArea name="grateful"/>
          <h3 className="text-left w-4/5 mt-4">今日の出来事で達成できたことは…</h3>
          <InputTextArea name="achievement"/>
        </section>
        <section className='flex flex-col items-start my-10 w-full px-20'>
          <h3>これまでのハッピーリスト</h3>
          <NotedList name="happy"/>
          <h3>これまでの感謝リスト</h3>
          <NotedList name="grateful"/>
          <h3>これまでの達成リスト</h3>
          <NotedList name="achievement"/>
        </section>
      </div>
    </main>
  )
}

export default note;