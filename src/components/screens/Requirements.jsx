import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Requirements() {
    return (
        <FullSection>
            <Fade right>
                <Wrapper>
                    <Right>
                        <Picture>
                            <img src={require("../assets/images/30-04-2022/who-can-banner.png")} alt="" />
                        </Picture>
                    </Right>
                    <Left>
                        <h2>
                            Who can join in <span> Steyp?</span>
                        </h2>
                        <ul>
                            <li>
                                <div>
                                    <img src={require("../assets/images/20-04-2022/top-tick.svg").default} alt="top tick" />
                                </div>
                                <span>Students who are studying from Class 5 and above</span>
                            </li>
                            <li>
                                <div>
                                    <img src={require("../assets/images/30-04-2022/red-tick.svg").default} alt="red tick" />
                                </div>
                                <span>Students who are Tech Enthusiasts</span>
                            </li>
                            <li>
                                <div>
                                    <img src={require("../assets/images/30-04-2022/green-tick.svg").default} alt="green tick" />
                                </div>
                                <span>Students who can spend one hour on regular basis</span>
                            </li>
                            <li>
                                <div>
                                    <img src={require("../assets/images/20-04-2022/bottom-tick.svg").default} alt="bottom" />
                                </div>
                                <span>Students who has a laptop or a desktop for day to day studies and practice</span>
                            </li>
                        </ul>
                        <a href="">Apply for SAT</a>
                    </Left>
                </Wrapper>
            </Fade>
        </FullSection>
    );
}

const FullSection = styled.section`
    width: 100%;
    padding: 100px 0px;
    background: rgb(249, 249, 249);
`;
const Wrapper = styled.section`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Right = styled.div`
    width: 42%;

    @media (max-width:980px){
        width:80%;
        margin: 0 auto;
    }
`;
const Picture = styled.div`
    width: 100%;
    img {
        width: 100%;
        display: block;
    }
`;
const Left = styled.div`
    width: 42%;
    h2 {
        font-family: goridita_medium;
        font-size: 34px;
        margin-bottom: 35px;
        span {
            color: rgb(14, 159, 106);
            font-family: goridita_medium;
        }
        @media (max-width:480px){
            font-size: 24px;
        }
        
    }
    ul {
        li{
            display: flex;
            justify-content: start;
            margin-top: 30px;
            div{
                width: 40px;
                img{
                    width: 100%;
                    display: block;
                }
            }
            span{
                font-size: 16px;
                font-family: goridita_medium;
                margin: auto 0;
                @media (max-width:480px){
                font-size: 14px;
        }
        
            }
        }
    }
    a{
        margin-top: 50px;
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
        @media (max-width:480px){
        width: 50%;
        font-size: 12px;
            }
    }

    @media (max-width:980px){
        width:80%;
        margin: 0 auto;
    }
`;

export default Requirements;
