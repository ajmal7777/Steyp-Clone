import React from "react";
import styled from "styled-components";

function BlackBanner() {
    return (
        <MainBanner>
            <Wrapper>
                <h2>
                    <span> Steyp </span> is exclusively available for students from <small> Kerala</small>
                </h2>
                <a href="">Apply for SAT</a>
            </Wrapper>
        </MainBanner>
    );
}

const MainBanner = styled.section`
    background-image: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/30-04-2022/restricted-background.png) 125% 0% / 36% no-repeat ;
    background-color: black;
    @media (max-width:670px){
        background-image: unset;
    }
    
`
const Wrapper = styled.section`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    align-items: center;
    text-align: center;
    padding: 90px 0px;
    h2 {
        font-family: goridita_medium;
        font-size: 35px;
        color: rgb(255, 255, 255);
        max-width: 590px;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        margin-bottom:40px;
        span{
            display: inline;
            font-family: goridita_medium;
            font-size: 35px;
            color: rgb(78, 175, 124);  
            @media (max-width:480px){
                font-size: 21px;
            }
        }
        @media (max-width:480px){
            font-size: 21px;
        }
        small{
            position: relative;
            font-size: 35px;
            @media (max-width:480px){
                font-size: 21px;
            }
            ::after{
                content: "";
                position: absolute;
                width: 106px;
                height: 12px;
                bottom: -6px;
                left: 0px;
                display: block;
                background: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/20-04-2022/line.svg) 0% 0% / contain no-repeat;
                @media (max-width:670px){
                    display: none;
                }

            }
        }
    }
    a{
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
        transition: all 0.4s ease 0s;
        margin-top:60px;
        margin:0 auto;
        @media (max-width:480px){
        width: 50%;
        font-size: 12px;
    }
    }
`

export default BlackBanner;
