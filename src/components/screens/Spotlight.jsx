import React from "react";
import styled from "styled-components";


function Spotlight() {
    return (
        <Spotlights>
            <Wrapper>
                <Left>
                    <Headline>Creating <br /> Computer <Greenline>Engineers</ Greenline> & Tech <Greenline>Scientists </Greenline></Headline>
                    <Description>
                        Steyp is introducing a digital space for students to learn and become the future Engineers and Scientists. Steyp is looking for capable students who stands out, thinks differently,
                        and keeps a spark to shine!
                    </Description>
                    <ExploreButton>Explore
                        <Arrow className="image">
                            <img src={require("../assets/images/22-09-2021/right-side.svg").default}/>
                        </Arrow>
                    </ExploreButton>
                </Left>
                <Right>
                    <Mamooka>
                        <Mamookaimage src={require("../assets/images/20-04-2022/spotlight-mammookka.png")}/>
                    </Mamooka>
                    <BackgroundScreen>
                        <BackgroundImage src={require("../assets/images/20-04-2022/spotlight-background.png")}/>
                    </BackgroundScreen>
                </Right>
            </Wrapper>
        </Spotlights>
    );
}

const Spotlights = styled.section`
    background: rgb(241, 250, 255);
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top:100px;
    `
const Wrapper = styled.section`
    width: 85%;
    height: 100%;
    margin: 0 auto;
    max-width: 1325px;
    display: flex;
    @media (max-width:980px){
        flex-wrap: wrap;
    }

`
const Left = styled.div`
    width: 50%;
    @media (max-width:980px){
        width:80%;
    }
    @media (max-width:768px){
        width:90%;
        align-items: center;
    }
`
const Right = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    align-items: center;
    @media (max-width:980px){
        width:80%;
        align-items: right;
    }

`
const Headline = styled.h1`
    padding-top: 80px;
    font-size: 43px;
    max-width: 480px;
    font-weight: 500;
    font-family:goridita_bold;
    color: rgb(33, 33, 33);
    margin-bottom: 20px;
    @media (max-width:480px){
    font-size: 26px;
}
`
const Greenline=styled.span`
    color: rgb(15, 167, 111);
    font-weight: 500;
`
const Description = styled.p`
    max-width: 520px;
    color: gray;
    font-size: 20px;

    @media (max-width:480px){
        font-size: 16px;
    }
`
const ExploreButton = styled.button`
    cursor: pointer;
    width: 170px;
    padding: 12px 14px;
    background: linear-gradient(100deg, rgb(15, 167, 111) 0%, rgb(15, 158, 167) 100%) 0% 0% no-repeat padding-box padding-box transparent;
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-family: goridita_medium;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.4s ease 0s;
    margin-top:60px;
    &:hover{
        width: 220px;
        transition: all 0.4s ease 0s;
        .image{
            width: 20px;
            transition: all 0.4s ease 0s;
            margin-left: 10px;
        }
        
    }
    @media (max-width:1080px){
        margin-bottom: 15px;
    }
    @media (max-width:480px){
        width: 50%;
        font-size: 12px;
    }
`
const Arrow =styled.span`
    width: 0px;
    img{
        width:100% ; 
        display: block;
        transition: all 0.4s ease 0s;
    }
    
`

const Mamooka =styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    position: relative;
`
const Mamookaimage =styled.img`
    width: 100%;
    display: block;
`
const BackgroundScreen =styled.div`
    position: absolute;
    left:9%;
    top:7%;
    width: 100%;
    z-index:1;
    @media (max-width:980px){
        display: none;
        left: 3%;
    }
`
const BackgroundImage =styled.img`
    width: 100%;    
    display: block;
`







export default Spotlight;

