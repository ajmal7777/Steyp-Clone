import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function DashSpotlight() {
    return (
        <FullDash>
            <Right>
                <ul>
                    <li>
                        <Icon>
                            <img src={require("../assets/images/menu/dashboard.svg").default} alt="dashboard" />
                        </Icon>
                        <span className="name">Dashboard</span>
                    </li>
                    <li>
                        <Icon>
                            <img src={require("../assets/images/menu/free.svg").default} alt="free" />
                        </Icon>
                        <span className="name">
                            <Link to="/freeground">Free Ground </Link>
                        </span>
                    </li>
                    <li>
                        <Icon>
                            <img src={require("../assets/images/menu/challenge.svg").default} alt="dashboard" />
                        </Icon>
                        <span className="name">
                            <Link to="/challenge"> Challenges </Link>
                        </span>
                    </li>
                    <li>
                        <Icon>
                            <img src={require("../assets/images/menu/talk.svg").default} alt="dashboard" />
                        </Icon>
                        <span className="name">
                            <Link to="/chat">Chat With RM</Link>
                        </span>
                    </li>
                </ul>
                <SocialMedia>
                    <Logo className="social">
                        <img src={require("../assets/images/social/linkedin.svg").default} alt="linkdlin" />
                    </Logo>
                    <Logo className="social">
                        <img src={require("../assets/images/social/twitter.svg").default} alt="twitter" />
                    </Logo>
                    <Logo className="social">
                        <img src={require("../assets/images/social/facebook.svg").default} alt="facebook" />
                    </Logo>
                    <Logo className="social">
                        <img src={require("../assets/images/social/instagram.svg").default} alt="instagram" />
                    </Logo>
                    <Logo className="social">
                        <img src={require("../assets/images/social/youtube.svg").default} alt="youtube" />
                    </Logo>
                </SocialMedia>
                <RightBottom>
                    <span className="name">Explore Talrop</span>
                    <Arrow>
                        <img src={require("../assets/images/explore-white-arrow.svg").default} alt="" />
                    </Arrow>
                </RightBottom>
            </Right>
            <Left>
                <Name>
                    <h3>
                        <span>Hi,</span>Muhammed Ajmal 👋
                    </h3>
                    <Raw>
                        <img src={require("../assets/images/30-04-2022/decor.svg").default} alt="raw" />
                    </Raw>
                </Name>
                <h4>Subjects</h4>
                <Tech>
                    <Link to="/FullDashboard">
                        <Card>
                            <img src={require("../assets/images/subject-images/techschooling_qZi8bG4.svg").default} alt="" />
                        </Card>
                        <Heading>
                            Tech <br /> Schooling
                        </Heading>
                        <LeftArrow>
                            <img src={require("../assets/images/subject-images/greenarrow_KMnh8MC.svg").default} alt="" />
                        </LeftArrow>
                        <Wall>
                            <img src={require("../assets/images/subject-images/1_znke34i.svg").default} alt="" />
                        </Wall>
                        <Cee>
                            <img src={require("../assets/images/subject-images/1_6x8IJAf.svg").default} alt="" />
                        </Cee>
                    </Link>
                </Tech>
            </Left>
        </FullDash>
    );
}

const FullDash = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`;
const Right = styled.div`
    background: rgb(249, 249, 251);
    width: 5%;
    border-top: 1px solid rgb(239, 239, 239);
    position: fixed;
    z-index: 100;
    left: 0px; 
    min-height: 564px;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex !important;
    padding-top: 15px;
    &:hover .social {
        transition: all 0.3s ease-in 0s;
        opacity: 1;
    }
    &:hover {
        width: 17%;
        transition: all 0.3s ease-in 0s;
    }
    
    ul {
        width: 100%;
        li {
            display: flex;
            align-items: center;
            span {
                font-family: "goridita_medium";
                font-size: 14px;
                color: #333333;
                cursor: pointer;
                margin-left: 1.125rem;
                display: none;
                &:hover .name {
                    display: block;
                    transition: all 0.3s ease-in 0s;
                }
            }
        }
    }
`;
const RightBottom = styled.div`
    background: #56c082;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9px;
    &:hover .name {
        display: block;
    }

    span {
        font-family: "goridita_medium";
        font-size: 14px;
        color: #fff;
        margin-left: 1.125rem;
        display: none;
    }
`;
const Arrow = styled.div`
    width: 15px;
    margin-left: 7px;
    img {
        width: 100%;
        display: block;
    }
`;
const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 364px;
`;
const Logo = styled.div`
    display: block;
    width: 17px;
    opacity: 0;
`;

const Left = styled.div`
    width: 95%;
    margin-left: 5%;
    h4 {
        font-size: 21px;
        color: rgb(0, 0, 0);
        font-family: goridita_medium;
        margin: 15px;
    }
`;
const Name = styled.div`
    padding: 5px 20px;
    background-color: rgb(228, 242, 229);
    margin: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        font-family: goridita_medium;
        font-size: 24px;
    }
    span {
        color: rgb(80, 178, 120);
    }
`;
const Raw = styled.div`
    width: 70px;
    display: block;
    img {
        width: 100%;
        display: block;
    }
`;
const Tech = styled.div`
    margin-left: 15px;
    width: 28%;
    position: relative;
    border-radius: 7px;
    padding: 40px 30px;
    height: 276px;
    background-color: rgb(236, 253, 237);
`;
const Card = styled.div`
    box-shadow: rgb(0 0 0 / 16%) 4px 3px 19px;
    border-radius: 50%;
    width: 50px;
    display: block;
    img {
        width: 100%;
        display: block;
    }
`;
const Heading = styled.h4`
    font-size: 21px;
    color: rgb(0, 0, 0);
    font-family: goridita_medium;
`;
const LeftArrow = styled.div`
    cursor: pointer;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 60px;
    img {
        width: 100%;
        display: block;
    }
`;
const Wall = styled.div`
    position: absolute;
    bottom: 5px;
    right: unset;
    left: 0px;
    width: 60px;
    display: block;
`;
const Cee = styled.div`
    display: block;
    position: absolute;
    top: 5px;
    left: unset;
    right: 0px;
    width: 60px;
    img {
        width: 100%;
        display: block;
    }
`;
const Icon = styled.div`
    /* width: 10%; */
    padding: 10px 21px;
`;

export default DashSpotlight;
