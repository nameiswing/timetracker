import React, { useState, useContext } from 'react'

const DataContext = React.createContext()
export const useDataCtx = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [clockedIn, setClockIn] = useState(!!0)
    const toggleClock = () => setClockIn( clockedIn => !clockedIn );

    const [breakTime, setBreakTime] = useState(!!0)
    const toggleBreak = () => setBreakTime( breakTime => !breakTime );

    const [mainHour, setMainHour] = useState(0)
    const [mainMinute, setMainMinute] = useState(0)
    const [mainSecond, setMainSecond] = useState(0)

    const [breakHour, setBreakHour] = useState(1) //Break.js
    const [breakMinute, setBreakMinute] = useState(5) //Break.js
    const [breakSecond, setBreakSecond]= useState(0)//Break.js


    return (
        <DataContext.Provider 
            value={{
                clockedIn, toggleClock,
                breakTime, toggleBreak,

                mainHour, setMainHour,
                mainMinute, setMainMinute,
                mainSecond, setMainSecond,

                breakHour, setBreakHour,
                breakMinute, setBreakMinute,
                breakSecond, setBreakSecond
            }}
        >
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider
