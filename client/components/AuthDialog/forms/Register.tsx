import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { Button } from '../../buttons/ButtonBlue';
import { FormField } from '../../FormField';
import styles from './Forms.module.scss';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <h2>Регистрация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="firstName" label="Имя" type="text" />
        <FormField name="lastName" label="Фамилия" type="text" />
        <FormField name="email" label="Email" type="email" />
        <FormField name="password" label="Пароль" type="password" />
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
