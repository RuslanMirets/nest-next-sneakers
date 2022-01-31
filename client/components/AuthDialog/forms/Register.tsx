import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { Button } from '../../buttons/ButtonBlue';
import { FormField } from '../../FormField';
import styles from './Forms.module.scss';
import { CreateUserDto } from '../../../utils/api/types';
import { UserApi } from '../../../utils/api';
import { setCookie } from 'nookies';
import { Alert } from '@mui/material';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit: any = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      console.log(data);
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
    } catch (error: any) {
      console.warn('Ошибка при регистрации', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <FormProvider {...form}>
      <h2>Регистрация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="firstName" label="Имя" type="text" />
        <FormField name="lastName" label="Фамилия" type="text" />
        <FormField name="email" label="Email" type="email" />
        <FormField name="password" label="Пароль" type="password" />
        {errorMessage && (
          <Alert severity="error">
            {errorMessage}
          </Alert>
        )}
        <div className={styles.actions}>
          <div className={styles.action}>
            Есть аккаунт?
            <div className={styles.btnTransition} onClick={onOpenLogin}>
              Войти
            </div>
          </div>
          <Button>Регистрация</Button>
        </div>
      </form>
    </FormProvider>
  );
};
