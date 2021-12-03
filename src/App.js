
import { Routes, Route } from "react-router-dom";
import './App.css';
import Inscription from './components/Inscription';
import Merci from './components/Merci';
import Error from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Inscription />} />
        <Route path="merci/:name" element={<Merci />} />
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
