import s from './Key.module.scss';

type Props = {
  letter: string;
};

const Key = ({ letter }: Props) => {
  return (
    <div className={s.keyWrap}>
      <div className={s.letter}>{letter}</div>
    </div>
  );
};

export default Key;
