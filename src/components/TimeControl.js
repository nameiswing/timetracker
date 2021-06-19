import DateComponent from "./Date"
import { SubBox, Wrap } from "./utils"
import Timer from "./Timer"
import Button from "./Button"
import Break from "./Break"
import { useDataCtx } from '../DataContext'


const TimeControl = () => {


    let { 
        clockedIn, toggleClock,
        breakTime, toggleBreak
    } = useDataCtx()


    const startDay = () => {
        if(clockedIn === !!0) {
            toggleClock()
        }
        else {
            toggleClock()
            if(breakTime === !!1) toggleBreak()
        }
    }

    return (
        <SubBox>
            <DateComponent time={ clockedIn } />
            <Timer startTime={ clockedIn } />
            <Wrap backgroundColor="transparent" padding=".5rem">
                <Wrap backgroundColor="transparent" padding=".25rem">
                    <Button 
                        bgColor={ clockedIn ? "var(--red)" : "var(--teal)"}
                        clickHandler={ startDay }
                        tagName={ clockedIn ? "Clock Out" : "Clock In" }
                    />
                </Wrap>
                <Wrap backgroundColor="transparent" padding=".25rem">
                    <Button 
                        bgColor={ !clockedIn ? "var(--white3)" : "var(--purple)" }
                        bordered={ !breakTime }
                        clickHandler={ toggleBreak }
                        tagName={ clockedIn && breakTime ? "Stop Break" : "Start Break" }
                        disabled={ !clockedIn }
                    />
                </Wrap>
            </Wrap>
            <Break breakTime={ breakTime } disabled={ !clockedIn }/>
        </SubBox>
    )
}

export default TimeControl
