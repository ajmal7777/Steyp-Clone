import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pop from "./includes/modal/Pop";

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed:  5000,
        cssEase: "linear"
    };

    const [test, settest] = useState([
        {
            id: 1,
            name: "Muhammed Siyad",
            school: "KVUPS, Pangode",
            img: require("../assets/images/4-Muhammed Siyad/muhammed-siyad-min.jpg"),
            description: "The is the best Platform to study",
        },
        {
            id: 2,
            name: "Abdulla A ",
            school: "KVUPS, Pangode",
            img: require("../assets/images/6-Abdulla A/abdulla-min.jpg"),
            description: "The is the best Platform to study",
        },
        {
            id: 3,
            name: "Fathima",
            school: "KVUPS, Pangode",
            img: require("../assets/images/67-Fathima Fabna/Fathima_Fabna-min.jpg"),
            description: "The is the best Platform to study",
        },
        {
            id: 4,
            name: "Lakshmi Bs",
            school: "KVUPS, Pangode",
            img: require("../assets/images/48-Lekshmi B S/IMG-20200605-WA0029-min.jpg"),
            description: "The is the best Platform to study",
        },
    ]);
const [isModal,setModal] =useState(false)
    return (
        <Experiences>
            <Wrapper>
                <Heading>
                    What our students say about the experience in <span> Steyp </span>
                </Heading>
                <Slider {...settings}>
                    <div>
                        <Cards>
                            {test.map((item) => (
                                <Individual onClick={()=> setModal(true)}>
                                    <Photo>
                                        <img src={item.img} alt="" />
                                    </Photo>
                                    <Details>
                                        <h4>{item.name}</h4>
                                        <small>{item.school}</small>
                                        <Coma>
                                            <img src={require("../assets/images/29-09-2021/test.svg").default} alt="" />
                                        </Coma>
                                        <p>{item.description}</p>
                                    </Details>
                                </Individual>
                            ))}
                        </Cards>
                    </div>
                    <div>
                        <Cards>
                            {test.map((item) => (
                                <Individual>
                                    <Photo>
                                        <img src={item.img} alt="" />
                                    </Photo>
                                    <Details>
                                        <h4>{item.name}</h4>
                                        <small>{item.school}</small>
                                        <Coma>
                                            <img src={require("../assets/images/29-09-2021/test.svg").default} alt="" />
                                        </Coma>
                                        <p>{item.description}</p>
                                    </Details>
                                </Individual>
                            ))}
                        </Cards>
                    </div>
                    <div>
                        <Cards>
                            {test.map((item) => (
                                <Individual>
                                    <Photo>
                                        <img src={item.img} alt="" />
                                    </Photo>
                                    <Details>
                                        <h4>{item.name}</h4>
                                        <small>{item.school}</small>
                                        <Coma>
                                            <img src={require("../assets/images/29-09-2021/test.svg").default} alt="" />
                                        </Coma>
                                        <p>{item.description}</p>
                                    </Details>
                                </Individual>
                            ))}
                        </Cards>
                    </div>
                </Slider>
                <Pop isModal={isModal} setModal={setModal} />
                <ButtonLink>Apply for SAT</ButtonLink>
            </Wrapper>
        </Experiences>
    );
}

const Experiences = styled.section``;
const Wrapper = styled.section`
    padding: 100px 0px;
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    align-items: center;
`;
const Heading = styled.h2`
    font-size: 35px;
    font-family: goridita_medium;
    color: rgb(33, 33, 33);
    position: relative;
    max-width: 721px;
    margin: 0px auto 55px;
    text-align: center;
    span {
        color: rgb(15, 167, 111);
        font-family: goridita_medium;
    }
    @media (max-width: 480px) {
        font-size: 24px;
    }
`;
const Cards = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;
const Individual = styled.div`
    cursor: pointer;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 5px;
    min-height: 165px;
    margin: 10px;
    transition: all 0.3s ease 0s;
    display: flex !important;
    width: 40%;

    @media (max-width: 980px) {
        width: 85%;
        margin: 10px auto;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`;
const   Photo = styled.div`
    width: 120px;
    min-width: 120px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 15px;
    img {
        display: block;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
    }
`;
const Details = styled.div`
    h4 {
        font-size: 18px;
        font-family: goridita_medium;
        color: rgb(45, 45, 45);
        text-transform: capitalize;
    }
    small {
        font-size: 12px;
        margin-bottom: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;
const Coma = styled.div`
    width: 15px;
`;
const ButtonLink = styled.a`
    cursor: pointer;
    width: 200px;
    padding: 15px 14px;
    background: linear-gradient(100deg, rgb(15, 167, 111) 0%, rgb(15, 158, 167) 100%) 0% 0% no-repeat padding-box padding-box transparent;
    font-size: 15px;
    color: rgb(255, 255, 255);
    font-family: goridita_medium;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.4s ease 0s;
    margin: 50px auto;
    @media (max-width: 480px) {
        width: 50%;
        font-size: 12px;
    }
`;

export default Testimonials;
