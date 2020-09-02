import api from './api';

interface SignInParams {
  email: string;
  password: string;
}

export const signIn = async (credentials: SignInParams) => {
  const { email, password } = credentials;

  const res = await api.post('/login', {
    email,
    password,
  });
  const { token, email: userInMail } = res.data;
  localStorage.setItem('@3lm:token', token);
  localStorage.setItem('@3lm:email', userInMail);

  api.defaults.headers.authorization = `Bearer ${token}`;
  return { email: userInMail };
};

export const signOut = () => {
  localStorage.removeItem('@3lm:token');
  localStorage.removeItem('@3lm:email');
};
