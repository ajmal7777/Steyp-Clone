import React from "react";
import styled from "styled-components";

function SatEngineering() {
    return (
        <Engineer>
            <Wrapper>
                <Right>
                    <Heading>
                        <span>40%</span>of students from a classroom opts for Engineering
                    </Heading>
                    <p>
                        A large number of students opts for Engineering because of various reasons. Some students opt it out of passion while some out of peer pressure. A majority of Engineering
                        graduated do not land a core job, because they are not meant to become Engineers, but they might become a good artist, a doctor, a teacher, a dancer, etc. The fact remains is,
                        everyone are not meant for Engineering.
                    </p>
                    <p className="para">Here is where Steyp comes in, to check the eligibility of students, that whether a student is fit for Engineering or not.</p>
                    <a href="">Apply For SAT </a>
                </Right>
                <Left>
                    <Picture>
                        <img src={require("../assets/images/30-04-2022/side-image.png")} alt="" />
                    </Picture>
                </Left>
            </Wrapper>
        </Engineer>
    );
}


const Engineer = styled.section`
    width: 100%;
    margin-top: 10%;
`
const Wrapper = styled.section`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    display: flex;
    justify-content: space-between;
    @media (max-width:980px){
        flex-wrap: wrap;
    }
    
`
const Right= styled.div`
    width: 42%;
    p{
        line-height: 1.6em;
        font-size: 16px;
        color: #545454;
        font-family: goridita_regular!important;
        margin-bottom: 20px;
        &.para{
            margin-bottom: 0;
        }
        @media (max-width:480px){
        font-size: 14px;
        }
    }
    a{
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
        margin:60px 0px;
        @media (max-width:480px){
        width: 50%;
        font-size: 12px;
    }
    }
    @media (max-width:980px){
        width: 85%;
        margin: 20px auto;
    }
    
`
const Heading= styled.h2`
    color: rgb(33, 33, 33);
    font-family: goridita_medium;
    font-size: 34px;
    span{
        font-family: goridita_medium;
        color: rgb(15, 167, 111);
    }
    @media (max-width:480px){
        font-size: 26px;
    }
`  
const Left= styled.div`
    width: 40%;
    @media (max-width:980px){
        width: 85%;
        margin: 0 auto;
    }
`
const Picture= styled.div`
width: 100%;
    margin:0 auto;
    img{
        width: 100%;
        display: block;
    }
`

export default SatEngineering;
