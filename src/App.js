import Start from './screens/Start';
import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Game from './screens/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
