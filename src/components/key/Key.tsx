import cn from 'classnames';

import s from './Key.module.scss';

type Props = {
  letter: string;
  activeLetter: string;
};

const Key = ({ letter, activeLetter }: Props) => {
  return (
    <div className={cn(s.keyWrap, { [s.active]: letter === activeLetter })}>
      <div className={s.letter}>{letter}</div>
    </div>
  );
};

export default Key;
