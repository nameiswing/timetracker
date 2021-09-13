import { useDataCtx } from '../DataContext'
import { useEffect, useRef } from 'react'
import { Wrap } from "./utils"


const DateComponent = ({ time }) => {

    const { getDate } = useDataCtx()
    
    const startTime = useRef(null)
    const startDate = useRef(null)

    useEffect(() => {
        const { timeNow, dateNow } = getDate()
        const now = {timeNow, dateNow}
        //values from getDate() will mutate once real-time value changes
        //new object was created from destructured values so that it won't mutate
        startTime.current = now.timeNow
        startDate.current = now.dateNow
    }, [time, getDate])

    return (
        <Wrap backgroundColor="transparent" width="100%">
            <Wrap 
                backgroundColor="transparent" 
                color="var(--white2)" 
                fontSize="smaller"
                padding="1.5rem 1rem .75rem 1rem"
            >
                { time ? `Started at ${startTime.current}`: "Not Yet Started" }
            </Wrap>
            <Wrap 
                backgroundColor="transparent" 
                color="var(--white2)" 
                fontSize="smaller"
                padding="1.5rem 1rem .75rem 1rem;"
            >
                { time ? startDate.current : getDate().dateNow}
            </Wrap>
        </Wrap>
        
    )
}

export default DateComponent
