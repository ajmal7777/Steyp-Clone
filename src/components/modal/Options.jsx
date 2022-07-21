import React from "react";
import styled from "styled-components";

function Options({ isTog, setTog }) {
    return (
        <>
            {isTog && (
                <Settings>
                    <Wrapper>
                        <SetRight>
                            <Heading>
                                <Logo>
                                    <Img src={require("../assets/images/15-09-2021/steyp-logo.svg").default} />
                                </Logo>
                            </Heading>
                        </SetRight>
                        <SetLeft>
                            <NavHamberg onClick={() => setTog(false)}>
                                <Hamberg src={require("../assets/images/29-09-2021/close.svg").default} />
                            </NavHamberg>
                        </SetLeft>
                        <Bottom>
                            <Bright>
                                <ul>
                                    <li>
                                        <div>
                                            <img src={require("../assets/images/29-09-2021/programs.svg").default} alt="" />
                                        </div>
                                        <h4>Programs</h4>
                                        <a href="">Tech Schooling</a>
                                        <a href="">Tech Degree</a>
                                        <a href="">Tech Grad</a>
                                        <a href="">Challenges</a>
                                    </li>
                                    <li>
                                        <div>
                                            <img src={require("../assets/images/29-09-2021/company.svg").default} alt="" />
                                        </div>
                                        <h4>Company</h4>
                                        <a href="">About Us</a>
                                        <a href="">Contact Us</a>
                                    </li>
                                    <li>
                                        <div>
                                            <img src={require("../assets/images/29-09-2021/community.svg").default} alt="" />
                                        </div>
                                        <h4>Community</h4>
                                        <a href="">Talrop Talks</a>
                                        <a href="">Free Ground</a>
                                    </li>
                                </ul>
                            </Bright>
                            <Bleft>
                                <DashboardLink>Go to dashboard</DashboardLink>
                            </Bleft>
                        </Bottom>
                    </Wrapper>
                </Settings>
            )}
        </>
    );
}

const Settings = styled.section`
    width: 100%;
    background-color: #fff;
    position: fixed;
    z-index: 3;
    overflow: hidden;
    position: fixed;
    transition: all 0.3s ease 0s;
    width: 100%;
    height: 90vh;
    z-index: 1000;
    left: 0px;
    bottom: 100px;
    backdrop-filter: blur(2px);
`;
const Wrapper = styled.section`
    width: 85%;
    height: 100%;
    max-width: 1325px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
const SetRight = styled.div`
    width: 40%;
`;
const Heading = styled.h1`
    width: 100%;
`;
const Logo = styled.div`
    width: 120px;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const SetLeft = styled.div`
    width: 28%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const DashboardLink = styled.a`
    color: #4eaf7c;
    border: 3px solid rgb(78, 175, 124);
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    transition: all 0.3s ease 0s;
    padding: 10px 40px;
    font-weight: 500;
    @media (max-width: 1080px) {
        padding: 5px;
        font-weight: 500;
        @media (max-width: 480px) {
            font-size: 10px;
            border: 2px solid rgb(78, 175, 124);
            font-weight: 150;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 480px) {
        font-size: 10px;
    }
`;
const NavHamberg = styled.div`
    margin-left: 30px;
    width: 30px;
`;

const Hamberg = styled.img`
    width: 100%;
    display: block;
`;

const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
        flex-wrap: wrap;
    }
    
`;
const Bright = styled.div`
    width: 70%;
    @media (max-width: 768px) {
        width: 90%;
        flex-wrap: wrap;
    }
    
    
    ul {
        display: flex;
        justify-content: space-around;
        @media (max-width: 480px) {
            flex-wrap: wrap;
    }
     
        li {
            width: 25%;
            @media (max-width: 480px) {
            width: 35%;
            flex-wrap: wrap;
    }
    
            div {
                display: block;
                width: 40px;
                margin-bottom: 20px;
                @media (max-width: 480px) {
                    width: 20px;
                    margin-bottom: 5px;
                }
                img {
                    display: block;
                    width: 100%;
                }
            }
        }
        h4 {
            font-size: 18px;
            font-family: goridita_medium;
            color: rgb(112, 112, 112);
            margin-bottom: 20px;
            @media (max-width: 480px) {
                font-size: 14px;
            }
            
        }
        a {
            font-family: goridita_regular;
            display: block;
            margin-bottom: 10px;
            color: rgb(156, 156, 156);
            font-size: 14px;
            @media (max-width: 480px) {
                font-size: 10px;
            }
        }
    }
`;
const Bleft = styled.div`
    width: 25%;
    @media (max-width: 768px) {
        width: 50%;
    }
    
`;

export default Options;
