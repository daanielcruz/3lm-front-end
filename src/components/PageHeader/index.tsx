import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '../../services/sessionServices';

import { setLogout } from '../../redux/core/actions/sessionActions';

import { Container } from './styles';

const PageHeader: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    signOut();
    dispatch(setLogout());
  }, [dispatch]);

  return (
    <Container>
      <strong>3lm-Employees</strong>
      <span onClick={handleSignOut}>Sair</span>
    </Container>
  );
};

export default PageHeader;
