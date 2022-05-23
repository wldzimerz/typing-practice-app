import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { PATHS_ENUM } from 'src/App';

import s from './style.module.scss';

const StartScreen: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<
    PATHS_ENUM.ENG | PATHS_ENUM.RUS | 'none'
  >('none');

  const navigate = useNavigate();

  const handleSelectLang = useCallback(
    (lang: PATHS_ENUM.RUS | PATHS_ENUM.ENG) => {
      if (lang === selectedLang) {
        return setSelectedLang('none');
      }

      setSelectedLang(lang);
    },
    [selectedLang]
  );

  const currentLanguageString: { [key: string]: string } = {
    [PATHS_ENUM.RUS]: 'Picked: Russian',
    [PATHS_ENUM.ENG]: 'Picked: English',
    none: 'Please select language',
  };

  return (
    <div className={s.startScreen}>
      <div className={s.heading}>typing practice</div>
      <div>Select language</div>

      <div className={s.languages}>
        <span
          onClick={() => handleSelectLang(PATHS_ENUM.ENG)}
          className={cn({ [s.checked]: selectedLang === PATHS_ENUM.ENG })}
        >
          English
        </span>
        <span
          onClick={() => handleSelectLang(PATHS_ENUM.RUS)}
          className={cn({ [s.checked]: selectedLang === PATHS_ENUM.RUS })}
        >
          Russian
        </span>
      </div>

      <div>{currentLanguageString[selectedLang]}</div>

      <button
        className={s.startBtn}
        disabled={selectedLang === 'none'}
        onClick={() => navigate(selectedLang!)}
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
