import styled from 'styled-components'
import { SubBox, Wrap } from './utils'
import Spinner from './Spinner'
import { useDataCtx } from '../DataContext'

const Timelog = () => {

    const { timeSheet, fetchFromLocalStorage } = useDataCtx()

    window.addEventListener('load', fetchFromLocalStorage())
    window.addEventListener('click', fetchFromLocalStorage())

    return (
        <Wrapper justify={timeSheet.current.length === 0 ? true : false}>
            {timeSheet.current !== null ? 
                timeSheet.current.map( log => (
                    <Log key={log.idValue} backgroundColor="var(--dark-bg2)">
                        <Date>{log.date}</Date>
                        <Wrap key={log.idValue} justifyContent="space-around" width="100%">
                            <SubBox margin="0 1rem">
                                <Wrap color="var(--white2)">Clock In</Wrap>
                                <Wrap fontSize="1rem">{log.started}</Wrap>
                            </SubBox>
                            <SubBox margin="0 1rem">
                                <Wrap color="var(--white2)">Clock Out</Wrap>
                                <Wrap fontSize="1rem">{log.ended}</Wrap>
                            </SubBox>
                            <SubBox margin="0 1rem">
                                <Wrap color="var(--white2)">Duration</Wrap>
                                <Wrap fontSize="1rem">{log.duration}</Wrap>
                            </SubBox>
                        </Wrap>
                    </Log>
            )) : <Spinner/>}
        </Wrapper>
    )
}

export default Timelog

const Wrapper = styled(SubBox)`
    background-color: transparent;
    ${ props => props.justify ? "justify-content: center;" : ""}
    align-items: center;
    height: 24.5rem;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: .5rem 1rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`
const Log = styled(Wrap)`
    border-radius: .25rem;
    border: 1px solid var(--gray2);
    font-size: .825rem;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 1.25rem;
    margin-bottom: .25rem;
    position: relative;
    padding: 1.125rem .875rem .875rem .75rem;
    width: 20rem;
`
const Date = styled.div`
    background-color: var(--dark-bg2);
    /* border: 2px solid var(--white3); */
    border-radius: 1rem;
    color: var(--white2);
    font-size: .75rem;
    left: .75rem;
    padding: .125rem .75rem;
    top: -.75rem;
    position: absolute;
`