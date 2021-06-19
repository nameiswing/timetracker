import React, { useState, useContext } from 'react'

const DataContext = React.createContext()
export const useDataCtx = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    let [clockedIn, setClockIn] = useState(!!0)
    const toggleClock = () => setClockIn( clockedIn => !clockedIn );

    const [breakTime, setBreakTime] = useState(!!0)
    const toggleBreak = () => setBreakTime( breakTime => !breakTime );

    const [mainHour, setMainHour] = useState(0)
    const [mainMinute, setMainMinute] = useState(0)
    const [mainSecond, setMainSecond] = useState(0)

    const [breakHour, setBreakHour] = useState(1)
    const [breakMinute, setBreakMinute] = useState(5)
    const [breakSecond, setBreakSecond]= useState(0)
    const [timeSheet, setTimeSheet] = useState([])

    const storeToLocal = (obj) => {

        const timeLogs = localStorage.getItem("timeLogs")
        const parsedStorage = JSON.parse(timeLogs)
        localStorage.clear();

        const addTimeLog = [...parsedStorage, obj]
        const stringifiedLog = JSON.stringify(addTimeLog)

        localStorage.setItem("timeLogs", stringifiedLog)
    } 

    const storeTempObjContent = (content) => {
        const logContent = JSON.parse(localStorage.getItem("objectContent"))
        localStorage.removeItem("objectContent")
        const tempLogItem = {...logContent, content}
        const stringifiedLogItem = JSON.stringify(tempLogItem)
        localStorage.setItem("objectContent", stringifiedLogItem)
    } // to Date.js

    const getDate = () => {

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
    
        const d = new Date();
        const timeNow = d.toTimeString().substring(0, 5)
        const dateNow = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
        const hours = (d.getHours()).toString()
        const minutes = (d.getMinutes()).toString()
    
        return { dateNow, hours, minutes, months, timeNow } 
    } // to Date.js



    return (
        <DataContext.Provider 
            value={{
                getDate,
                storeToLocal, storeTempObjContent,// get/add log in localStorage

                timeSheet, setTimeSheet,

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
