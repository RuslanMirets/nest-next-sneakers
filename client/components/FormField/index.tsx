import { TextField } from '@mui/material';
import React from 'react';
import styles from './FormField.module.scss';

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, type }) => {
  return (
    <TextField
      classes={{ root: styles.root }}
      name={name}
      label={label}
      type={type}
      size="small"
      fullWidth
    />
  );
};
