import React, { useContext } from "react"

const AllCryptoContext = React.createContext()

export const AllCryptoProvider = ({ children }) => {



    return <AllCryptoContext.Provider value={"ContextTrial"}>
        {children}
    </AllCryptoContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AllCryptoContext)
}