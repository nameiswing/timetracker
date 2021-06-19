import React, { useState, useContext, useRef} from 'react'

const DataContext = React.createContext()
export const useDataCtx = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [clockedIn, setClockIn] = useState(!!0)
    const toggleClock = () => {
        setClockIn( clockedIn => !clockedIn )
    };

    const [breakTime, setBreakTime] = useState(!!0)
    const toggleBreak = () => setBreakTime( breakTime => !breakTime );

    const [mainHour, setMainHour] = useState(0)
    const [mainMinute, setMainMinute] = useState(0)
    const [mainSecond, setMainSecond] = useState(0)

    const [breakHour, setBreakHour] = useState(1)
    const [breakMinute, setBreakMinute] = useState(5)
    const [breakSecond, setBreakSecond]= useState(0)
    // const [timeSheet, setTimeSheet] = useState([])
    const timeSheet = useRef([])

    const storeToLocal = async () => {

        try {
            const timeLog = JSON.parse(localStorage.getItem("timeLog"))
            const idValue = JSON.parse(localStorage.getItem("idValue"))
            const date = JSON.parse(localStorage.getItem("date"))
            const started = JSON.parse(localStorage.getItem("started"))
            const ended = JSON.parse(localStorage.getItem("ended"))
            const duration = JSON.parse(localStorage.getItem("duration"))

            const logObj = await {...idValue, ...date, ...started, ...ended, ...duration}
            // setTimeSheet([...timeSheet.current, logObj])
            const addTimeLog = [...timeLog, logObj]
            const stringifiedLog = JSON.stringify(addTimeLog)

            localStorage.setItem("timeLog", stringifiedLog)
            timeSheet.current = [...timeSheet.current, logObj]
        }
        catch(err) {console.error(err.message)}
    } 

    const storeTempObjContent = async (key, content) => {
        const stringifiedLogItem = JSON.stringify(content)
        localStorage.setItem(key, stringifiedLogItem)
        // console.log(JSON.parse(localStorage.getItem(key)))
    } // to Date.js, Timer.js

    const fetchFromLocalStorage = () => {
        let timeLog = localStorage.getItem("timeLog")
        if(typeof timeLog !== "string") {
            localStorage.setItem("timeLog", "[]")
            return timeLog
        }
        const parsedStorage = JSON.parse(timeLog).reverse()
        timeSheet.current = [...parsedStorage]
    } // fetch key value from localStorage and parse to JSON; Timelog.js

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
        const idValue = Date.now();
        const timeNow = d.toTimeString().substring(0, 5)
        const dateNow = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
        const hours = (d.getHours()).toString()
        const minutes = (d.getMinutes()).toString()
    
        return { d, dateNow, hours, idValue, minutes, months, timeNow } 
    } // to Date.js



    return (
        <DataContext.Provider 
            value={{
                getDate,
                storeToLocal, storeTempObjContent,// get/add log in localStorage

                timeSheet, fetchFromLocalStorage,

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
