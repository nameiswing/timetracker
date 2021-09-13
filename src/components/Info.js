import styled, { keyframes } from 'styled-components';
import info from '../svg/info.svg';
import exit from '../svg/exit.svg';
import { useState } from 'react';

const Info = () => {

    const infoEl = document.querySelector('#info');
    
    const [ isOpen, setIsOpen ] = useState(false);
    const [ confirmed, setConfirmed ] = useState(false);
    let [ timer, setTimer ] = useState(5);
    let [ ticker, setTicker ] = useState(null);

    const handleOpen = () => {
        const infoEl = document.querySelector('#info');
        setIsOpen(true);
        infoEl.style.left = "0";
    }
    const handleClose = () => {
        setTimeout(() => setIsOpen(false), 500);
        infoEl.style.left = "100%";
    }

    const handleConfirm = () => {
        setConfirmed(true);
        setTicker( ticker = 
            setInterval(() => {
                setTimer(timer -= 1);
                if(timer === 0) {
                    setConfirmed(false);
                    clearInterval(ticker);
                    setTimer(5);
                }
            }, 1000)
        );
    }

    const deleteAll = () => {
        localStorage.removeItem('timeLog');
        window.location.reload();
        setConfirmed(false);
        clearInterval(ticker);
        setTimer(5);
    }

    return (
        <InfoBox id="info">
            <InfoIcon>
                <Icon 
                    onClick={()=>handleOpen()}
                    src={info} 
                    alt="info" 
                    posTop=".625rem" 
                    posLeft="-1.875rem" 
                    id="info-icon" 
                    width="22" 
                    height="22"/>
                <Icon 
                    onClick={()=>handleClose()}
                    src={exit} 
                    alt="exit" 
                    posTop=".625rem" 
                    posRight=".625rem"
                    id="exit-icon" 
                    width="20" 
                    height="20"/>
            </InfoIcon>
            <TextWrapper>
                <h2 style={{
                    margin:"0 auto",
                    marginTop: "3.875rem",
                    color: "var(--white)"
                    }}>About</h2>
                { isOpen && <InfoText id="info-text">
                    Save time logs in  your local storage. Logs can only be accessed from the device you are currently using.
                </InfoText> }
            { 
                confirmed === false ? 
                    <DeleteAll onClick={()=> handleConfirm()}>
                    Delete All Logs
                    </DeleteAll> : 
                    <DeleteAll onClick={()=> deleteAll()}>
                    Confirm Deletion {timer}s
                    </DeleteAll>
            }
            </TextWrapper>

        </InfoBox>
    )
}

export default Info

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 100%;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* background-color: #3f3b44e4; */
    transition: all .3s ease-in-out;
    z-index: 99;
`
const InfoIcon = styled.div`
    position: relative;
    width: 100%;
    `
const Icon = styled.img`
    position: absolute;
    top: ${ props => props.posTop};
    left: ${ props => props.posLeft};
    right: ${ props => props.posRight};
    opacity: 0.4;
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #3f3b44f4;
    height: calc(100% - 2.75rem);
    transform: translateY(2.625rem);
`
const animate = keyframes`
    0% { opacity: 0; transform: translateY(-9rem); }
    100% { opacity: 1; transform: translateY(-9.75rem); }
`
const InfoText = styled.p`
    padding: .875rem 1rem;
    margin:  1rem 2rem;
    font-size: .875rem;
    font-weight: 300;
    line-height: 170%;
    color: var(--white2);
    border: 1px solid var(--white3);
    border-radius: .25rem;
    background-color: #3f3b44da;
    animation: ${animate} .6s ease-in-out forwards;
`
const DeleteAll = styled.button`
    justify-self: flex-end;
    background-color: transparent;
    /* border: .125rem solid var(--red); */
    border: none;
    color: var(--red);
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    width: 14rem;
    padding: .625rem 1.25rem;
    border-radius: .25rem;
    margin-bottom: 3rem;
    transition: all .15s ease-out;

    &:hover {
        cursor: pointer;
        filter: brightness(.9);
        color: var(--white);
        background-color: var(--red);
    }
`