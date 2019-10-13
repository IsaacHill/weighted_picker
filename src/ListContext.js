import React, {createContext, useState} from "react"

export const ListContext = createContext()

export const ListProvider = props => {
    const [lists, setLists] = useState([]);

    return (
        <ListContext.Provider
           value={{
             lists,
             setLists
           }}
         >
           {props.children}
         </ListContext.Provider>
       );
}

export const ListConsumer = ListContext.Consumer