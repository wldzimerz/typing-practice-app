import cn from 'classnames';

import s from './Key.module.scss';

type Props = {
  letter: string;
  activeSymbol: string;
};

const Key = ({ letter, activeSymbol }: Props) => {
  return (
    <div className={cn(s.keyWrap, { [s.active]: letter === activeSymbol })}>
      <div className={s.letter}>{letter}</div>
    </div>
  );
};

export default Key;
