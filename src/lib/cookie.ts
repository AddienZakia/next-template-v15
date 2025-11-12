import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => cookies.get('hiring-app');

export const setToken = (token: string) => {
  cookies.set('hiring-app', token, { path: '/' });
};

export const removeToken = () => cookies.remove('hiring-app', { path: '/' });
