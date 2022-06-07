import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
import validateForm from 'utils/validate';

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    user: "",
    password: "",
    password2: "",
  }),
    validate: values => {
      const errors = {};
      
      validateForm({ isAuth: true, values, errors });
      
      return errors;
    },  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    displayName: 'RegisterForm',
  })(RegisterForm);