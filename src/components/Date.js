import { useState, useEffect } from "react"
import { useDataCtx } from '../DataContext'
import { Wrap } from "./utils"


const DateComponent = ({ time }) => {

    const [startClicked, setStartClicked] = useState(false)

    const { getDate } = useDataCtx()
    const { dateNow, timeNow } = getDate()
    
    useEffect( async () => {
        
        if(time) {
            getDate()
            const { dateNow, timeNow } = getDate()
            console.log(`Start: ${timeNow} ${dateNow}`)
            setStartClicked(true)
        } 
        else if (!time && startClicked) {
            getDate()
            const { dateNow, timeNow } = getDate()
            console.log(`End: ${timeNow} ${dateNow}`)
            setStartClicked(false)
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
