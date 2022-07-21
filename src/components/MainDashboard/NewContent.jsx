import React from "react";
import styled from "styled-components";
import NavDash from "./NavDash";
import SideDash from "./SideDash";
import TechSchool from "./TechSchool";

function NewContent() {
    return (
        <>
            <NavDash />
            <SideDash />
            <TechSchool />
            <Engineer>
                <h3>UI Engineer</h3>
                <Box>
                    <Image>
                        <img src={require("../assets/images/1_Technology_Thumbnail.jpg")} alt="Technology" />
                    </Image>
                    <Content>
                        <p>Skill 1</p>
                        <h4>Technology</h4>
                        <Time>
                            <Layer>
                                <img src={require("../assets/images/icons8-layers-24.png")} alt="" />
                            </Layer>
                            <span>1 lessons</span>
                            <Clock>
                                <img src={require("../assets/images/icons8-clock-24.png")} alt="" />
                            </Clock>
                            <span>49 mins</span>
                        </Time>
                    </Content>
                </Box>
            </Engineer>
        </>
    );
}

const Engineer = styled.section`
    margin-left: 90px;
    h3 {
        font-size: 21px;
        font-family: goridita_medium;
        margin: 20px 0px;
    }
`;
const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 19px;
    border-radius: 7px;
    background: rgb(249, 249, 249);
    position: relative;
    width: 50%;
`;
const Content = styled.div`
    h4 {
        font-family: goridita_medium;
        font-size: 16px;
        margin-top: 10px;
    }
    p {
        font-size: 13px;
        font-family: goridita_regular;
        color: rgb(158, 158, 158);
    }
`;
const Time = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 10px;
    span {
        color: rgb(153, 153, 153);
        font-size: 13px;
        font-family: goridita_regular;
    }
`;
const Clock = styled.div`
    margin-right: 4px;
    margin-bottom: 4px;
    width: 15px;
    margin-left: 4px;
    img{
        display: block;
        width: 100%;
    }
    `;
const Layer = styled.div`
    margin-right: 4px;
    margin-bottom: 4px;
    width: 15px;
    img{
        display: block;
        width: 100%;
    }
    `;
const Image = styled.div`
    max-width: 160px;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 14px;
`;

export default NewContent;
