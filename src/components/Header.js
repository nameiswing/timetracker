import { Wrap } from './utils'
import { useDataCtx } from '../DataContext'
import Button from './Button'

const Header = () => {

    const {
        title, 
        toggleTitle
    } = useDataCtx()

    return (
        <>
        <Wrap padding=".5rem 1rem">
            {title ? "work" : "break"}<strong>pulse</strong>
        </Wrap>
        {/* <Button tagName="Toggle Title" clickHandler={toggleTitle}/> */}
        </>
    )
}

export default Header
