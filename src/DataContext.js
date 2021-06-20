import React, { useState, useContext, useRef} from 'react'
import uuid from 'react-uuid'

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
    const timeSheet = useRef([])

    const storeToLocalStorage = async () => {
        try {
            const timeLog = await JSON.parse(localStorage.getItem("timeLog"))
            const idValue = await JSON.parse(localStorage.getItem("idValue"))
            const date = await JSON.parse(localStorage.getItem("date"))
            const started = await JSON.parse(localStorage.getItem("started"))
            const ended = await JSON.parse(localStorage.getItem("ended"))
            const duration = await JSON.parse(localStorage.getItem("duration"))

            const logObj = {...idValue, ...date, ...started, ...ended, ...duration}
            timeSheet.current = [ ...timeSheet.current, logObj ]
            const addTimeLog = [...timeLog, logObj]
            const stringifiedLog = JSON.stringify(addTimeLog)

            localStorage.setItem("timeLog", stringifiedLog)
        }
        catch(err) {console.error(err.message)}
    } //store saved temporary object(log info) into timeLog array

    const storeTempObjContent = async (key, content) => {
        const stringifiedLogItem = JSON.stringify(content)
        localStorage.setItem(key, stringifiedLogItem)
    } // to Date.js, Timer.js

    const fetchFromLocalStorage = () => {
        let timeLog = localStorage.getItem("timeLog")
        if(timeLog === null) {
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

    const logStart = () => {
        getDate()
        const { d, dateNow, idValue, timeNow } = getDate()
        storeTempObjContent("date", {date: `${dateNow}`})
        storeTempObjContent("started", {started: `${timeNow}`})
        storeTempObjContent("idValue", {idValue: `${idValue}.${uuid().substring(0,15)}`})
    } //saves real-time start log data to localStorage

    const logEnd = () => {
        getDate()
        const { timeNow } = getDate()
        storeTempObjContent("ended", {ended: `${timeNow}`})
        const duration = `${mainHour.toString().length === 1 ? "0" + mainHour : mainHour}:${mainMinute.toString().length === 1 ? "0" + mainMinute : mainMinute}:${mainSecond.toString().length === 1 ? "0" + mainSecond : mainSecond}`
        console.log(`Duration: ${duration}`)
        storeTempObjContent("duration", {duration: `${duration}`})
    }//saves real-time end log data to localStorage



    return (
        <DataContext.Provider 
            value={{
                getDate,
                storeToLocalStorage, storeTempObjContent,// get/add log in localStorage
                logStart, logEnd,

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
