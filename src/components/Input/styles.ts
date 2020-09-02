import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  height: 2.5rem;
  border: 1px solid var(--color-input-border);
  outline: none;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;
