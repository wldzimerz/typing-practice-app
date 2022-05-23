import React from 'react';
import { useNavigate } from 'react-router-dom';

import s from './style.module.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.error}>404</p>
        <p>Page not found</p>
        <span onClick={() => navigate(-1)}>Back</span>
      </div>
    </div>
  );
};

export default NotFound;
