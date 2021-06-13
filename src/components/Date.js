import { Wrap } from "./utils"
import { useState, useEffect } from "react"

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

const url = "http://localhost:8000/dataLog"

// function postLog(date, started) {
//     axios.post(url,{
//         date,
//         started,
//         id: Date.now()
//     })
// }

const DateComponent = ({time}) => {

    let [timeStart, setTimeStart] = useState("")
    const d = new Date();
    let dateNow = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    
    useEffect( () => {
        let hours = (d.getHours()).toString()
        let minutes = (d.getMinutes()).toString()
        dateNow = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
        const timeLog = `${hours.length === 1 ? "0" + hours : hours }:${minutes.length === 1 ? "0" + minutes : minutes }`
        

        if(time) {
            setTimeStart( () => {
                timeStart = timeLog
                return timeStart
            })
            console.log(`Start: ${timeStart} ${dateNow}`)
            // postLog(dateNow, timeStart)
        } 
        else if(!time && timeStart !== "") {
            setTimeStart( () => {
                timeStart = timeLog
            } )
            console.log(`End: ${timeStart} ${dateNow}`)
        }
    }, [time]) //log timestamps when user clocks in/out
        
    
    return (
        <Wrap backgroundColor="transparent" width="100%">
            <Wrap 
                backgroundColor="transparent" 
                color="var(--white2)" 
                fontSize="smaller"
                padding="1.5rem 1rem .75rem 1rem"
            >
                { time ? `Started at ${timeStart}`: "Not Yet Started" }
            </Wrap>
            <Wrap 
                backgroundColor="transparent" 
                color="var(--white2)" 
                fontSize="smaller"
                padding="1.5rem 1rem .75rem 1rem;"
            >
                {dateNow}
            </Wrap>
        </Wrap>
        
    )
}

export default DateComponent
