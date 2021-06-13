import DateComponent from "./Date"
import { SubBox, Wrap } from "./utils"
import { useState } from "react"
import Timer from "./Timer"
import Button from "./Button"
import Break from "./Break"
import { useDataCtx } from '../DataContext'

const TimeControl = () => {

    const { clockedIn, toggleClock } = useDataCtx()

    let [buttonTag, setTag] = useState("Clock In")
    let [buttonTag2, setTag2] = useState("Start Break")
    let [button2, setButton2] = useState(true)
    let [buttonColor, setColor] = useState("var(--teal)")
    let [buttonColor2, setColor2] = useState("var(--white3)")
    let [breakTime, setBreakTime] = useState(false)

    const startDay = () => {
        if(clockedIn === false) {
            setTag("Clock Out")
            setColor("var(--red)")
            setColor2("var(--purple)")
            toggleClock()
        } else {
            setTag("Clock In")
            setTag2("Start Break")
            setColor("var(--teal)")
            setColor2("var(--white3)")
            setBreakTime( breakTime = false )
            setButton2( true )
            toggleClock()
            window.location.reload()
        }
    }

    const startBreak = () => {
        if(breakTime === false){
            setBreakTime( breakTime = !breakTime )
            setButton2( false )
            setTag2("Stop Break")
        } else {
            setBreakTime( breakTime = !breakTime )
            setButton2( true )
            setTag2("Start Break")
        }
    }

    return (
        <SubBox>
            <DateComponent time={ clockedIn }/>
            <Timer startTime={ clockedIn }/>
            <Wrap backgroundColor="transparent" padding=".5rem">
                <Wrap backgroundColor="transparent" padding=".25rem">
                    <Button 
                        bgColor={buttonColor}
                        clickHandler={ startDay }
                        tagName={buttonTag}
                        width="7.75rem"
                    />
                </Wrap>
                <Wrap backgroundColor="transparent" padding=".25rem">
                    <Button 
                        bgColor={ buttonColor2 }
                        bordered={ button2 }
                        clickHandler={ startBreak }
                        tagName={ buttonTag2 } 
                        width="7.75rem"
                        disabled={ !clockedIn }
                    />
                </Wrap>
            </Wrap>
            <Break breakTime={breakTime} time={ clockedIn }/>
        </SubBox>
    )
}

export default TimeControl
