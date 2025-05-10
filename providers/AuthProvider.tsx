import { User } from '@/types';
import * as SecureStore from 'expo-secure-store';
import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

const avatar = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png';

type Session = {
  user: User;
  accessToken: string;
};

const AuthContext = createContext<{
  signIn: (handle: string) => void;
  signOut: () => void;
  session?: Session | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSession();
  }, []);

  const signIn = (handle: string) => {
    const session: Session = {
      user: {
        id: '1',
        name: 'Qwe',
        handle,
        avatar,
      },
      accessToken: 'accessToken',
    };

    setSession(session);
    saveSession(session);
  };

  const signOut = async () => {
    setSession(null);
    saveSession(null);
  };

  const saveSession = async (value: Session | null) => {
    if (value) {
      await SecureStore.setItemAsync('session', JSON.stringify(value));
    } else {
      await SecureStore.deleteItemAsync('session');
    }
  };

  const loadSession = async () => {
    const sessionData = await SecureStore.getItemAsync('session');
    setSession(sessionData ? JSON.parse(sessionData) : null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, session, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
