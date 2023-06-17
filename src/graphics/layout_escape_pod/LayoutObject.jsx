import React from 'react';
import { ReactFitty } from "react-fitty";
import layout_image from '../assets/layout/EP-Layout.png';
import ssb64_images from '../assets/icons/ssb64/*.png';
import ssbb_images from '../assets/icons/ssbb/*.png';
import { useReplicant } from '../utils/hooks';
import styled from 'styled-components';
const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const LayoutObject = () => {
    const [setInfo] = useReplicant('setInfo', {}, {namespace: NODECG_BUNDLE});
    let stock_icons = setInfo.game === "ssb64" ? ssb64_images : ssbb_images;

    return(
        <Container>
            <Background src={layout_image}></Background>
            <Player1Ports>
                <Port filled={Number(setInfo.player1port) === 1} portnum={1}></Port>
                <Port filled={Number(setInfo.player1port) === 2} portnum={2}></Port>
                <Port filled={Number(setInfo.player1port) === 3} portnum={3}></Port>
                <Port filled={Number(setInfo.player1port) === 4} portnum={4}></Port>
            </Player1Ports>
            <Player1Info>
                <StockIcon src={stock_icons[setInfo.player1character]} game={setInfo.game}></StockIcon>
                <Name><ReactFitty maxSize={48}>{setInfo.player1tag}</ReactFitty></Name>
                <Score><ReactFitty maxSize={48}>{setInfo.player1score}</ReactFitty></Score>
            </Player1Info>
            <Player2Ports>
                <Port filled={Number(setInfo.player2port) === 1} portnum={1}></Port>
                <Port filled={Number(setInfo.player2port) === 2} portnum={2}></Port>
                <Port filled={Number(setInfo.player2port) === 3} portnum={3}></Port>
                <Port filled={Number(setInfo.player2port) === 4} portnum={4}></Port>
            </Player2Ports>
            <Player2Info>
                <StockIcon src={stock_icons[setInfo.player2character]} game={setInfo.game}></StockIcon>
                <Name><ReactFitty maxSize={48}>{setInfo.player2tag}</ReactFitty></Name>
                <Score><ReactFitty maxSize={48}>{setInfo.player2score}</ReactFitty></Score>
            </Player2Info>
            <TournamentInfo>
                <BracketLocation><ReactFitty maxSize={48}>{setInfo.bracketlocation}</ReactFitty></BracketLocation>
            </TournamentInfo>
        </Container>
    )
    
}

const Container = styled.div`
    display: block; 
    font-family: Roboto;
    width: 1920px;
    height: 1080px;
`

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`

const Player1Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    text-align: center;
    color: white;
    width: 365px;
    height: 70px;
    left: 55px;
    top: 495px;
    line-height: 68px;
`

const Name = styled.div`
    position: relative;
    height: 70px;
    left: -5px;
    width: 250px;
`

const StockIcon = styled.img`
    position: relative;
    height: 30px;
    width: ${props => {
        switch(props.game){
            case "ssb64":
                return `24px`;
            case "ssbb":
                return `30px`;
        }
    }};
    left: -8px;
    margin: auto;
`

const Score = styled.div`
    position: relative;
    left: 10px;
    width: 45px;
    font-size: 48px;
`

const Player2Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    text-align: center;
    color: white;
    width: 365px;
    height: 70px;
    left: 55px;
    top: 615px;
    line-height: 68px;
`

const TournamentInfo = styled.div`
    position: absolute;
    width: 550px;
    height: 70px;
    top: 5px;
    left: 930px;
    color: white;
    text-align: center;
    line-height: 72px;
`

const BracketLocation = styled.div`
`

const Player1Ports = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: absolute;
    top: 475px;
    left: 100px;
    width: 100px;

`
const Player2Ports = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: absolute;
    top: 595px;
    left: 100px;
    width: 100px;
`
const Port = styled.div`
    outline: 3px solid black;
    width: 15px;
    height: 15px;
    border-radius: 25px;
    background: ${props => {
        if(props.filled){
            switch(props.portnum){
                case 1:
                    return `#ed3636`;
                case 2:
                    return `blue`;
                case 3:
                    return `#ffdf1a`;
                case 4:
                    return `#4eb94e`;
            }   
        }
    }}
`