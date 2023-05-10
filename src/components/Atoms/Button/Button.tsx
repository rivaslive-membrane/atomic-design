import classNames from 'classnames';
import {MouseEventHandler, PropsWithChildren} from 'react';
import { classes } from './style.ts';

type ButtonProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'solid' | 'outline';
  htmlType?: 'submit' | 'button' | 'reset';
};

const Button = ({
  className,
  children,
  type = 'solid',
  htmlType = 'button',
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={htmlType}
      className={classNames([
        className,
        classes[type],
        'border border-solid',
        'text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800'
      ])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
