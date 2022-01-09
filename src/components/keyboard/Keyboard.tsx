import { ProfilerProps, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Key from '../key/Key';

import s from './Keyboard.module.scss';

type Props = {
  letters: readonly string[];
};

const Keyboard = ({ letters }: Props) => {
  let [minutes, setMinutes] = useState(1);
  let [seconds, setSeconds] = useState(59);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // startTyping();
  });

  function handleClickHome() {
    navigate('/');
  }

  // function startTyping() {
  //   const timer_id = setInterval(() => {
  //     if (seconds !== 0) {
  //       setSeconds(--seconds);
  //     } else if (seconds < 1) {
  //       setSeconds(59);
  //     } else if (seconds === 59 && minutes > 0) {
  //       setMinutes(0);
  //     } else if (minutes === 0 && seconds === 0) {
  //       clearInterval(timer_id);
  //       alert('stop');
  //     }
  //   }, 1000);
  // }

  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.homeBtn} onClick={handleClickHome}>
          Home
        </div>
        {/* <div className={s.timer}>{`0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div> */}
      </div>
      <div className={s.keyboardWrapper}>
        <input className={s.mainInput} />
        <div className={s.typeString}> {pathname === '/rus' ? 'строка строка строка строка строка' : 'string string string string string'} </div>
        <div className={s.keyboard}>
          {letters.map((value, index) => {
            return <Key letter={value} key={index} />;
          })}
        </div>
        <div className={s.themeChangr}>Light theme</div>
      </div>
    </div>
  );
};

export default Keyboard;
