import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { enteredString, setTypeString, setEnteredString, typeString } from '../../store/typeStringSlice';
import { getRandomWord } from '../../services/random-words-generator';

import Key from '../key/Key';

import s from './Keyboard.module.scss';

type Props = {
  letters: readonly string[];
};

const Keyboard = ({ letters }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const typeStringState = useAppSelector(typeString);
  const enteredStringState = useAppSelector(enteredString);

  useEffect(() => {
    dispatch(setTypeString(getRandomWord(10)));
  }, []);

  function handleClickHome() {
    navigate('/');
  }

  function handleChangeValue(value: string) {
    const symbol = value.slice(-1);
    dispatch(setEnteredString(symbol));
  }

  function handleGetNewString() {
    dispatch(setTypeString(getRandomWord(10)));
  }

  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.homeBtn} onClick={handleClickHome}>
          Home
        </div>
        <div className={s.newStringBtn} onClick={handleGetNewString}>
          Get new string
        </div>
        {/* <div className={s.timer}>{`0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div> */}
      </div>
      <div className={s.keyboardWrapper}>
        <input className={s.mainInput} onChange={(e) => handleChangeValue(e.target.value)} />
        <div className={s.typeString}> {typeStringState.join(' ')} </div>
        <div className={s.keyboard}>
          {letters.map((value, index) => {
            return <Key letter={value} key={index} />;
          })}
        </div>
        <div className={s.themeChangeBtn}>{'Light theme'}</div>
      </div>
    </div>
  );
};

export default Keyboard;
