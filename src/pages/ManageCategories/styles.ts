import styled from 'styled-components';

import { Form } from '@unform/web';

export const Container = styled.main``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
    > img:first-child {
      margin-right: 1.4rem;
    }
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  max-height: 50vh;
  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    border: 1px solid black;
    overflow-y: scroll;
    > li:first-child {
      margin-top: 0.5rem;
    }
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: lightgray;
      margin-bottom: 0.5rem;
      font-weight: bold;
      padding: 1.5rem;
      > div {
        margin-left: 1rem;
      }
    }
  }

  @media (min-width: 700px) {
    max-width: 700px;
    width: 700px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem 0.187rem 0.312rem;

  > img:first-child {
    margin-right: 1rem;
  }

  > img {
    cursor: pointer;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  > button {
    margin-left: 1rem;
  }
  > div {
    width: 60%;
  }

  @media (min-width: 700px) {
    > button {
      width: 15rem;
    }
    > div {
      width: 100%;
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

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 2.06rem;

  > button:first-child {
    margin-bottom: 1rem;
  }
  @media (min-width: 700px) {
    flex-direction: row;
    padding-left: 11.5rem;
    > button:first-child {
      margin-bottom: 0;
      margin-right: 1.5rem;
    }
  }
`;

export const StyledFormEdit = styled(Form)``;
