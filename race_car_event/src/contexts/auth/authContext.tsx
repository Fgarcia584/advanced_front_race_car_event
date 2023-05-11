import {
  useState,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import { User } from "../../types/user";

type UserProviderType = {
  children: ReactNode;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultUserContext = {
  user: {
    username: "",
    email: "",
  },
  setUser: (user: User) => {},
} as UserContextInterface;

export const UserContext = createContext(defaultUserContext);

export default function UserProvider({ children }: UserProviderType) {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
