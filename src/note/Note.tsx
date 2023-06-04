import { useState, createContext } from "react";
import RecordedList from "./RecordedList";
import InputTextArea from "../components/InputTextArea";

export const NotesContext = createContext({} as {
  isRequested: boolean;
  setIsRequested: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
})

const Note = () => {

  const [isRequested, setIsRequested] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <main className='box-border text-gray-600 w-full my-10'>
      <div className="w-full px-40">
        <h1 className="text-4xl">Happy note</h1>
        <h3 className="mt-10">今日のハッピーノート</h3>
        <NotesContext.Provider
          value={{
            isRequested, 
            setIsRequested,
            isEditing,
            setIsEditing,
          }}
        >
          <section className='flex flex-col items-start justify-center my-10'>
            <h3 className="text-left w-4/5 mt-4">今日の出来事でハッピーだったことは…</h3>
            <InputTextArea name="happy" />
            <h3 className="text-left w-4/5 mt-4">今日の出来事で感謝したいことは…</h3>
            <InputTextArea name="grateful" />
            <h3 className="text-left w-4/5 mt-4">今日の出来事で達成できたことは…</h3>
            <InputTextArea name="achievement" />
          </section>
          <section className=''>
            <h3 className="mb-2">これまでのハッピーリスト</h3>
            <RecordedList name="happy" />
            <h3 className="mb-2">これまでの感謝リスト</h3>
            <RecordedList name="grateful" />
            <h3 className="mb-2">これまでの達成リスト</h3>
            <RecordedList name="achievement" />
          </section>
        </NotesContext.Provider>
      </div>
    </main>
  )
}

export default Note;