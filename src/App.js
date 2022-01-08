import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Keyboard from './components/keyboard/Keyboard';
import StartScreen from './components/StartScreen/StartScreen';

import s from './App.module.scss';

const engLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const rusLetters = [
  'Й',
  'Ц',
  'У',
  'К',
  'Е',
  'Н',
  'Г',
  'Ш',
  'Щ',
  'З',
  'Х',
  'Ъ',
  'Ф',
  'Ы',
  'В',
  'А',
  'П',
  'Р',
  'О',
  'Л',
  'Д',
  'Ж',
  'Э',
  'Я',
  'Ч',
  'С',
  'М',
  'И',
  'Т',
  'Ь',
  'Б',
  'Ю',
];

function App() {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Routes>
          <Route path="/" element={<StartScreen />} />

          <Route path="/eng" element={<Keyboard letters={engLetters} />} />
          <Route path="/rus" element={<Keyboard letters={rusLetters} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
