import { Box, LineBreak1, LineBreak2 } from "./components/utils"
import Header from "./components/Header"
import TimeControl from "./components/TimeControl"
import Timelog from './components/Timelog'
import Info from "./components/Info"


const App = () => {

    return (
        <Box>
            <Info />
            <Header />
            <TimeControl />
            <LineBreak1 />
            <Timelog />
            <LineBreak2 />
        </Box>
    )
        
}

export default App