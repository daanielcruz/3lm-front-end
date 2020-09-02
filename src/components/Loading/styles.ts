import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 2em;
`;

export const LoadingSpinner = styled.div`
  border: 8px solid rgba(38, 38, 38, 0.1);
  border-top: 8px solid var(--color-primary);
  border-radius: 50%;
  width: 4em;
  height: 4em;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
