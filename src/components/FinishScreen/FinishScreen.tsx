import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { results } from '../../store';
import s from './style.module.scss';

// TODO: add user SPM to statisctics

export const FinishScreen = () => {
  const navigate = useNavigate();

  const { mistakes, statistics, language } = useAppSelector(results);

  return (
    <div className={s.container}>
      <div className={s.heading}>Congratulations!</div>
      <div className={s.resultsWrap}>
        Your results:
        <div>Mistakes: {mistakes}</div>
        <div>Statistics: {statistics}%</div>
        {/* <div>Speed: {'resultsValue.speed'} SPM</div> */}
        <div>{`Language: ${`${language === '/eng' ? 'English' : 'Russian'}`}`}</div>
      </div>
      <div className={s.buttons}>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate(`${language}`)}>Try again</button>
      </div>
    </div>
  );
};
