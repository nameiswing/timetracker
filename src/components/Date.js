import { useState, useEffect } from "react"
import { useDataCtx } from '../DataContext'
import { Wrap } from "./utils"


const DateComponent = ({ time }) => {

    const [startClicked, setStartClicked] = useState(false)

    const { getDate, storeTempObjContent } = useDataCtx()
    const { d, dateNow, timeNow } = getDate()
    
    useEffect( async () => {
        
        if(time) {
            getDate()
            const { dateNow, idValue, timeNow } = getDate()
            // console.log(`Start: ${timeNow} ${dateNow}`)
            setStartClicked(true)
            storeTempObjContent("date", {date: `${dateNow}`})
            storeTempObjContent("started", {started: `${timeNow}`})
            storeTempObjContent("idValue", {idValue: `${idValue}_${d.getMilliseconds()}`})
            // console.log(d.getMilliseconds())
        } 
        else if (!time && startClicked) {
            getDate()
            const { dateNow, timeNow } = getDate()
            // console.log(`End: ${timeNow} ${dateNow}`)
            setStartClicked(false)
            storeTempObjContent("ended", {ended: `${timeNow}`})
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
                { time ? `Started at ${timeNow}`: "Not Yet Started" }
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
