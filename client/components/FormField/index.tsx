import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './FormField.module.scss';

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, type }) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      {...register(name)}
      classes={{ root: styles.root }}
      name={name}
      label={label}
      type={type}
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      size="small"
      fullWidth
    />
  );
};
