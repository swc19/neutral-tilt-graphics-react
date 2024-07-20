import React, {useCallback} from 'react';
import { ReactFitty } from "react-fitty";
import layout_image from '../assets/layout/NT-Layout.png';
import ssb64_images from '../assets/icons/ssb64/*.png'
import { useReplicant } from '../utils/hooks';
import styled from 'styled-components';
const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const LayoutObject = () => {
    const [setInfo] = useReplicant('setInfo', {}, {namespace: NODECG_BUNDLE});
	const handleGetImage = useCallback((character) => {
		if(character){return ssb64_images[character.split("[REMIX] ").at(-1)];}
	})
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
                <Player1Character src={handleGetImage(setInfo.player1character)}></Player1Character>
                <Player1Name><ReactFitty maxSize={48}>{setInfo.player1tag}</ReactFitty></Player1Name>
                <Player1Score><ReactFitty maxSize={48}>{setInfo.player1score}</ReactFitty></Player1Score>
            </Player1Info>
            <Player2Ports>
                <Port filled={Number(setInfo.player2port) === 1} portnum={1}></Port>
                <Port filled={Number(setInfo.player2port) === 2} portnum={2}></Port>
                <Port filled={Number(setInfo.player2port) === 3} portnum={3}></Port>
                <Port filled={Number(setInfo.player2port) === 4} portnum={4}></Port>
            </Player2Ports>
            <Player2Info>
                <Player2Character src={handleGetImage(setInfo.player2character)}></Player2Character>
                <Player2Name><ReactFitty maxSize={48}>{setInfo.player2tag}</ReactFitty></Player2Name>
                <Player2Score><ReactFitty maxSize={48}>{setInfo.player2score}</ReactFitty></Player2Score>
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

const Player1Name = styled.div`
    position: relative;
    height: 70px;
    left: -5px;
    width: 250px;
`

const Player1Character = styled.img`
    position: relative;
    height: 30px;
    width: 24px;
    left: -8px;
    margin: auto;
`

const Player1Score = styled.div`
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

const Player2Name = styled.div`
    position: relative;
    height: 70px;
    left: -5px;
    width: 250px;
`

const Player2Character = styled.img`
    position: relative;
    height: 30px;
    width: 24px;
    left: -8px;
    margin: auto;
`

const Player2Score = styled.div`
    position: relative;
    left: 10px;
    width: 45px;
    font-size: 48px;
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