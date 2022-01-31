import { Dialog, DialogContent } from '@mui/material';
import React from 'react';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';
import styles from './AuthDialog.module.scss';
import { ButtonClose } from '../buttons/ButtonClose/ButtonClose';

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ open, onClose }) => {
  const [formType, setFormType] = React.useState<'login' | 'register'>('login');

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent classes={{ root: styles.root }}>
        <div className={styles.close} onClick={onClose}>
          <ButtonClose />
        </div>
        {formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')} />}
        {formType === 'register' && <RegisterForm onOpenLogin={() => setFormType('login')} />}
      </DialogContent>
    </Dialog>
  );
};
