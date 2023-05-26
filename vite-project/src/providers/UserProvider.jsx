import { useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const UserProvider = ({children}) => {
    const {user, set} = useState(null);
    const login = function(username, password){
        fetch().then(respuesta =>respuesta.json).then(usuarios =>{
            //Verificación usuarios
            return set({username});
        })
        .catch((error)=>console.error(error))    
    }
    const save = function(username, password) {
        fetch(url, {});
    }
    return <UserContext.Provider value={{user, set, access, save}}>
        {children}</UserContext.Provider>;
};
export default UserProvider;