import { Field } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/es/Field';
import { cloneElement, useMemo } from 'react';

import Text from '../../Atoms/Text';
import Input from '../../Atoms/Input';
import { classes } from './style';

type FormItemProps = FieldProps & {
  isRequired?: boolean;
};

const FormItem = ({
  children,
  rules = [],
  isRequired = false,
  ...props
}: FormItemProps) => {
  const resolveRules = useMemo(() => {
    return [{ required: isRequired }, ...rules];
  }, [rules, isRequired]);

  const isInput = useMemo(() => (children as any)?.type === Input, [children]);

  return (
    <Field rules={resolveRules} {...props}>
      {(control, meta) => {
        control.variant = meta.errors.length > 0 ? 'error' : 'default';
        return (
          <div className={classes.formItem}>
            {cloneElement(
              children as JSX.Element,
              isInput
                ? {
                    ...control
                  }
                : control
            )}
            {meta.errors.map((error, index) => (
              <Text variant="span" className="text-red-500" key={`rc-${index}`}>
                {error}
              </Text>
            ))}
          </div>
        );
      }}
    </Field>
  );
};

export default FormItem;
