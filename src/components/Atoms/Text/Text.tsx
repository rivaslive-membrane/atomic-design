import { createElement, PropsWithChildren } from 'react';

type TextProps = {
  className?: string;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'span'
    | 'p'
    | 'div'
    | 'strong'
    | 'b';
};

const Text = ({ variant = 'h2', ...props }: PropsWithChildren<TextProps>) => {
  return createElement(variant, props);
};

export default Text;
