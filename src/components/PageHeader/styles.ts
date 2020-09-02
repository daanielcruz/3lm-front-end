import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 0;
  height: 5.31rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  padding: 0 2rem;

  > strong {
    font-weight: bold;
    font-size: 1.3rem;
  }

  > span {
    text-decoration: none;
    color: var(--color-text-logout);
    font-size: 0.875rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 700px) {
    margin-bottom: 2.5rem;
    > strong {
      font-size: 2rem;
    }
  }
`;
