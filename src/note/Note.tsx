import React from 'react'

const note = () => {

  
  return (
    <main className='box-border text-gray-600 w-full'>
      <section className='flex items-center justify-center m-10'>
        <h1>
          Happy note
        </h1>
      </section>
      <section className='flex flex-col items-center justify-center m-10'>
        <h3>今日のハッピーノート</h3>
        <div className='border border-gray-300 shadow-xl rounded-[20px]'>
          <textarea className='w-full rounded-[20px]' name="note" id="" cols={50} rows={10} />
        </div>
      </section>
      <section className='flex flex-col items-center justify-center m-10'>
        <h3>これまでハッピーだったことリスト</h3>

      </section>
    </main>
  )
}

export default note;