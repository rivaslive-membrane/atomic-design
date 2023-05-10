import classNames from 'classnames';

type InputProps = {
  id?: string;
  name?: string;
  variant?: 'default' | 'error';
  className?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'number' | 'password' | 'date' | 'datetime';
};

const Input = ({
  id,
  name,
  type,
  placeholder,
  className,
  variant = 'default',
  ...rest
}: InputProps) => {
  return (
    <input
      type={type}
      id={id || name}
      className={classNames([
        className,
        variant === 'default'
          ? 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-500'
          : 'border-red-500 focus:border-red-600 dark:border-red-600 dark:focus:border-red-500',
        'bg-gray-50 text-gray-900 text-sm rounded-lg border focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500'
      ])}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
