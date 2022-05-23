import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/hooks';
import { getRandomLocalizedWords } from 'src/services/';
import { Keyboard } from 'src/components';
import {
  AppSelectors,
  resetEnteredString,
  setEnteredString,
  setResults,
  setTypeString,
} from 'src/store';

import s from './style.module.scss';
import { PATHS_ENUM } from 'src/App';

// TODO: add user SPM to statisctics
// TODO: light theme toggler

const TypingScreen: React.FC = () => {
  let [symbolCount, setSymbolCount] = useState<number>(0);
  let [mistakeCount, setMistakeCount] = useState<number>(0);
  let [statisticsValue, setStatistics] = useState<number>(0);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const typeStringState = useSelector(AppSelectors.typeStringSelector);
  const enteredStringState = useSelector(AppSelectors.enteredStringSelector);
  const mainInput = useRef<HTMLInputElement>(null);
  const isEngPath = pathname === PATHS_ENUM.ENG;

  let activeSymbol: string = '';
  if (typeStringState) activeSymbol = typeStringState[symbolCount];

  const handleChangeValue = (value: string): void => {
    const symbol = value.slice(-1);
    getStatistics();
    if (
      typeStringState &&
      enteredStringState.length === typeStringState.length - 1
    ) {
      dispatch(
        setResults({
          mistakes: mistakeCount,
          statistics: statisticsValue,
          language: pathname,
        })
      );
      navigate(PATHS_ENUM.FINISH);
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
    const value =
      totalPercentage - (mistakeCount / enteredStringState.length) * 100;

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
        <div className={s.homeBtn} onClick={() => navigate(PATHS_ENUM.START)}>
          {isEngPath ? 'Home' : 'На главную'}
        </div>
        <div className={s.newStringBtn} onClick={handleGetNewString}>
          {isEngPath ? 'Get new string' : 'Получить новую строку'}
        </div>
      </div>
      <div className={s.keyboardWrapper}>
        <input
          autoFocus
          className={s.mainInput}
          value={enteredStringState}
          ref={mainInput}
          onChange={(e) => handleChangeValue(e.target.value)}
        />
        <div className={s.typeString}>{typeStringState}</div>
        <div className={s.keyboard}>
          <Keyboard path={pathname} symbol={activeSymbol} />
        </div>
        <div className={s.foot}>
          <div
            className={cn(
              { [s.mistakeCountGood]: mistakeCount === 0 },
              { [s.mistakeCountPoor]: mistakeCount > 0 }
            )}
          >{`${isEngPath ? 'Mistakes' : 'Ошибки'}: ${mistakeCount}`}</div>
          <div className={s.stats}>{`${
            isEngPath ? 'Statistics' : 'Статистика'
          }: ${statisticsValue}%`}</div>
          {/* <div className={s.themeChangeBtn}>{'Light theme'}</div> */}
        </div>
      </div>
    </div>
  );
};

export default TypingScreen;
