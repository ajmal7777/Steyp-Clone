import React from 'react'
import styled from 'styled-components'

function AptitudeTest() {
  return (
    <MainSection>
        <Wrapper>
            <Heading>Steyp's Aptitude Test <span>(SAT)</span></Heading>
            <Details>Steyp’s Engineering program is only for students who qualifies SAT (Steyp’s Aptitude Test)</Details>
            <ApplyButton>Apply for SAT
                <Arrow className='image'>
                    <img src={require("../assets/images/22-09-2021/right-side.svg").default}/>
                </Arrow>
            </ApplyButton>
        </Wrapper>
    </MainSection>
  )
}
const MainSection = styled.section`
    width: 100%;    
    `
const Wrapper = styled.section`
    margin: 0 auto;
    background-color: black;
    width: 85%;
    max-width: 1325px;
    padding: 5px 0px;
    `
const Heading = styled.h1`
    width:45%;
    font-family:goridita_medium; 
    font-size: 35px;
    margin: 85px auto 0px;
    color: rgb(255, 255, 255);
    @media (max-width:480px){
        width: 90%;
    }
    span{
        display: inline;
        font-family: goridita_medium;
        font-size: 35px;
        color: rgb(78, 175, 124);
        @media (max-width:480px){
        font-size: 20px;
        }
    }

    @media (max-width:480px){
        font-size: 20px;
    }
    
    `
const Details = styled.p`
    width:100% ;
    margin: 10px auto 0px;
    max-width: 420px;
    text-align: center;
    color: rgb(255, 255, 255);
    line-height: 1.6em;
    font-size: 16px;
    font-family: goridita_regular!important;
    @media (max-width:480px){
        font-size: 14px;
    }
`            
const ApplyButton = styled.button`
    margin: 35px auto 83px;
    cursor: pointer;
    width: 200px;
    padding: 15px 14px;
    background: linear-gradient(100deg, rgb(15, 167, 111) 0%, rgb(15, 158, 167) 100%) 0% 0% no-repeat padding-box padding-box transparent;
    font-size: 15px;
    color: rgb(255, 255, 255);
    font-family: goridita_medium;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    &:hover{
        width: 240px;
        transition: all 0.4s ease 0s;
        .image{
            width: 20px;
            transition: all 0.4s ease 0s;
            margin-left: 10px;
        }
        
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
         
 

export default AptitudeTest