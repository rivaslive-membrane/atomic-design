import { PropsWithChildren } from 'react';

type InputLabelProps = {
  htmlFor?: string;
  required?: boolean;
};

const InputLabel = ({
  htmlFor,
  required,
  children
}: PropsWithChildren<InputLabelProps>) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-gray-400"
    >
      {required ? <span className="text-red-500">*</span> : null} {children}
    </label>
  );
};

export default InputLabel;
