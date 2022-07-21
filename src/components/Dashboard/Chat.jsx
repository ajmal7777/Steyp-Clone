import React from "react";
import animationData from "../assets/images/lotie/70363-new-message.json";
import styled from "styled-components";
import Lottie from "react-lottie";
import SideDash from "../MainDashboard/SideDash";
import NavDash from "./NavDash";

function Chat() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div>
            <NavDash />
            <Side>
                <SideDash />
            </Side>
            <Top>
                <Lottie options={defaultOptions} height={300} width={300} />
            </Top>
            <Botton>Chat</Botton>
        </div>
    );
}

const Top = styled.div`
`;

const Side = styled.section`
    margin-top: 70px;
`;

const Botton = styled.section`
    cursor: pointer;
    background-color: rgb(15, 167, 111);
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-family: goridita_medium;
    width: 180px;
    height: 45px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0px;
`

export default Chat;
