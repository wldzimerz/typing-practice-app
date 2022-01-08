import s from './Key.module.scss';

const Key = ({ letter }) => {
  function handleKeyDown(e) {
    console.log(e);
    // console.log(letter);
  }

  return (
    <>
      <div className={s.keyWrap}>
        <div tabidnex={-1} className={s.letter} onKeyDown={(e) => handleKeyDown(e.key)}>
          {letter}
        </div>
      </div>
    </>
  );
};

export default Key;
