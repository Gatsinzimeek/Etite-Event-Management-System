import axios from "axios";
import { createContext,useEffect,useState } from "react";

export const UsersContext = createContext({
    user: null,
    setUser: () => {}
});

const UsercontextProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data.username)
            })
        }
    }, []);

        const result = {
            user,
            setUser
        }
    return <UsersContext.Provider value={result}> {children} </UsersContext.Provider>
        
}

export default UsercontextProvider;