import { useDataCtx } from './DataContext'
import { useEffect } from 'react'
import { Box, LineBreak1, LineBreak2 } from "./components/utils"
import Header from "./components/Header"
import TimeControl from "./components/TimeControl"
import Timelog from './components/Timelog'


const App = () => {

    const { fetchFromLocalStorage } = useDataCtx()

    return (
        <Box>
            <Header />
            <TimeControl />
            <LineBreak1 />
            <Timelog />
            <LineBreak2 />
        </Box>
    )
        
}

export default App