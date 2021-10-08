import React, { createContext,useState } from 'react';

export const DataContext = createContext();


const ContextProvider = ({children}) => {

    

    
    const [data, setData] = useState({
    bill: "",
    people: "",
    custom: ""
});
 


    return (
        <DataContext.Provider value={[data, setData]}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider;
