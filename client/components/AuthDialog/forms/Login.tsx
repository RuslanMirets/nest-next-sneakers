import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from '@mui/material';
import { setCookie } from 'nookies';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { UserApi } from '../../../utils/api';
import { LoginDto } from '../../../utils/api/types';
import { LoginFormSchema } from '../../../utils/validations';
import { Button } from '../../buttons/ButtonBlue';
import { FormField } from '../../FormField';
import styles from './Forms.module.scss';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit: any = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
    } catch (error: any) {
      console.warn('Login error', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <FormProvider {...form}>
      <h2>Авторизация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="email" label="Email" type="email" />
        <FormField name="password" label="Пароль" type="password" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <div className={styles.actions}>
          <div>
            <div className={styles.btnTransition} onClick={onOpenRegister}>
              Регистрация
            </div>
          </div>
          <Button>Войти</Button>
        </div>
      </form>
    </FormProvider>
  );
};
