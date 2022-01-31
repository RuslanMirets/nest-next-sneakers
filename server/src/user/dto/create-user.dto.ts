import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(1)
  firstName: string;

  @Length(1)
  lastName: string;

  @IsEmail(undefined, { message: 'Некорректная почта' })
  email: string;

  @Length(6, 18, { message: 'Пароль должен быть минимум 6 и максимум 18 символов' })
  password: string;
}
