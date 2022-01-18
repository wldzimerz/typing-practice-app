import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { results } from '../../store/resultsSlice';

import s from './FinishScreen.module.scss';

const FinishScreen = () => {
  const navigate = useNavigate();

  const resultsValue = useAppSelector(results);

  return (
    <div className={s.container}>
      <div className={s.heading}>Congratulations!</div>
      <div className={s.resultsWrap}>
        Your results:
        <div>Mistakes: {resultsValue.mistakes}</div>
        <div>Statistics: {resultsValue.statistics}%</div>
        <div>Speed: {'resultsValue.speed'} SPM</div> <div>{`Language: ${`${resultsValue.language === '/eng' ? 'English' : 'Russian'}`}`}</div>
      </div>
      <div className={s.buttons}>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate(`${resultsValue.language}`)}>Try again</button>
      </div>
    </div>
  );
};

export default FinishScreen;
