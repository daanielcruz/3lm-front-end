import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0 2rem;

  > strong {
    font-size: 1.5rem;
    font-weight: bold;
  }
  > div {
    display: flex;
    margin-top: 1.5rem;
    > a:first-child {
      margin-right: 1rem;
    }
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 8rem;
      height: 2.5rem;
      background: var(--color-primary);
      color: var(--color-text-in-button);
      font-weight: bold;
      font-size: 0.6rem;
      cursor: pointer;
      transition: opacity 1s;
      &:hover {
        opacity: 0.9;
      }
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;

    > strong {
      font-size: 2.5rem;
      font-weight: bold;
    }

    > div {
      > a {
        font-size: 0.875rem;
        width: 14rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 2rem;
`;

export const CardsItem = styled.div`
  display: flex;
  padding: 1rem;
`;
