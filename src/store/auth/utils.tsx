import {getİtem, removeİtem, setİtem} from '@utils/storage';

const TOKEN = 'token';

export type TokenTypes = {
  access: string;
  refreshToken: string;
};

export const getToken = () => getİtem<TokenTypes>(TOKEN);
export const setToken = (value: TokenTypes) => setİtem(TOKEN, value);
export const removeToken = () => removeİtem;
