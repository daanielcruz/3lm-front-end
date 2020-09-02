import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.main``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoBackBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold !important;
    > img {
      margin-right: 1.4rem;
    }
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
  width: 700px;

  > div {
    width: 100%;
    > div {
      width: 100%;
      > input {
        width: 100%;
      }
    }
  }
`;

export const InputGroup = styled.div`
  align-items: center;
  > div {
    margin-bottom: 1rem;
  }

  @media (min-width: 700px) {
    display: flex;
    > div {
      margin-right: 2rem;
      margin-bottom: 2.5rem;
    }
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 700px) {
    justify-content: flex-end;
    > button {
      margin-right: 2rem;
      width: 11rem;
    }
  }
`;

export const ModalContent = styled.div`
  max-width: 60vw;

  > img {
    position: absolute;
    top: 1.3rem;
    right: 1.3rem;
    cursor: pointer;
  }

  > h1 {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 700px) {
    > h1 {
      margin-right: 22.8rem;
    }
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Space = styled.div`
  margin-bottom: 1rem;
`;

export const LoadingStyle = styled.div`
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  > div {
    width: 50% !important;
  }
`;
