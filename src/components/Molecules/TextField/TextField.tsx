import Input from '../../Atoms/Input';
import InputLabel from '../../Atoms/InputLabel';
import { useMemo } from 'react';

type TextFieldProps = {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  type?: 'text' | 'number' | 'password' | 'date' | 'datetime';
};

const TextField = ({
  id,
  name,
  type,
  placeholder,
  label,
  required,
  value,
  ...rest
}: TextFieldProps) => {
  const resolveValue = useMemo(() => {
    if (typeof value !== 'string') {
      return undefined;
    }
    return value;
  }, [value]);

  return (
    <div>
      <InputLabel htmlFor={id || name} required={required}>
        {label}
      </InputLabel>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={resolveValue}
        {...rest}
      />
    </div>
  );
};

export default TextField;
