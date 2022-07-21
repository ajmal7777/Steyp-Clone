import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <FullFooter>
            <Wrapper>
                <Right>
                    <Logo>
                        <img src={require("../assets/images/22-09-2021/grey-logo.svg").default} alt="" />
                    </Logo>
                    <Adress>Steyp Private Limited, <br /> 37/1959, 1st Floor, Infra Futura, <br /> Opposite Bharath Matha College, <br /> Seaport - Airport Rd, Thrikkakara, <br /> Kakkanad, Kerala, <br /> India - 682021</Adress>
                </Right>
                <Left>
                    <ul>
                        <li>
                            <h5>Programs</h5>
                            <a href="">Tech Schooling</a>
                            <a href="">Tech Degree</a>
                            <a href="">Tech Grad</a>
                            <a href="">Challenges</a>
                        </li>
                        <li>
                            <h5>Company</h5>
                            <a href="">About Us</a>
                            <a href="">Contact Us</a>
                        </li>
                        <li>
                            <h5>Community</h5>
                            <a href="">Talrop Talks</a>
                            <a href="">Free Ground</a>
                        </li>
                        <li>
                            <h5>Contact</h5>
                            <a href="">+91 858 999 8874</a>
                            <a href="">hello@steyp.com</a>
                            <Icons>
                                <SocialMedia>
                                    <a href="">
                                        <img src={require("../assets/images/22-09-2021/instagram.svg").default} alt="Insta" />
                                    </a>
                                </SocialMedia>
                                <SocialMedia>
                                    <a href="">
                                        <img src={require("../assets/images/22-09-2021/facebook.svg").default} alt="facebook" />
                                    </a>
                                </SocialMedia>
                                <a href="">
                                    <img src={require("../assets/images/22-09-2021/twitter.svg").default} alt="twitter" />
                                </a>
                                <SocialMedia></SocialMedia>
                                <SocialMedia>
                                    <a href="">
                                        <img src={require("../assets/images/22-09-2021/linkedin.svg").default} alt="linkedin " />
                                    </a>
                                </SocialMedia>
                                <SocialMedia>
                                    <a href="">
                                        <img src={require("../assets/images/22-09-2021/youtube.svg").default} alt="youtube" />
                                    </a>
                                </SocialMedia>
                            </Icons>
                        </li>
                    </ul>
                </Left>
                <Bottomcopy>
                    <CopyRight>
                        <p> © 2022, Steyp Private Limited. All rights reserved</p>
                    </CopyRight>
                    <Privacy>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                    </Privacy>
                </Bottomcopy>
            </Wrapper>
        </FullFooter>
    );
}

const FullFooter = styled.section`
    background-color: rgb(30, 30, 30);
    padding: 100px 0px 50px;
    width: 100%;
`;
const Wrapper = styled.section`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Right = styled.div`
    width: 20%;
    @media (max-width:980px){
        width:85%;
        margin: 0 auto;
        align-items: center;
        text-align: center;
        margin-bottom: 20px;
    }
`;
const Logo = styled.div`
    width: 100px;
    display: block;
    img {
        width: 100%;
        display: block;
    }
    @media (max-width:980px){
        display: inline-block;
    }
`;
const Adress = styled.p`
    font-size: 15px;
    margin-top: 30px;
    color: rgb(170, 170, 170);
    line-height: 28px;
`;
const CopyRight = styled.span`
    p {
        font-size: 15px;
        color: rgb(170, 170, 170);
        line-height: 1.6em;
        font-size: 16px;
        font-family: goridita_regular !important;
        @media (max-width:480px){
            font-size: 14px;
        }
    }
    @media (max-width:980px){
        width:85%;
        margin: 0 auto;
    }
`;
const Left = styled.div`
    width: 60%;
    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
            h5 {
                font-size: 16px;
                font-family: goridita_medium;
                margin-bottom: 20px;
                color: rgb(255, 255, 255);
            }
            a {
                display: block;
                margin-bottom: 10px;
                color: rgb(170, 170, 170);
                font-size: 15px;
            }
            @media (max-width:768px){
                 width:85%;
                margin: 0 auto;
                align-items: center;
                text-align: center;
                margin-bottom: 20px;
            }
        }
    }
    @media (max-width:980px){
        width:85%;
        margin: 0 auto;
    }
`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`;
const SocialMedia = styled.div`
    display: block;
    margin-right: 15px;
    height: 20px;
`;

const Bottomcopy = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    margin: 80px 0px 50px;
    flex-wrap: wrap;
    
`;
const Privacy = styled.div`
    span {
        display: inline;
        margin-bottom: 10px;
        color: rgb(170, 170, 170);
        font-size: 15px;
        margin-left: 15px;
    }
    @media (max-width:980px){
        width:85%;
        margin: 20px auto 0px;
    }
`;

export default Footer;
