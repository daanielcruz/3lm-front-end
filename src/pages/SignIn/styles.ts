import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.main`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-primary);
  padding: 2rem;
  width: 20rem;

  > strong {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }

  @media (min-width: 700px) {
    width: 30rem;
  }

  > strong {
    margin-bottom: 2.5rem;
  }
  > div {
    > input {
      margin-bottom: 2rem;
      padding: 0.5rem;
    }
  }
`;
