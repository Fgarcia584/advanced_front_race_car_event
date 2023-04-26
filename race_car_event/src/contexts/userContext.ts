import{useState,createContext} from "react";

export const userContext = createContext(false);

const UserProvider=()=>{
    const[isLogged, setIsLogged] =useState(false);

    return(
        // <userContext.Provider value={{isLogged}}>
        //     {props.children}
        // </userContext.Provider>
        isLogged
    );
};

export default UserProvider;
