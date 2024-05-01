import axios from "axios";
import { createContext,useEffect,useState } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => {}
});

const UsercontextProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
                console.log(data.token);
            })
        }
    }, []);

        const result = {
            user,
            setUser
        }
    return (
        <UserContext.Provider value={result}>
            {children}
        </UserContext.Provider>
        )
}

export default UsercontextProvider;