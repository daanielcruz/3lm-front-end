import styled from 'styled-components';

interface ButtonProps {
  theme: 'default' | 'secundary';
}

export const StyledButton = styled.button<ButtonProps>`
  height: 2.5rem;
  width: 100%;
  background: ${({ theme }) =>
    theme === 'default' ? 'var(--color-primary)' : '#fff'};
  color: ${({ theme }) =>
    theme === 'default'
      ? 'var(--color-text-in-button)'
      : 'var(--color-primary)'};
  border: ${({ theme }) =>
    theme === 'default' ? 'none' : '1px solid var(--color-primary)'};
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
`;
