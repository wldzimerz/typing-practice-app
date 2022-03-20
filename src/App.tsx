import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FinishPrivateRouter, FinishScreen, StartScreen, TypingScreen } from './components';
import s from './style.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<StartScreen />} />
          <Route path='/eng' element={<TypingScreen />} />
          <Route path='/rus' element={<TypingScreen />} />
          <Route
            path='/finish'
            element={
              <FinishPrivateRouter>
                <FinishScreen />
              </FinishPrivateRouter>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
