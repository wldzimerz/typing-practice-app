import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppSelectors } from 'src/store';
import s from './style.module.scss';

// TODO: add user SPM to statisctics

const FinishScreen: React.FC = () => {
  const navigate = useNavigate();

  const { mistakes, statistics, language } = useSelector(
    AppSelectors.resultsSelector
  );

  return (
    <div className={s.container}>
      <div className={s.heading}>Congratulations!</div>
      <div className={s.resultsWrap}>
        Your results:
        <div>Mistakes: {mistakes}</div>
        <div>Statistics: {statistics}%</div>
        {/* <div>Speed: {'resultsValue.speed'} SPM</div> */}
        <div>{`Language: ${`${
          language === '/eng' ? 'English' : 'Russian'
        }`}`}</div>
      </div>
      <div className={s.buttons}>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate(`${language}`)}>Try again</button>
      </div>
    </div>
  );
};

export default FinishScreen;
