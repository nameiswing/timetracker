import { useDataCtx } from '../DataContext'
import { Wrap } from "./utils"


const DateComponent = ({ time }) => {

    const { getDate } = useDataCtx()
    const { dateNow, timeNow } = getDate()
        
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
