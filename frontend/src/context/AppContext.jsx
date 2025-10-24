import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const navigate = useNavigate();

    const value={
        navigate
    };
    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export const useAppContext = ()=> useContext(AppContext)