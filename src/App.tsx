import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TypingScreen from './components/TypingScreen/TypingScreen';
import StartScreen from './components/StartScreen/StartScreen';

import s from './App.module.scss';
import FinishScreen from './components/FinishScreen/FinishScreen';

function App() {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/eng" element={<TypingScreen />} />
          <Route path="/rus" element={<TypingScreen />} />
          <Route path="/finish" element={<FinishScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
