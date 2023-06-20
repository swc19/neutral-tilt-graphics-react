import React, {useRef, useEffect} from 'react';
import { ReactFitty } from "react-fitty";
import html2canvas from 'html2canvas';
import thumbnail_images from '../assets/thumbnail/*.png';
import ssb64_images from '../assets/renders/*/*.png'
import { useReplicant } from '../utils/hooks';
import styled from 'styled-components';
const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const ThumbnailObject = () => {
    const [setInfo] = useReplicant('setInfo', {}, {namespace: NODECG_BUNDLE});
    const [thumbnailInfo] = useReplicant('thumbnailInfo', {}, {namespace: NODECG_BUNDLE});
    const [runPrint, setRunPrint]= useReplicant('runPrint', false, {namespace: NODECG_BUNDLE});
    const printRef = useRef();

    function getChar(character, player){
        const costume = player === 1 ? thumbnailInfo.player1costume : thumbnailInfo.player2costume;
        try{
            return ssb64_images[character.split("[REMIX] ").at(-1)][costume];
        }
        catch (e){}
    }
    const handleDownloadImage = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
    
        if (typeof link.download === 'string') {
          link.href = data;
          link.download = `${setInfo.player1tag}_${setInfo.player2tag}_${setInfo.bracketlocation}`;
    
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }
      };

    useEffect(() => {
        async function doRun() {
            if(runPrint){
                await handleDownloadImage();
                setRunPrint(false);
            }
        }
        doRun();
    }, [runPrint])
    return (
        <Container>
            <Printable ref={printRef}>
                <BackgroundImage src={thumbnail_images['thumb-bg']}></BackgroundImage>
                <Renders>
                    <Player1Render src={getChar(setInfo.player1character, 1)}></Player1Render>
                    <Player2Render src={getChar(setInfo.player2character, 2)}></Player2Render>
                </Renders>
                <ForegroundImage src={thumbnail_images['thumb-fg']}></ForegroundImage>
                <Text>
                    <PlayerTags>
                        <Player1Tag><ReactFitty maxSize={104}>{setInfo.player1tag}</ReactFitty></Player1Tag>
                        <Player2Tag><ReactFitty maxSize={104}>{setInfo.player2tag}</ReactFitty></Player2Tag>    
                    </PlayerTags>
                    <BracketLocation><ReactFitty maxSize={76}>{setInfo.bracketlocation}</ReactFitty></BracketLocation>
                    <TournamentInfo>
                        <TournamentName><ReactFitty maxSize={84}>{thumbnailInfo.tourneyname}</ReactFitty></TournamentName>
                        <TournamentDate><ReactFitty maxSize={84}>{thumbnailInfo.tourneydate}</ReactFitty></TournamentDate>
                    </TournamentInfo>
                </Text>
            </Printable>
        </Container>


    )
}

const Container = styled.div`
    font-family: 'Cabin';
    position: absolute;
    width: 1920px;
    height: 1080px;
    top: 0;
    left: 0;
`
const Printable = styled.div`
    width: 1920px;
    height: 1080px;
    `

const BackgroundImage = styled.img`
    position: absolute;
    z-index: -10;
`
const Renders = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    top: 50px;
    & img {
        postition: relative;
        object-fit: contain;
        margin:auto; 
    }
`
const Player1Render = styled.img`
    transform: scale(2.25);
`
const Player2Render = styled.img`
    transform: scale(-2.25, 2.25);
`
const ForegroundImage = styled.img`
    position: absolute;
    z-index: 5;
`

const Text = styled.div`
    color: white;
    text-align: center;
    & > * {
        position: absolute;
        z-index: 10;
    }
`

const PlayerTags = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 100px;
    width: 100%;
    height: 120px; 
    line-height: 116px;
`
const Player1Tag = styled.div`
    margin-left: 25px;
`
const Player2Tag = styled.div`
    margin-right: 25px;
`
const BracketLocation = styled.div`
    width: 590px;
    left: 665px;
    height: 150px;
    bottom: 50px;
    line-height: 128px;
`
const TournamentInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    bottom: 0;
`
const TournamentName = styled.div`
    text-align: left;
    margin-left: 20px;
`
const TournamentDate = styled.div`
    text-align: right;
    margin-right: 20px;
`



