import { useEffect } from 'react'
import { useDataCtx } from '../DataContext'
import { Wrap, Spanner } from './utils'

const Timer = ({ startTime }) => {

    let {
        mainHour, setMainHour,
        mainMinute, setMainMinute,
        mainSecond, setMainSecond
    } = useDataCtx()

    let hh = mainHour.toString().length === 1 ? "0" + mainHour : mainHour
    let mm = mainMinute.toString().length === 1 ? "0" + mainMinute : mainMinute
    let ss = mainSecond.toString().length === 1 ? "0" + mainSecond : mainSecond

    useEffect( () => { 
        if(startTime) {
            const interval = setInterval( () => { 
                // eslint-disable-next-line
                setMainSecond( mainSecond += 1 ) 
                if( mainSecond === 60) {
                    setMainSecond( mainSecond = 0 )
                    // eslint-disable-next-line
                    setMainMinute( mainMinute += 1 )
                    if( mainMinute === 60) {
                        setMainMinute( mainMinute = 0 )
                        // eslint-disable-next-line
                        setMainHour( mainHour += 1 )
                    }
                }
            }, 1000) 
            return () => {
                clearInterval(interval)
                setMainSecond(0)
                setMainMinute(0)
                setMainHour(0)
            }
        }
    }, [startTime])

    return (
        <Wrap backgroundColor="transparent" padding="none">
            <Spanner fontSize="2.5rem" width="3.25rem">{ hh }</Spanner>
            <Spanner fontSize="2.5rem" transform="translateY(-.25rem)">:</Spanner>
            <Spanner fontSize="2.5rem" width="3.25rem">{ mm }</Spanner>
            <Spanner fontSize="2.5rem" transform="translateY(-.25rem)">:</Spanner>
            <Spanner fontSize="2.5rem" width="3.25rem">{ ss }</Spanner>
        </Wrap>
    )
}

export default Timer