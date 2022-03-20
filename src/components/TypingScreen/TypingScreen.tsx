import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { getRandomLocalizedWords } from '../../services/';
import { Keyboard } from '../';
import s from './style.module.scss';
import { enteredString, resetEnteredString, setEnteredString, setResults, setTypeString, typeString } from '../../store';

// TODO: add user SPM to statisctics
// TODO: light theme toggler

export const TypingScreen = () => {
  let [symbolCount, setSymbolCount] = useState<number>(0);
  let [mistakeCount, setMistakeCount] = useState<number>(0);
  let [statisticsValue, setStatistics] = useState<number>(0);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const typeStringState = useAppSelector(typeString);
  const enteredStringState = useAppSelector(enteredString);
  const mainInput = useRef<HTMLInputElement>(null);

  let activeSymbol: string = '';
  if (typeStringState) activeSymbol = typeStringState[symbolCount];

  const handleChangeValue = (value: string): void => {
    const symbol = value.slice(-1);
    getStatistics();
    if (typeStringState && enteredStringState.length === typeStringState.length - 1) {
      dispatch(setResults({ mistakes: mistakeCount, statistics: statisticsValue, language: pathname }));
      navigate('/finish');
    } else if (symbol === activeSymbol) {
      dispatch(setEnteredString(symbol));
      setSymbolCount((prevState) => ++prevState);
    } else {
      setMistakeCount((prevState) => ++prevState);
    }
  };

  function handleGetNewString(): void {
    dispatch(setTypeString(getRandomLocalizedWords(pathname, 10)));
    dispatch(resetEnteredString());
    setSymbolCount(0);
    setMistakeCount(0);
    setStatistics(0);
    if (mainInput && mainInput.current) {
      mainInput.current.focus();
    }
  }

  function getStatistics(): void {
    const totalPercentage = 100;
    const value = totalPercentage - (mistakeCount / enteredStringState.length) * 100;

    if (mistakeCount < 0 && enteredStringState.length === 0) {
      setStatistics(totalPercentage);
    } else if (value <= 0 || !value) {
      setStatistics(0);
    } else if (mistakeCount >= 0) {
      setStatistics(Math.floor(value));
    }
  }

  useEffect(() => {
    dispatch(setTypeString(getRandomLocalizedWords(pathname, 10)));
    dispatch(resetEnteredString());
  }, [pathname, dispatch]);

  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.homeBtn} onClick={() => navigate('/')}>
          {pathname === '/eng' ? 'Home' : 'На главную'}
        </div>
        <div className={s.newStringBtn} onClick={handleGetNewString}>
          {pathname === '/eng' ? 'Get new string' : 'Получить новую строку'}
        </div>
      </div>
      <div className={s.keyboardWrapper}>
        <input autoFocus className={s.mainInput} value={enteredStringState} ref={mainInput} onChange={(e) => handleChangeValue(e.target.value)} />
        <div className={s.typeString}>{typeStringState}</div>
        <div className={s.keyboard}>
          <Keyboard path={pathname} symbol={activeSymbol} />
        </div>
        <div className={s.foot}>
          <div className={cn({ [s.mistakeCountGood]: mistakeCount === 0 }, { [s.mistakeCountPoor]: mistakeCount > 0 })}>{`${
            pathname === '/eng' ? 'Mistakes' : 'Ошибки'
          }: ${mistakeCount}`}</div>
          <div className={s.stats}>{`${pathname === '/eng' ? 'Statistics' : 'Статистика'}: ${statisticsValue}%`}</div>
          {/* <div className={s.themeChangeBtn}>{'Light theme'}</div> */}
        </div>
      </div>
    </div>
  );
};