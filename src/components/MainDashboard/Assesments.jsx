import React from "react";
import NavDash from "./NavDash";
import SideDash from "./SideDash";
import TechSchool from "./TechSchool";
import styled from "styled-components";

function Assesments() {
    return (
        <>
            <NavDash />
            <SideDash />
            <TechSchool />
            <Board>
                <Empty>
                    <img src={require("../assets/images/empty_page.svg").default} alt="empty" />
                </Empty>
                <Bottom>
                    <h5>There are no assessments active</h5>
                    <p>Currently, you have no assessments to attend. Please go to your next activity to unlock more assessments.</p>
                    <Botton>Go to Dashboard</Botton>
                </Bottom>
            </Board>
        </>
    );
}

const Board = styled.div`
    text-align: center;
    padding: 0px 0px 30px;
    border-radius: 5px;
    background: rgb(249, 249, 251);
    width: 56%;
    margin-left: 90px;
`;
const Empty = styled.div`  
    margin-left: 30%;
    img {
        width: 100%;
        max-width: 300px;
    }
`;
const Bottom = styled.div`
    h5 {
        font-size: 20px;
        font-family: goridita_medium;
        margin-bottom: 8px;
    }
    p {
        margin: 0px auto 15px;
        max-width: 80%;
        color: rgb(116, 116, 116);
        font-family: goridita_regular;
        font-size: 14px;
    }
`;
const Botton = styled.div`
    display: inline-block;
    background-color: rgb(15, 167, 111);
    font-family: goridita_medium;
    padding: 12px 25px;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    font-size: 14px;
`;

export default Assesments;
