import { Routes, Route } from 'react-router-dom';
import Note from "./note/Note"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Note />} />
    </Routes>
  );
}

export default App;
