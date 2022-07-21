import React from "react";
import SideDash from "../MainDashboard/SideDash";
import NavDash from "./NavDash";
import styled from "styled-components";
import Background from "../assets/images/challenge/background-challenge.png";
import { useState } from "react";
import Win from "../assets/images/challenge/winner.9146ff4d.svg";

function Challenge() {
    const [card, setCard] = useState([
        {
            id: 1,
            img: require("../assets/images/profile/Alwin_Sunil.jpg"),
            name: "Alwin Sunil",
            result: "Winner",
            bg: require("../assets/images/challenge/winner.9146ff4d.svg"),
            tittle: "HK Buildings Website Development Challenge",
            para: "Here we've provided you with a wide range of challenges! The current one is in connection with HK Buildings.  Your job here's to develop these designs using your touch of flair! 🧑🏻‍💻",
            time: "5 Jan 2022",
        },

        {
            id: 2,
            img: require("../assets/images/profile/Adithyan_S_P.jpeg"),
            name: "Adhithyan SP",
            result: "Runner Up",
            bg: require("../assets/images/challenge/runner.svg"),
        },

        {
            id: 3,
            img: require("../assets/images/profile/Joel_Lee_Roy.jpeg"),
            name: "Joel Lee Roy",
            result: "Runner Up",
            bg: require("../assets/images/challenge/runner.svg"),
        },

        {
            id: 4,
            img: require("../assets/images/profile/Faheem_C_M-min.jpg"),
            name: "Faheem CM",
            result: "Runner Up",
            bg: require("../assets/images/challenge/runner.svg"),
        },
    ]);

    const [pay, setPay] = useState([
        {
            id: 1,
            img: require("../assets/images/profile/Muhsin-challenge.jpeg"),
            name: "Muhsin Neyyathur",
            result: "Winner",
            tittle: "Fastpay Website Development Challenge",
            time: "5 Jan 2022",
            bg: require("../assets/images/challenge/winner.9146ff4d.svg"),
        },

        {
            id: 2,
            img: require("../assets/images/profile/Swathi.jpeg"),
            name: "Swathi K",
            result: "Runner Up",
            bg: require("../assets/images/challenge/runner.svg"),
        },

        {
            id: 3,
            img: require("../assets/images/profile/abhinath-S-R.jpeg"),
            name: "Abhinath S R",
            result: "Runner Up",
            bg: require("../assets/images/challenge/runner.svg"),
        },

        {
            id: 4,
            img: require("../assets/images/profile/Vaifav_.jpg"),
            name: "Vaifav S V",
            result: "Runner Up",
            bg: require("../assets/images/challenge/runner.svg"),
        },
    ]);

    return (
        <div>
            <NavDash />
            <Side>
                <SideDash />
            </Side>
            <Full>
                <Container>
                    <Content>
                        <h2>Steyp Challenges</h2>
                        <p>Steyp is now providing you with a variety of exciting challenges! Come join us and earn awesome rewards.</p>
                    </Content>
                </Container>
                <Active>
                    <h3>Active Challenges</h3>
                    <Empty>
                        <img src={require("../assets/images/challenge/empty-challenge.svg").default} alt="empty" />
                    </Empty>
                    <Heading>
                        <span>Woohoo!</span>
                        <p>No challenges pending. We will get back with more fulfilled challenges for you.</p>
                    </Heading>
                </Active>

                <Result>
                    <Top>
                        <h5>Results</h5>
                        <span>5 Results</span>
                    </Top>
                    <Box>
                        {card.map((item) => (
                            <Tittle>
                                <h5>{item.tittle}</h5>
                                <span>{item.time}</span>
                            </Tittle>
                        ))}
                        <Winners>
                            <ul>
                                <li className="note">
                                    <p>
                                        Here we've provided you with a wide range of challenges! The current one is in connection with HK Buildings. Your job here's to develop these designs using your
                                        touch of flair! 🧑🏻‍💻
                                    </p>
                                    <Button>View Full Result</Button>
                                </li>
                                {card.map((item) => (
                                    <li className="picture">
                                        <Profile>
                                            <img src={item.img} alt="" />
                                            <h5>{item.name}</h5>
                                            <h6>{item.result}</h6>
                                        </Profile>
                                    </li>
                                ))}
                            </ul>
                        </Winners>
                    </Box>
                    <Box>
                        {pay.map((item) => (
                            <Tittle>
                                <h5>{item.tittle}</h5>
                                <span>{item.time}</span>
                            </Tittle>
                        ))}
                        <Winners>
                            <ul>
                                <li className="note">
                                    <p>
                                        "Here we've provided you with a wide range of challenges! The current one is in connection with Fastpay. Your job here's to develop these designs using your
                                        touch of flair! 🧑🏻‍💻"
                                    </p>
                                    <Button>View Full Result</Button>
                                </li>
                                {pay.map((item) => (
                                    <li className="picture">
                                        <Profile>
                                            <img src={item.img} alt="" />
                                            <h5>{item.name}</h5>
                                            <h6>{item.result}</h6>
                                        </Profile>
                                    </li>
                                ))}
                            </ul>
                        </Winners>
                    </Box>
                </Result>
            </Full>
        </div>
    );
}

const Side = styled.section`
    margin-top: 70px;
`;
const Full = styled.section`
    margin-left: 80px;
    padding: 20px 10px 35px;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px;
    background-image: url(${Background});
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 40px;
`;
const Content = styled.div`
    margin-right: 10px;
    padding: 70px 0px 50px;
    h2 {
        font-size: 34px;
        font-family: goridita_medium;
        margin-bottom: 5px;
    }
    p {
        font-family: goridita_regular;
        color: rgb(51, 51, 51);
        font-size: 14px;
        max-width: 600px;
    }
`;

const Active = styled.div`
    margin-top: 20px;
    animation: 300ms ease-in-out 0ms 1 normal none running fade;
    h3 {
        font-size: 24px;
        font-family: goridita_medium;
        color: rgb(52, 52, 52);
        text-align: left;
        margin-top: -20px;
    }
`;
const Empty = styled.div`
    display: flex;
    justify-content: center;
    img {
        display: block;
        width: 230px;
    }
`;
const Heading = styled.div`
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
        font-size: 26px;
        font-family: goridita_medium;
        margin-bottom: 5px;
    }
    p {
        font-size: 16px;
        color: rgb(51, 51, 51);
        max-width: 500px;
        text-align: center;
        line-height: 1.6em;
        font-family: goridita_regular;
    }
`;

const Result = styled.div``;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h5 {
        font-size: 22px;
        font-family: goridita_medium;
        color: rgb(52, 52, 52);
        text-align: left;
    }
    span {
        font-size: 18px;
        font-family: goridita_medium;
    }
`;
const Box = styled.div`
    padding: 20px;
    box-shadow: rgb(137 137 137 / 11%) 0px 3px 34px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 6px;
    transition: all 0.2s ease-in-out 0s;
    margin-bottom: 15px;
`;
const Tittle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
        font-size: 18px;
        margin-bottom: 3px;
        font-family: goridita_medium;
        text-transform: capitalize;
        color: rgb(52, 52, 52);
    }
    span {
        font-size: 14px;
        font-family: goridita_regular;
    }
`;
const Winners = styled.div`
    ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 970px;
        li {
            &.note {
                padding: 32px 20px 15px;
                min-width: 250px;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                z-index: 3;
                margin-right: 15px;
            }
        }
    }
`;
const Button = styled.div`
    background-color: rgb(15, 167, 111);
    color: rgb(255, 255, 255);
    text-align: center;
    text-transform: capitalize;
    width: 165px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: goridita_medium;
    margin-top: 30px;
`;
const Profile = styled.div`
    background-image: url(${Win});
    padding: 32px 20px 15px;
    width: 220px;
    border-bottom: 10px solid rgb(222, 142, 26);
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    z-index: 3;
    margin-right: 15px;

    img {
        display: block;
        border-radius: 50%;
        margin: 0px auto;
        width: 75px;
        height: 75px;
    }
    h5 {
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
        height: 38px;
        line-height: 18px;
        word-break: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: goridita_medium;
    }
    h6 {
        font-size: 14px;
        font-family: goridita_medium;
        width: 100%;
        display: block;
        text-align: center;
        color: rgb(222, 142, 26);
    }
`;

export default Challenge;
