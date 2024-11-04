"use client"
import { ClienteType, LoginType } from "@/types/type";
import { createContext, useContext, useState } from "react";

type AuthContextProps = {
    user: LoginType | null;
    login: (user:LoginType)=>void;
    logout: ()=>void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider = ({children}:{children:React.ReactNode})=>{

    const [user, setUser] = useState<LoginType>({
        cep: "",
        idCadastro: 0,
        nome: '',
        email: '',
        senha: ''
    })

    const login = (user: LoginType)=>{
        setUser(user)
    }

    const logout = ()=>{
        setUser({cep: '',idCadastro: 0, nome: '', email: '', senha: ''})
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}

//Outra Opção, criando o hook
const useAuth = ()=>{
    const context = useContext(AuthContext)
    return context
}
export {useAuth}