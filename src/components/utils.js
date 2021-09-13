import styled from 'styled-components'

export const Box = styled.div`
    /* align-items: center; */
    background-color: var(--dark-bg);
    border-radius: .5rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    height: 44rem;
    overflow: hidden;
    position: relative;
    width: 22rem;
`
export const SubBox = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
`

export const Wrap = styled.div `
    background-color: ${props => props.backgroundColor || "transparent"};
    color: ${props => props.color || "var(--white)"};
    display: flex;
    font-size: ${ props => props.fontSize };
    justify-content: ${ props=> props.justifyContent || "center"};
    margin: ${ props => props.margin};
    padding: ${ props => props.padding };
    width: ${ props => props.width }
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
export const LineBreak1 = styled(Wrap)`
    background-color: var(--gray);
    height: .125rem;
    border-radius: 1rem;
    margin: 1rem 1rem 0 1rem;
`
export const LineBreak2 = styled(LineBreak1)`
    margin: 0 1rem;
`