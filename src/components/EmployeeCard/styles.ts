import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    height: 73%;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.45);
    }
  }
  > strong {
    font-weight: bold;
    margin-bottom: 0.25rem;
    cursor: pointer;
  }
  > span {
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    width: 17rem;
    height: 19.5rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem 2rem 0.312rem;

  > img:first-child {
    margin-right: 1rem;
  }

  > img {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    margin: 0 1rem 0.187rem 0.312rem;
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

export const ModalContentEmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 300px;

  > img {
    position: absolute;
    top: 1.3rem;
    right: 1.3rem;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    height: 100%;
    flex-direction: row;
    width: 800px;
  }
`;

export const EmployeePhoto = styled.div`
  width: 100%;

  > img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 700px) {
    width: 50%;
    > img {
      min-width: 400px;
      height: 100%;
    }
  }
`;

export const EmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.88rem;
  margin-right: 1.5rem;

  > h1 {
    margin: 2rem 0 0.62rem 0;
    margin-right: 1.1rem;
  }

  > span {
    margin-bottom: 1.5rem;
  }

  > strong {
    font-weight: bold;
    margin-bottom: 0.62rem;
  }

  > div {
    margin-bottom: 1.68rem;
  }
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

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Space = styled.div`
  margin-bottom: 1rem;
`;
