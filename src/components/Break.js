import { useState, useEffect } from 'react'
import { Wrap, Spanner } from './utils'
import styled from 'styled-components'


const Break = ({ breakTime }) => {

    let [hour, setHour] = useState(1)
    let [minute, setMinute] = useState(5)
    let [second, setSecond]= useState(0)

    let hh = hour.toString().length === 1 ? "0" + hour : hour
    let mm = minute.toString().length === 1 ? "0" + minute : minute
    let ss = second.toString().length === 1 ? "0" + second : second

    useEffect( () => {
        if(breakTime) {
            const isCounting = setInterval( () => {
                if(hour === 0 && minute === 0 && second === 0) return 
                setSecond( second -= 1 )
                if(second === -1) {
                    setSecond( second = 59 )
                    setMinute( minute -= 1 )
                    if(minute === - 1 && hour !== 0) {
                        setMinute( minute = 59 )
                        setHour( hour -= 1)
                    }
                }
            }, 1000)
            return () => {
                clearInterval(isCounting)
            }
        }
    }, [breakTime])

    // useEffect( () => {resetTime()}, [started])

    return (
        <Wrapper 
            color="var(--white2)" 
            backgroundColor="transparent" 
            fontSize=".9rem" 
            padding="0"
        >
            <Wrap color="var(--white2)" backgroundColor="transparent">Break Time Left:</Wrap>
            &nbsp;&nbsp;
            <Spanner fontSize="1rem" width="1.375rem">{hh}</Spanner>:
            <Spanner fontSize="1rem" width="1.375rem">{mm}</Spanner>:
            <Spanner fontSize="1rem" width="1.375rem">{ss}</Spanner>
        </Wrapper>
    )
}

export default Break


const Wrapper = styled(Wrap)`
    transform: scale(0.95)
`