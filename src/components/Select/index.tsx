import React, { useRef, useEffect, SelectHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { Container, Label, StyledSelect } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: Array<Object>;
  defaultValue?: string;
  label: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  defaultValue = '',
  options,
  label,
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <Label>{label}</Label>
      <StyledSelect
        defaultValue={defaultValue}
        defaultChecked={true}
        ref={selectRef}
        {...rest}
      >
        <option value="" disabled>
          Selecione uma opção...
        </option>
        {options.map((option: any) => (
          <option value={option.name} key={option.name}>
            {option.name}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};
export default Select;
