import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SideDash() {
    return (
        <Right>
            <ul>
                <li>
                    <Icon>
                        <img src={require("../assets/images/menu/dashboard.svg").default} alt="dashboard" />
                    </Icon>
                    <span className="name">
                        
                        <Link to="/dashboards">Dashboards</Link>
                    </span>
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
    );
}

const Right = styled.div`
    background: rgb(249, 249, 251);
    /* width: 238px; */
    width: 5%;
    border-top: 1px solid rgb(239, 239, 239);
    position: fixed;
    z-index: 100;
    /* top: 70px;
    left: 0px; */
    min-height: 564px;
    /* overflow-y: scroll; */
    overscroll-behavior-y: contain;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex !important;
    padding-top: 15px;
    &:hover .name {
        display: block;
        transition: all 0.4s ease-in 0s;
    }
    &:hover .social {
        opacity: 1;
        transition: all 0.4s ease-in 0s;
    }
    &:hover {
        width: 17%;
        transition: all 0.4s ease-in 0s;
    }

    ul {
        width: 100%;
        li {
            display: flex;
            align-items: center;
            span {
                font-family: "goridita_medium";
                font-size: 14px;
                color: #333;
                margin-left: 1.125rem;
                display: none;
            }
        }
    }
`;
const RightBottom = styled.div`
    background: #56c082;
    width: 100%;
    padding: 10px;
    /* max-height: 50px; */
    display: flex;
    align-items: center;
    /* min-width: 60px; */
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

const Icon = styled.div`
    /* width: 10%; */
    padding: 10px 21px;
`;

export default SideDash;
