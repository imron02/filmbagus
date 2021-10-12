import { createContext } from 'react';
import { LoginInterface } from 'screens/login/login_screen';

interface AuthContextInterface {
  userToken: string | null;
  signIn: (data: LoginInterface) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextInterface>({
  userToken: null,
  signIn: async () => undefined,
  signOut: async () => undefined
});

export default AuthContext;
