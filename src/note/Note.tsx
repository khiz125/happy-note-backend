import { useState, createContext, useEffect } from "react";
import utils from "../utils/utils";
import RecordedList from "./RecordedList";
import InputTextArea from "../components/InputTextArea";

export const NotesContext = createContext({} as {
  isRequested: boolean;
  setIsRequested: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  lists: Record<string, any>[];
  setLists: React.Dispatch<React.SetStateAction<Record<string, any>[]>>;
})

const Note = () => {

  const [isRequested, setIsRequested] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [lists, setLists] = useState<Record<string, any>[]>([
    {
      category: "happy",
      ja: "ハッピー",
      isEditing: false,
      recorded: {}
    },
    {
      category: "grateful",
      ja: "感謝",
      isEditing: false,
      recorded: {}
    },
    {
      category: "achievement",
      ja: "達成",
      isEditing: false,
      recorded: {}
    }
  ]);

  useEffect(() => {
    const url = "/happynote/notes/list/";
    const fetchData = async () => {
      try {
        const response = await utils.request.get(url, {});
        response.data.map((data:Record<string, any>) => {
          return setLists((prevState) => 
          prevState.map((list) => list.category === data.category
          ? {...list, recorded: data}: list)
          )
        })
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className='box-border text-gray-600 w-full my-10'>
      <div className="w-full px-40">
        <h1 className="text-4xl font-medium">Happy note</h1>
        <h3 className="mt-10 text-2xl">今日のハッピーノート</h3>
        <NotesContext.Provider
          value={{
            isRequested,
            setIsRequested,
            isEditing,
            setIsEditing,
            lists,
            setLists
          }}
        >
          <section className='flex flex-col items-start justify-center my-6'>
            <h3 className="text-left text-xl w-4/5 mt-4">今日の出来事でハッピーだったことは…</h3>
            <InputTextArea name="happy" />
            <h3 className="text-left text-xl w-4/5 mt-4">今日の出来事で感謝したいことは…</h3>
            <InputTextArea name="grateful" />
            <h3 className="text-left text-xl w-4/5 mt-4">今日の出来事で達成できたことは…</h3>
            <InputTextArea name="achievement" />
          </section>
          <section>
            {lists.map((list, index) => {
              return (
                <div key={index}>
                  <h3 className="mb-2 text-xl font-medium">これまでの{`${list.ja}`}リスト</h3>
                  <RecordedList
                    name={`${list.category}`}
                    list={list}
                  />
                </div>
              )
            })}
          </section>
        </NotesContext.Provider>
      </div>
    </main>
  )
}

export default Note;