import {create} from 'zustand';
import {TokenTypes, removeToken, setToken} from './utils';

interface AuthSave {
  token?: TokenTypes | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: TokenTypes) => void;
  signOut: () => void;
  hydrate: () => void;
}

export const _useAuth = create<AuthSave>((set, get) => ({
  status: 'idle',
  token: null,
  signIn: (token: TokenTypes) => {
    setToken(token);
    set({status: 'signIn', token});
  },
  signOut: () => {
    removeToken;
    set({status: 'signOut', token: null});
  },
  hydrate: () => {},
}));

export const signIn = (token: TokenTypes) => _useAuth.getState().signIn(token);
export const signOut = () => _useAuth.getState().signOut();
export const hydrate = () => _useAuth.getState().hydrate();
