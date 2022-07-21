import React from 'react';
//Packages
import styled from 'styled-components';
import TypeAnimation from 'react-type-animation';
import Fade from 'react-reveal/Fade';

function texted() {
  return (
    <TextSection>
        <Fade bottom>
            <Wrapper>
                <TextedRight>
                    <Heading><Greenline>Steyp</Greenline> is Introducing a learning system to create</Heading>
                    <MoveHeading>
                    <Greenline> <TypeAnimation
                                            cursor={true}
                                            sequence={[
                                                "Tech Scientist",
                                                "Computer Engineer",
                                                2000,
                                                "",
                                            ]}
                                            repeat={Infinity}
                                            wrapper="h2"
                                            className="typeanime"
                                        />
                        </Greenline></MoveHeading>
                    <Bar></Bar>
                </TextedRight>
                <Left>
                    <ScreenPicture>
                        <ScreenImage src={require('../assets/images/30-04-2022/introduction-logo.png')}/>
                    </ScreenPicture>
                </Left>
            </Wrapper>
        </Fade>
    </TextSection>
  )
}

const TextSection = styled.section`
    width: 100%;
    margin : 100px 0px;
`
const Wrapper = styled.section`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const TextedRight = styled.div`
    width: 50%;
    margin: auto 0;
    position: relative;

    @media (max-width:980px){
        width:80%;
        margin: 0 auto;
    }
    `
    
const Heading = styled.h1`
    font-size:50px;
    font-family:goridita_medium;
    @media (max-width:480px){
        font-size: 26px;
    }
       

`
const MoveHeading = styled.h1`
    font-size:50px;
    font-family:goridita_medium;
    
    @media (max-width:480px){
        font-size: 26px;
    }

`

const Greenline=styled.span`
    color: rgb(15, 167, 111);
    font-weight: 500;
`
const Bar = styled.span`
    border-radius: 6px;
    position: absolute;
    top: 80px;
    right: 240px;
    width: 328px;
    height: 50px;
    background: rgb(74, 237, 194);
    display: block;
    z-index: -1;

    @media (max-width:1280px){
        display: none;
    }
        
`

const Left = styled.div`
    width: 50%;
    align-items: center;

    @media (max-width:980px){
        width:80%;
        margin: 0 auto;
    }
    `
const ScreenPicture = styled.div`
    margin: auto 0;
    
    `
const ScreenImage = styled.img`
    width: 100%;
    display: block;
`

export default texted