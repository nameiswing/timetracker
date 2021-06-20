import styled, { keyframes } from 'styled-components'

const Spinner = ({ color }) => <Loader color = { color }/> //hex color only
export default Spinner

const spinCirc = keyframes `
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`
const Loader = styled.div `
    display: inline-block;
    background-color: transparent;
    border: .325rem #41414125 solid;
    border-top: .325rem ${ props => props.color || "#6d6d6d"} solid;
    border-radius: 50%;
    height: 2.5rem;
    margin: .5rem 1rem;
    width: 2.5rem;

    animation: ${spinCirc} .7s linear infinite;
`