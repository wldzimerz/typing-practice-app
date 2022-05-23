import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppSelectors } from 'src/store';

export const FinishPrivateRouter: React.FC = ({ children }) => {
  const { language, mistakes, statistics } = useSelector(
    AppSelectors.resultsSelector
  );

  if (!language && mistakes === 0 && statistics === 100) {
    return <Navigate to='/' />;
  }

  return <>{children}</>;
};
