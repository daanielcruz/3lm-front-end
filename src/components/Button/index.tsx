import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  theme?: 'default' | 'secundary';
}

const Button: React.FC<ButtonProps> = ({
  type,
  content,
  onClick,
  theme = 'default',
}) => {
  return (
    <StyledButton type={type} onClick={onClick} theme={theme}>
      {content}
    </StyledButton>
  );
};

export default Button;
