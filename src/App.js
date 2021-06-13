// import { useState } from 'react'
import DataProvider from './DataContext'
import { Box } from "./components/utils"
import Header from "./components/Header"
import Date from "./components/Date"
import TimeControl from "./components/TimeControl"


const App = () => {

    return (
        <DataProvider>
            <Box>
                <Header/>
                <TimeControl/>
            </Box>
        </DataProvider>
    )
        
}

export default App
