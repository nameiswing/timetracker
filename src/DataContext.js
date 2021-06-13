import React, { useState, useContext } from 'react'

const DataContext = React.createContext()
export const useDataCtx = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [title, setTitle] = useState(!!1)
    const toggleTitle = () => setTitle( initialTitle => !initialTitle )

    const [clockedIn, setClockIn] = useState(!!0)
    const toggleClock = () => setClockIn( clockedIn => !clockedIn )

    return (
        <DataContext.Provider 
            value={{
                title, toggleTitle,
                clockedIn, toggleClock,
            }}
        >
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider
