import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LoginFormSchema } from '../../../utils/validations';
import { Button } from '../../buttons/ButtonBlue';
import { FormField } from '../../FormField';
import styles from './Forms.module.scss';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <h2>Авторизация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
    </FormProvider>
  );
};
