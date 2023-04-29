import{useState,createContext, Dispatch, ReactNode} from "react";

type UserProviderType = {
    children: ReactNode;
};

export interface UserContextInterface {
    isLogged: boolean;
    setIsLogged: Dispatch<boolean>;
};

const defaultUserContext: UserContextInterface = {
    isLogged: false,
    setIsLogged: (value:boolean) => {}
} as UserContextInterface;

export const UserContext = createContext(defaultUserContext);

function UserProvider({ children} : UserProviderType){
    const[isLogged, setIsLogged] = useState(false);

    return(
        <UserContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
