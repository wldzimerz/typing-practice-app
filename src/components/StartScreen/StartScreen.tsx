import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import s from './style.module.scss';

export const StartScreen = () => {
  const navigate = useNavigate();

  function handleSubmitLanguage(values: { lang: string }): void {
    switch (values.lang) {
      case 'English':
        return navigate('/eng');
      case 'Russian':
        return navigate('/rus');
      default:
        break;
    }
  }

  return (
    <div className={s.startScreen}>
      <div className={s.heading}>typing practice</div>
      <Formik
        initialValues={{
          lang: '',
        }}
        onSubmit={(values) => handleSubmitLanguage(values)}
      >
        {({ values }) => (
          <Form>
            <div id='lang-radio-group'>Select language</div>
            <div role='group' aria-labelledby='lang-radio-group' className={s.languages}>
              <Field type='radio' name='lang' id='eng' value='English' />
              <label htmlFor='eng'>English</label>
              <Field type='radio' name='lang' id='rus' value='Russian' />
              <label htmlFor='rus'>Russian</label>
              <div>Picked: {values.lang}</div>
            </div>

            <button type='submit' disabled={!values.lang} className={s.startBtn}>
              Start
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
