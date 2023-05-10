import FormInstance, { FormProps } from 'rc-field-form';
import FormItem from './FormItem';
import { classes } from './style';
import classNames from 'classnames';

const Form = ({ name, form, className, ...props }: FormProps) => {
  return (
    <FormInstance
      className={classNames([className, classes.form])}
      name={name}
      form={form}
      {...props}
    />
  );
};

Form.Item = FormItem;

export default Form;
