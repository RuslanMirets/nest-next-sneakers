import { CreateUserDto, LoginDto, ResponseUser } from './types';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const UserApi = {
  async register(dto: CreateUserDto) {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      '/auth/register',
      dto,
    );
    return data;
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: ResponseUser }>('/auth/login', dto);
    return data;
  },
  async getProfile(token: string) {
    const { data } = await instance.get<ResponseUser>('/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};
