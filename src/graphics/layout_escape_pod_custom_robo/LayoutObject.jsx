import React from 'react';
import { ReactFitty } from "react-fitty";
import layout_image from '../assets/layout/EP-Layout-CR-2024.png';
import { useReplicant } from '../utils/hooks';
import styled from 'styled-components';
const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const LayoutObject = () => {
    const [setInfo] = useReplicant('setInfo', {}, {namespace: NODECG_BUNDLE});

    return(
        <Container>
            <Background src={layout_image}></Background>
            <Player1Info>
                <Name><ReactFitty maxSize={36}>{setInfo.player1tag}</ReactFitty></Name>
                <Player1Score><ReactFitty maxSize={36}>{setInfo.player1score}</ReactFitty></Player1Score>
            </Player1Info>
            <Player2Info>
                <Name><ReactFitty maxSize={36}>{setInfo.player2tag}</ReactFitty></Name>
                <Player2Score><ReactFitty maxSize={36}>{setInfo.player2score}</ReactFitty></Player2Score>
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
    grid-template-rows: 1fr 1fr;
    position: absolute;
    text-align: center;
    color: white;
    width: 175px;
    height: 70px;
    left: 60px;
    top: 400px;
    line-height: 68px;
`

const Name = styled.div`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 3;
    height: 70px;
    left: 5px;
    width: 165px;
`

const Player1Score = styled.div`
    position: relative;
    grid-column-start: 3;
    grid-row-start: 2;
    left: 10px;
    top: -17px;
    width: 50px;
    font-size: 36px;
`

const Player2Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    text-align: center;
    color: white;
    width: 175px;
    height: 70px;
    left: 1685px;
    top: 400px;
    line-height: 68px;
`
const Player2Score = styled.div`
    position: relative;
    grid-row-start: 2;
    left: -2px;
    top: -17px;
    width: 50px;
    font-size: 36px;
`

const TournamentInfo = styled.div`
    position: absolute;
    width: 625px;
    height: 70px;
    top: 10px;
    left: 648px;
    color: white;
    text-align: center;
    line-height: 72px;
`

const BracketLocation = styled.div`
`
