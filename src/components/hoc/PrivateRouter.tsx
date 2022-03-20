import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { results } from '../../store/resultsSlice';

type Props = {
  children: JSX.Element;
};

export const FinishPrivateRouter = ({ children }: Props) => {
  const resultsValue = useAppSelector(results);

  if (resultsValue.language === '' && resultsValue.mistakes === 0 && resultsValue.statistics === 100) {
    return <Navigate to='/' />;
  }

  return children;
};
