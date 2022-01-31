import React from 'react';
import styles from './Button.module.scss';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const ButtonClose: React.FC = ({ children }) => {
  return (
    <button className={styles.button}>
      <CloseRoundedIcon />
    </button>
  );
};
