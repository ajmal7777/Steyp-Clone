import React from "react";
import NavDash from "./NavDash";
import SideDash from "./SideDash";
import TechSchool from "./TechSchool";
import styled from "styled-components";

function Certification() {
    return (
        <div>
            <NavDash />
            <SideDash />
            <TechSchool />
            <Card>
                <Rectangle>
                    <Photo>
                        <img src={require("../assets/images/media/elearning/designation/UI_Engineer.jpg")} alt="UI engineer" />
                    </Photo>
                    <SmallBox>
                        <Content>
                            <Top>
                                <h4>UI Engineer Certification</h4>
                                <p>You have completed your course. Now you can apply for a certificate.</p>
                            </Top>
                            <Bottom>
                                <p>Started</p>
                                <span>3 Dec 2020</span>
                                <p>Completed</p>
                                <span>12 May 2022</span>
                            </Bottom>
                        </Content>
                        <Botton>Apply Certificate</Botton>
                    </SmallBox>
                </Rectangle>
            </Card>
        </div>
    );
}

const Card = styled.div`
    height: 100%;
    background-color: rgb(249, 249, 251);
    padding: 25px;
    margin-left: 90px;
    width: 92%;
`;
const Content = styled.div``;
const Rectangle = styled.div`
    display: flex;
    align-items: center;
    padding: 25px;
    height: 270px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 9px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 25px;
`;
const Photo = styled.div`
    width: 300px;
    margin-right: 25px;
    border-radius: 5px;
    overflow: hidden;
    height: 100%;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
`;
const Top = styled.div`
    h4 {
        font-size: 18px;
        color: rgb(57, 56, 56);
        font-family: goridita_medium;
        line-height: 1.3em;
        margin-bottom: 5px;
    }
    p {
        font-size: 15px;
        font-family: goridita_regular;
        color: rgb(106, 106, 106);
        line-height: 1.3em;
        width: 85%;
        margin:10px 0px 30px 0px;
    }
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.3em;
    padding: 10px;
    min-height: 42px;
    border: 2px dashed rgb(16, 167, 112);
    background-color: rgb(231, 255, 246);
    border-radius: 5px;
    width: 80%;
    p {
        font-size: 14px;
        color: rgb(106, 106, 106);
        font-family: goridita_medium;
        margin-right: 5px;
        line-height: 1.3em;
        margin-left: 20px;
    }
    span {
        font-size: 14px;
        font-family: goridita_medium;
        color: rgb(16, 167, 112);
        font-style: italic;
        line-height: 1.3em;
    }
`;
const Botton = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-family: goridita_medium;
    color: rgb(255, 255, 255);
    background-color: rgb(15, 167, 111);
    border-radius: 5px;
    width: 230px;
    height: 40px;
    text-align: center;
    cursor: pointer;
`;

const SmallBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: rgb(249, 249, 251);
    border: 1px solid rgb(224, 224, 224);
    padding: 25px;
    border-radius: 6px;
    position: relative;
`;
export default Certification;
