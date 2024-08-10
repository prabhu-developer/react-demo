import { createContext, useContext, useState } from "react";

export const StoreContext = createContext()

export const useStoreContext = () => {
    const context = useContext(StoreContext)

    if (!context) {
        throw new Error("Use Store Context must use in StoreContext.Provider");
    }
    return context
}

export const StoreContextProvider = (props) => {
    const [user, setUser] = useState({
        "id": 1,
        "firstName": "Emily",
        "lastName": "Johnson",
        "maidenName": "Smith",
        "age": 28,
        "gender": "female",
        "email": "emily.johnson@x.dummyjson.com",
        "phone": "+81 965-431-3024",
        "username": "emilys",
        "password": "emilyspass",
        "birthDate": "1996-5-30",
        "image": "https://dummyjson.com/icon/emilys/128",
        "bloodGroup": "O-",
        "height": 193.24,
        "weight": 63.16,
        "eyeColor": "Green",
    })
    return (
        <StoreContext.Provider value={{ user, setUser }}>
            {props.children}
        </StoreContext.Provider>
    )
}