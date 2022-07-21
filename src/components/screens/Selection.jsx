import React from "react";
import styled from "styled-components";

function Selection() {
    return (
        <MainSection>
            <Wrapper>
                <Right>
                    <h3>
                        Our <br /> selection <span> process </span>
                    </h3>
                    <p>
                        Candidates can take admissions in Steyp only through qualifying SAT (Steyp’s Aptitude Test). Candidates can apply for SAT online, and attend the test physically from various
                        centres where SAT is conducted.
                    </p>
                    <p className="secondpara">
                        There are 2 tests involved which includes a written <span> Aptitude Test </span> and a <span> Personal Interview </span>
                    </p>
                    <a href="">Apply for SAT</a>
                </Right>
                <Left>
                    <Box>
                        <NumPic>
                            <img src={require("../assets/images/30-04-2022/one.svg").default} alt="one.svg" />
                        </NumPic>
                        <Content>
                            <h4>Aptitude Test</h4>
                            <p>
                                A written Aptitude Test is the first process where candidates will be assessed on their logical thinking, tech knowledge, general knowledge, and mathematical ability.
                            </p>
                        </Content>
                    </Box>
                    <Box className="orange">
                        <NumPic>
                            <img src={require("../assets/images/30-04-2022/two.svg").default} alt="num two" />
                        </NumPic>
                        <Content>
                            <h4>Personal Interview</h4>
                            <p>A Personal Interview is the next process where candidates will be assessed on critical thinking, situation analysis ability, and soft skills.</p>
                        </Content>
                    </Box>
                </Left>
            </Wrapper>
        </MainSection>
    );
}

const MainSection = styled.section`
    width: 100%;
    background: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/30-04-2022/selection-background.png) 125% 0% / 36% no-repeat rgb(249, 249, 249);
    position: relative;
    z-index: 2; 
`;
const Wrapper = styled.section`
    padding: 100px 0px;
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
const Right = styled.div`
    width: 30%;
    h3 {
        font-size: 35px;
        font-family: goridita_medium;
        color: rgb(33, 33, 33);
        span {
            color: rgb(15, 167, 111);
            font-family: goridita_medium;
        }
        @media (max-width:480px){
            font-size: 24px;
        }
    }
    p {
        margin: 10px 0px 40px;
        line-height: 1.6em;
        font-size: 16px;
        color: #545454;
        font-family: goridita_regular !important;
        span {
            color: rgb(15, 167, 111);
        }
        @media (max-width:480px){
            font-size: 15px;
        }
    }
    a {
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
        margin-top: 60px;
        @media (max-width:480px){
        width: 50%;
        font-size: 12px;
    }
    }
    @media (max-width:980px){
        width:85%;
        margin: 0 auto;
    }
`;
const Left = styled.div`
    width: 55%;

    @media (max-width:980px){
        width:85%;
        margin: 0 auto;
        padding-top: 30px;
    }
    @media (max-width:480px){
            width: 100%;
        }
`;
const Box = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 25px;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    border: 1px solid rgba(76, 164, 115, 0.3);
    align-items: center;
    gap: 25px;
    margin-bottom: 15px;
    &.orange {
        padding: 30px 25px;
        background: rgb(255, 255, 255);
        border-radius: 6px;
        border: 1px solid rgba(255, 171, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
    }
`;
const NumPic = styled.div`
    display: flex;
    align-items: center;
    min-width: 57px;
    max-width: 57px;
    img {
        display: block;
        width: 100%;
    }
`;
const Content = styled.div`
    h4{
        color: rgb(0, 0, 0);
        font-family: goridita_medium;
        margin-bottom: 10px;
    }
    p{
        line-height: 1.6em;
        font-size: 16px;
        color: #545454;
        font-size: 15px;
        font-family: goridita_regular!important;
        @media (max-width:480px){
            font-size: 13px;
        }
    }

`;

export default Selection;
