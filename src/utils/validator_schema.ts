import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  username: Yup.string().required('Username is required').min(5),
  password: Yup.string().required('Password is required').min(5)
});
