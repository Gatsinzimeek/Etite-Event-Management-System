import axios from "axios";
import { createContext,useEffect,useState } from "react";

export const userContext = createContext({});

const UsercontextProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        }else{
            console.log('user not found')
        }
    }, []);
    
        console.log(user)
        const result = {
            user,
            setUser
        }
    return (
        <userContext.Provider value={result}>
            {children}
        </userContext.Provider>
        )
}

export default UsercontextProvider;