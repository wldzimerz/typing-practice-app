import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Keyboard from './components/keyboard/Keyboard';
import StartScreen from './components/StartScreen/StartScreen';

import s from './App.module.scss';

const engLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const rusLetters = [
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
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
