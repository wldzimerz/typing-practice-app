import { useNavigate } from 'react-router-dom';

import Key from '../key/Key';

import s from './Keyboard.module.scss';

const Keyboard = ({ letters }) => {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate('/');
  }
  return (
    <>
      <div>
        <button onClick={handleClickHome}>Home</button>
      </div>
      <div className={s.keyboard}>
        {letters.map((value, index) => {
          return <Key letter={value} key={index} />;
        })}
      </div>
    </>
  );
};

export default Keyboard;
