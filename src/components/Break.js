import { useEffect } from 'react'
import { useDataCtx } from '../DataContext'
import { Wrap, Spanner } from './utils'
import styled from 'styled-components'


const Break = ({ breakTime, disabled }) => {

    let {
        breakHour, setBreakHour,
        breakMinute, setBreakMinute,
        breakSecond, setBreakSecond
    } = useDataCtx()

    let hh = breakHour.toString().length === 1 ? "0" + breakHour : breakHour
    let mm = breakMinute.toString().length === 1 ? "0" + breakMinute : breakMinute
    let ss = breakSecond.toString().length === 1 ? "0" + breakSecond : breakSecond

    useEffect( () => {
        if(breakTime === !!1) {
            const isCounting = setInterval( () => {
                if(breakHour === 0 && breakMinute === 0 && breakSecond === 0) return 
                setBreakSecond( breakSecond -= 1 )
                if(breakSecond === -1) {
                    setBreakSecond( breakSecond = 59 )
                    setBreakMinute( breakMinute -= 1 )
                    if(breakMinute === - 1 && breakHour !== 0) {
                        setBreakMinute( breakMinute = 59 )
                        setBreakHour( breakHour -= 1)
                    }
                }
            }, 1000)
            return () => {
                clearInterval(isCounting)
            }
        }
        if(breakTime === !!0 && disabled) {
            setBreakHour(1)
            setBreakMinute(30)
            setBreakSecond(0)
        }
    }, [breakTime, disabled])

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