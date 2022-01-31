import React from 'react';
import { Button } from '../../buttons/ButtonBlue';
import { FormField } from '../../FormField';
import styles from './Forms.module.scss';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  return (
    <>
      <h2>Авторизация</h2>
      <form>
        <FormField name="email" label="Email" type="email" />
        <FormField name="password" label="Пароль" type="password" />
        <div className={styles.actions}>
          <div>
            <div className={styles.btnTransition} onClick={onOpenRegister}>
              Регистрация
            </div>
          </div>
          <Button>Войти</Button>
        </div>
      </form>
    </>
  );
};
