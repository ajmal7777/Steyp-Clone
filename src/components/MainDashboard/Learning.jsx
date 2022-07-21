import React from "react";
import styled from "styled-components";
import { useState } from "react";

//sections
import NavDash from "./NavDash";
import SideDash from "./SideDash";
import TechSchool from "./TechSchool";

function Learning() {
    const [data, setData] = useState([
        {
            id: 1,
            img: require("../assets/images/media/elearning/designation/UI_Engineer.jpg"),
            name: "UI Engineer",
            description: "#1",
            Completed: false,
        },
        {
            id: 2,
            img: require("../assets/images/media/elearning/designation/Backend_Developer_ACsVD3G.jpg"),
            name: "Backend Developer",
            description: "#2",
            Completed: false,
        },
        {
            id: 3,
            img: require("../assets/images/media/elearning/designation/DevOps_Engineer.jpg"),
            name: "DevOps Engineer",
            description: "#3",
            Completed: false,
        },
        {
            id: 4,
            img: require("../assets/images/media/elearning/designation/Web_Application_Developer_vmaZxha.jpg"),
            name: "Web Application Developer",
            description: "#4",
            Completed: false,
        },
        {
            id: 5,
            img: require("../assets/images/media/elearning/designation/Mobile_Application_Developer.jpg"),
            name: "Mobile Application Developer",
            description: "#5",
            Completed: false,
        },
        {
            id: 6,
            img: require("../assets/images/media/elearning/designation/ERP_Developer.jpg"),
            name: "ERP Developer",
            description: "#6",
            Completed: false,
        },
        {
            id: 7,
            img: require("../assets/images/media/elearning/designation/Data_Scientist.jpg"),
            name: "Data Scientist",
            description: "#7",
            Completed: false,
        },
        {
            id: 8,
            img: require("../assets/images/media/elearning/designation/Machine_Learning_Engineer.jpg"),
            name: "Machine Learning Engineer",
            description: "#8",
            Completed: false,
        },
        {
            id: 9,
            img: require("../assets/images/media/elearning/designation/AI_Engineer.jpg"),
            name: "AI Engineer",
            description: "#9",
            Completed: false,
        },
        {
            id: 10,
            img: require("../assets/images/media/elearning/designation/Blockchain_Developer.jpg"),
            name: "Blockchain Developer",
            description: "#10",
            Completed: false,
        },
        {
            id: 11,
            img: require("../assets/images/media/elearning/designation/AR_Engineer.jpg"),
            name: "AR Engineer",
            description: "#11",
            Completed: false,
        },
        {
            id: 12,
            img: require("../assets/images/media/elearning/designation/VR_Engineer.jpg"),
            name: "VR Engineer",
            description: "#12",
            Completed: false,
        },
        {
            id: 13,
            img: require("../assets/images/media/elearning/designation/IoT_Engineer.jpg"),
            name: "IoT Engineer",
            description: "#13",
            Completed: false,
        },
        {
            id: 14,
            img: require("../assets/images/media/elearning/designation/Robotics_Engineer__1.jpg"),
            name: "Robotics Engineer",
            description: "#14",
            Completed: false,
        },
    ]);
    return (
        <div>
            
            <NavDash />
            <SideDash />
            <TechSchool />
            <Profesions>
                <h3>Professions</h3>
                <ul>
                    {data.map((item) => (
                        <li>
                            <Image>
                                <img src={item.img} alt="" />
                            </Image>
                            <Content>
                                <Top>
                                    <h5>{item.description}</h5>
                                    <span>{item.name}</span>
                                </Top>
                            </Content>
                        </li>
                    ))}
                </ul>
            </Profesions>
        </div>
    );
}

const Profesions = styled.section`
    margin-left: 90px;
    padding: 18px 0px;
    h3 {
        font-size: 22px;
        color: rgb(24, 72, 76);
        margin-bottom: 13px;
        font-family: goridita_regular;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 13px;
        li {
            display: flex;
            align-items: center;
            padding: 19px;
            border-radius: 7px;
            background: rgb(249, 249, 249);
            position: relative;
        }
    }
`;
const Content = styled.div``;
const Top = styled.div`
    h5 {
        color: rgb(153, 153, 153);
        display: flex;
        align-items: center;
        font-family: goridita_regular;
    }
    span {
        color: rgb(66, 66, 66);
        margin: 10px 0px;
        font-family: goridita_regular;
        font-size: 14px;
    }
`;
const Image = styled.div`
    max-width: 160px;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 14px;
    img {
        display: block;
        width: 100%;
    }
`;

export default Learning;
