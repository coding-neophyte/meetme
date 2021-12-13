import { useContext, useState, createContext } from "react";

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}

const useUserContext = () =>{
    const context = useContext(UserContext)

    if(context === undefined){
        throw new Error ('user must be defined within proper provider')
    }
    return context
}


export { UserProvider, useUserContext }
