import { useState, useEffect } from 'react'
import { Wrap, Spanner } from './utils'

const Timer = ({ startTime }) => {

    let [hour, setHour] = useState(0)
    let [minute, setMinute] = useState(0)
    let [second, setSecond] = useState(0)
    let hh = hour.toString().length === 1 ? "0" + hour : hour
    let mm = minute.toString().length === 1 ? "0" + minute : minute
    let ss = second.toString().length === 1 ? "0" + second : second

    useEffect( () => { 
        if(startTime) {
            const interval = setInterval( () => { 
                setSecond( second += 1 ) 
                if( second === 60) {
                    setSecond( second = 0 )
                    setMinute( minute += 1 )
                    if( minute === 60) {
                        setMinute( minute = 0 )
                        setHour( hour += 1 )
                    }
                }
            }, 1000) 
            return () => {
                clearInterval(interval)
                console.log(`Duration: ${hour.toString().length === 1 ? "0" + hour : hour}:${minute.toString().length === 1 ? "0" + minute : minute}:${second.toString().length === 1 ? "0" + second : second}`)
                setSecond( second = 0 )
                setMinute( minute = 0 )
                setHour( hour = 0 )
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