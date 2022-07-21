import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';


function Eligibility() {
    return (
        <Eligible>
            <Fade left>
                <Wrapper>
                    <Right>
                        <h2>
                            Why are we <br/> checking your <span> ELIGIBILITY?</span>
                        </h2>
                        <ul>
                            <li>
                                <div className="icon">
                                    <img src={require("../assets/images/20-04-2022/top-tick.svg").default} alt="top tick" />
                                </div>
                                <div className="Content">
                                    <h3>Unemployment ratio is increasing</h3>
                                    <p>Students take up Engineering due to peer pressure and other irrelevant reasons.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <img src={require("../assets/images/30-04-2022/red-tick.svg").default} alt="red tick" />
                                </div>
                                <div className="Content">
                                    <h3>Lack of skilled work force</h3>
                                    <p>A lot of students completes Engineering but fails to pursue needed skills for the industry.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <img src={require("../assets/images/30-04-2022/green-tick.svg").default} alt="green tick" />
                                </div>
                                <div className="Content">
                                    <h3>The right person for the right job</h3>
                                    <p>It is high time to realize that if we encourage students what they want to pursue, society will get the right persons for the right duties.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <img src={require("../assets/images/20-04-2022/bottom-tick.svg").default} alt="bottom" />
                                </div>
                                <div className="Content">
                                    <h3>Not everyone are meant to become Engineers</h3>
                                    <p>Only the capable, deserving, and passionate students grows to become an Engineer.</p>
                        <a href="">Apply for SAT</a>
                                </div>  
                            </li>
                        </ul>
                    </Right>
                    <Left>
                        <Picture>
                            <img src={require("../assets/images/22-09-2021/techie-club.png")} alt="techie-club" />
                        </Picture>
                    </Left>
                </Wrapper>
            </Fade>
        </Eligible>
    );
}

const Eligible = styled.section`
    width: 100%;
    padding: 100px 0px;
`
const Wrapper = styled.section`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
const Right = styled.div`
    width: 42%;
    h2{
        font-family: goridita_medium;
        position: relative;
        font-size: 34px;
        margin-bottom: 60px;
        span{
            color: rgb(14, 159, 106);
            font-family: goridita_medium;
        }
        @media (max-width:980px){
            font-size: 24px;
        }
        
    }
    
        
    ul{
        li{
            display: flex;
            justify-content: flex-start;
            margin-bottom: 25px;
            div.icon{
                display: block;
                min-width: 40px;
                margin-right: 30px;
                img{
                    display: block;
                    width: 100%;
                }
            }
            div.Content{
                h3{
                    font-family: goridita_medium;
                    font-size: 22px;
                    margin-bottom: 15px;
                    @media (max-width:480px){
                        font-size: 18px;
                    }
        
                    
                }
                p{
                    font-size: 16px;
                    margin-bottom: 10px;
                    line-height: 1.6em;
                    color: #545454;
                    font-family: goridita_regular!important;
                    margin-top: 50px;
                    @media (max-width:480px){
                        font-size: 14px;
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
                    margin-top: 40px;
                    @media (max-width:480px){
                        width: 80%;
                        font-size: 12px;
                    }

                    
                }
                @media (max-width:480px){
                    margin: 0 auto;
                }
            }
            
        }
    }
    @media (max-width:980px){
        width:85%;
        margin: 0 auto;
    }
`
const Left = styled.div`
    width: 50%;

    @media (max-width:980px){
        width:85%;
        margin: 0 auto;
    }
`
const Picture = styled.div`
    width: 100%;
    img {
        width: 100%;
        display: block;
    }
`


export default Eligibility;
