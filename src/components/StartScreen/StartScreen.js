import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';

import s from './StartScreen.module.scss';

const StartScreen = () => {
  const navigate = useNavigate();
  function handleSubmitLanguage(values) {
    switch (values.lang) {
      case 'English':
        return navigate('/eng');
      case 'Russian':
        return navigate('/rus');
      default:
        return alert('Please select language');
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          lang: '',
        }}
        onSubmit={(values) => {
          handleSubmitLanguage(values);
        }}
      >
        {({ values }) => (
          <Form>
            <div id="my-radio-group">Select language</div>
            <div role="group" aria-labelledby="my-radio-group" className={s.languages}>
              <label>
                <Field type="radio" name="lang" value="English" />
                English
              </label>
              <label>
                <Field type="radio" name="lang" value="Russian" />
                Russian
              </label>
              <div>Picked: {values.lang}</div>
            </div>

            <button type="submit">Start!</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StartScreen;
