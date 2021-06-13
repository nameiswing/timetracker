import styled from 'styled-components'

export const Box = styled.div`
    /* align-items: center; */
    background-color: var(--dark-bg);
    border-radius: .5rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    height: 44rem;
    overflow: hidden;
    width: 23rem;
`
export const SubBox = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
`

export const Wrap = styled.div `
    background-color: ${props => props.backgroundColor || "var(--gray)"};
    color: ${props => props.color || "var(--white)"};
    display: flex;
    font-size: ${ props => props.fontSize };
    justify-content: center;
    padding: ${ props => props.padding };
    width: ${ props => props.width}
`

export const Footer = styled.footer `
    bottom: 0; right: 0;
    position: absolute;
`

export const Spanner = styled.span `
    display: flex;
    font-family: var(--font-secondary);
    font-size: ${ props => props.fontSize };
    font-weight: 600;
    justify-content: center;
    margin: 0 .5px;
    transform: ${ props => props.transform };
    width: ${ props => props.width }
`