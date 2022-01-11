import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { getRandomLocalizedWords } from '../../services/faker-words';
import { enteredString, setTypeString, setEnteredString, typeString, resetEnteredString } from '../../store/typeStringSlice';

import Key from '../key/Key';

import s from './Keyboard.module.scss';

type Props = {
  letters: readonly string[];
};

const Keyboard = ({ letters }: Props) => {
  let [symbolCount, setSymbolCount] = useState(0);
  let [mistakeCount, setMistakeCount] = useState(0);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const typeStringState = useAppSelector(typeString);
  const enteredStringState = useAppSelector(enteredString);
  const mainInput = useRef<HTMLInputElement>(null);

  let activeSymbol: string;
  if (typeStringState) activeSymbol = typeStringState[symbolCount];

  useEffect(() => {
    dispatch(setTypeString(getRandomLocalizedWords(pathname, 8)));
  }, [pathname, dispatch]);

  function handleClickHome() {
    navigate('/');
  }

  function handleChangeValue(value: string) {
    const symbol = value.slice(-1);

    if (symbol === activeSymbol) {
      dispatch(setEnteredString(symbol));
      setSymbolCount((prevState) => ++prevState);
    } else if (typeStringState && enteredStringState.length === typeStringState.length) {
      alert(`Stop typing! You made ${mistakeCount} mistakes`);
      handleGetNewString();
    } else {
      setMistakeCount((prevState) => ++prevState);
    }
  }

  function handleGetNewString() {
    dispatch(setTypeString(getRandomLocalizedWords(pathname, 10)));
    dispatch(resetEnteredString());
    setSymbolCount(0);
    setMistakeCount(0);
    if (mainInput && mainInput.current) {
      mainInput.current.focus();
    }
  }

  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.homeBtn} onClick={handleClickHome}>
          {pathname === '/eng' ? 'Home' : 'На главную'}
        </div>
        <div className={s.newStringBtn} onClick={handleGetNewString}>
          {pathname === '/eng' ? 'Get new string' : 'Получить новую строку'}
        </div>
        {/* <div className={s.timer}>{`0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div> */}
      </div>
      <div className={s.keyboardWrapper}>
        <input autoFocus className={s.mainInput} value={enteredStringState} ref={mainInput} onChange={(e) => handleChangeValue(e.target.value)} />
        <div className={s.typeString}>{typeStringState}</div>
        <div className={s.keyboard}>
          {letters.map((value, index) => {
            return <Key letter={value} key={index} activeLetter={activeSymbol} />;
          })}
        </div>
        <div className={s.foot}>
          <div className={cn({ [s.mistakeCountGood]: mistakeCount === 0 }, { [s.mistakeCountPoor]: mistakeCount > 0 })}>{`${
            pathname === '/eng' ? 'Mistakes' : 'Ошибки'
          }: ${mistakeCount}`}</div>
          {/* <div className={s.themeChangeBtn}>{'Light theme'}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
