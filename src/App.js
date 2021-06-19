import { useEffect } from 'react'
import DataProvider from './DataContext'
import { Box, LineBreak } from "./components/utils"
import Header from "./components/Header"
import TimeControl from "./components/TimeControl"
import Timelog from './components/Timelog'


const App = () => {

    useEffect(() => {
        //temp storage for timeLog object saved in localStorage
        localStorage.setItem('objectContent', '{}'); 
        console.log('objectContent', '') 

        return () => {

        }
    }, [])

    return (
        <DataProvider>
            <Box>
                <Header/>
                <TimeControl/>
                <LineBreak/>
                <Timelog/>
            </Box>
        </DataProvider>
    )
        
}

export default App