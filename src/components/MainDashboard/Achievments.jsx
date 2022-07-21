import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Achievments() {
    const [box, setBox] = useState([
        {
            id: 1,
            img: require("../assets/images/media/elearning/designation/UI_Engineer.jpg"),
            name: "UI Engineer",
            description: "Completed on 12 May 2022",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 2,
            img: require("../assets/images/media/elearning/designation/Backend_Developer_ACsVD3G.jpg"),
            name: "Backend Developer",
            description: "Enrolling now",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 3,
            img: require("../assets/images/media/elearning/designation/DevOps_Engineer.jpg"),
            name: "DevOps Engineer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 4,
            img: require("../assets/images/media/elearning/designation/Web_Application_Developer_vmaZxha.jpg"),
            name: "Web Application Developer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 5,
            img: require("../assets/images/media/elearning/designation/Mobile_Application_Developer.jpg"),
            name: "Mobile Application Developer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 6,
            img: require("../assets/images/media/elearning/designation/ERP_Developer.jpg"),
            name: "ERP Developer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 7,
            img: require("../assets/images/media/elearning/designation/Data_Scientist.jpg"),
            name: "Data Scientist",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 8,
            img: require("../assets/images/media/elearning/designation/Machine_Learning_Engineer.jpg"),
            name: "Machine Learning Engineer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 9,
            img: require("../assets/images/media/elearning/designation/AI_Engineer.jpg"),
            name: "AI Engineer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 10,
            img: require("../assets/images/media/elearning/designation/Blockchain_Developer.jpg"),
            name: "Blockchain Developer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 11,
            img: require("../assets/images/media/elearning/designation/AR_Engineer.jpg"),
            name: "AR Engineer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 12,
            img: require("../assets/images/media/elearning/designation/VR_Engineer.jpg"),
            name: "VR Engineer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 13,
            img: require("../assets/images/media/elearning/designation/IoT_Engineer.jpg"),
            name: "IoT Engineer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
        {
            id: 14,
            img: require("../assets/images/media/elearning/designation/Robotics_Engineer__1.jpg"),
            name: "Robotics Engineer",
            description: "Not enrolled yet",
            star: require("../assets/images/star.svg").default,
            stype: require("../assets/images/steyp/steyp-log.png"),
        },
    ]);

    return (
        <Courses>
            <Right>
                <h3>Achievements</h3>
                <ul>
                    {box.map((item) => (
                        <li>
                            <Photo>
                                <img src={item.img} />
                            </Photo>
                            <Content>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <Star>
                                    <img src={item.star} />
                                    <img src={item.star} />
                                    <img src={item.star} />
                                    <img src={item.star} />
                                    <img src={item.star} />
                                    <img src={item.star} />
                                    <img src={item.star} />
                                    <img src={item.star} />
                                    <img src={item.star} />
                                    <img src={item.star} />
                                </Star>
                                <Steyp>
                                    <img src={item.stype} />
                                </Steyp>
                            </Content>
                        </li>
                    ))}
                </ul>
            </Right>
            <Left>
                <h3>Overall Performance</h3>
                <Subject>
                    <ul>
                        <li>
                            <span>Lessons</span>
                            <span>98</span>
                        </li>
                        <li>
                            <span>Topics</span>
                            <span>557</span>
                        </li>
                    </ul>
                </Subject>
                <Skill>
                    <ul>
                        <li>
                            <Image>
                                <img src={require("../assets/images/calendar.svg").default} alt="" />
                            </Image>
                            <Topic>
                                <span>Professions</span>
                                <span className="number">1</span>
                            </Topic>
                        </li>
                        <li>
                            <Image>
                                <img src={require("../assets/images/calendar.svg").default} alt="" />
                            </Image>
                            <Topic>
                                <span>Skills</span>
                                <span className="number">9</span>
                            </Topic>
                        </li>
                        <li>
                            <Image>
                                <img src={require("../assets/images/calendar.svg").default} alt="" />
                            </Image>
                            <Topic>
                                <span>Practices</span>
                                <span className="number">26</span>
                            </Topic>
                        </li>
                        <li>
                            <Image>
                                <img src={require("../assets/images/calendar.svg").default} alt="" />
                            </Image>
                            <Topic>
                                <span>Assessments</span>
                                <span className="number">16</span>
                            </Topic>
                        </li>
                        <li>
                            <Image>
                                <img src={require("../assets/images/calendar.svg").default} alt="calender" />
                            </Image>
                            <Topic>
                                <span>Workshops</span>
                                <span className="number">26</span>
                            </Topic>
                        </li>
                        <li>
                            <Image>
                                <img src={require("../assets/images/calendar.svg").default} alt="" />
                            </Image>
                            <Topic>
                                <span>Premium Assists</span>
                                <span className="number">0</span>
                            </Topic>
                        </li>
                    </ul>
                </Skill>
            </Left>
        </Courses>
    );
}

const Courses = styled.section`
    display: flex;
    margin-left: 80px;
    justify-content: space-evenly;
`;
const Right = styled.div`
    width: 70%;
    h3 {
        font-family: goridita_medium;
        display: block;
        font-size: 20px;
        margin-bottom: 8px;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 15px;
        li {
            position: relative;
            width: 100%;
            background: rgb(232, 243, 253);
            padding: 16px 20px;
            border-radius: 5px;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin-bottom: 14px;
        }
    }
`;
const Content = styled.div`
    h4 {
        font-family: goridita_medium;
        display: block;
        font-size: 15px;
    }
    p {
        display: block;
        color: rgb(127, 127, 127);
        font-size: 13px;
        font-family: goridita_regular;
    }
`;
const Photo = styled.div`
    margin-right: 21px;
    width: 24%;
`;
const Steyp = styled.div`
    display: block;
    width: 35px;
    position: absolute;
    bottom: 15px;
    right: 15px;
`;
const Star = styled.div`
    margin-top: 7px;
    display: flex;
    width: 12px;
    margin-right: 5px;
    img {
        display: block;
        width: 100%;
    }
`;
const Left = styled.div`
    width: 25%;
    h3 {
        font-family: goridita_medium;
        display: block;
        font-size: 20px;
        margin-bottom: 8px;
    }
`;
const Subject = styled.div`
    margin-bottom: 8px;
    ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        li {
            background: rgb(241, 238, 251);
            padding: 7px 17px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            span {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-family: goridita_medium;
                font-size: 16px;
            }
        }
    }
`;
const Skill = styled.div`
    ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;

        li {
            background: rgb(232, 243, 253);
            display: flex;
            align-items: center;
            padding: 16px;
            border-radius: 5px;
            span {
                display: block;
                color: rgb(125, 132, 141);
                font-size: 13px;
                margin-bottom: 4px;
                line-height: 1rem;
                font-family: goridita_medium;
                &.number {
                    font-family: goridita_medium;
                    display: block;
                    font-size: 20px;
                    line-height: 1rem;
                    color: #000;
                }
            }
        }
    }
`;
const Image = styled.div`
    background: rgb(99, 231, 189);
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 11px;
    img {
        display: block;
        width: 50%;
    }
`;
const Topic = styled.div``;

export default Achievments;
