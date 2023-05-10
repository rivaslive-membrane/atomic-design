import classNames from 'classnames';

export const classes = {
  solid: classNames([
    'border-blue-700 hover:border-blue-800',
    'dark:border-blue-600 dark:hover:border-blue-700',
    'bg-blue-700 hover:bg-blue-800',
    'dark:bg-blue-600 dark:hover:bg-blue-700'
  ]),
  outline: classNames([
    'border-blue-700 hover:border-blue-800',
    'dark:border-blue-600 dark:hover:border-blue-700'
  ])
};
