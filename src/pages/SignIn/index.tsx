import React, { useCallback, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';

import {
  loginRequestSaga,
  setLoggingIn,
} from '../../redux/core/actions/sessionActions';
import { setClearAlert } from '../../redux/core/actions/alertActions';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, StyledForm } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}
interface AlertState {
  message: string | null;
  type: 'warning' | 'success' | null;
}

interface SessionState {
  email: string;
  loggingIn: boolean;
}

interface IState {
  session: SessionState;
  alert: AlertState;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { loggingIn } = useSelector((state: IState) => state.session);
  const alert = useSelector((state: IState) => state.alert);

  const { addToast } = useToasts();

  useEffect(() => {
    if (alert.type) {
      addToast(alert.message, {
        appearance: alert.type,
        autoDismiss: true,
      });
      dispatch(setClearAlert());
    }
  }, [addToast, dispatch, alert]);

  const handleSubmit = useCallback(
    (data: SignInFormData) => {
      dispatch(setLoggingIn(true));
      dispatch(
        loginRequestSaga({
          email: data.email,
          password: data.password,
        }),
      );
    },
    [dispatch],
  );

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <strong>3lm-Employees</strong>
        <Input
          type="email"
          id="email"
          name="email"
          label="E-mail"
          placeholder="E-mail"
          required
        />
        <Input
          type="password"
          id="password"
          name="password"
          label="Senha"
          placeholder="Senha"
          required
        />
        <Button
          type="submit"
          content={loggingIn ? 'Carregando...' : 'Entrar'}
        />
      </StyledForm>
    </Container>
  );
};

export default SignIn;
