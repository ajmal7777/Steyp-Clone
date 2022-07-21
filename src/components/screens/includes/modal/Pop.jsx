import React from "react";
import styled from "styled-components";

function Pop({ isModal, setModal }) {
    return (
        <>
            {isModal && (
                <OverlayScreen>
                    <Individual>
                        <Cross onClick={()=> setModal(false)}>
                            <img src={require("../../../assets/images/steyp/close.249b682f.svg").default} alt="cross" />
                        </Cross>
                        <Photo>
                            <img src={require("../../../assets/images/48-Lekshmi B S/IMG-20200605-WA0029-min.jpg")} alt="" />
                        </Photo>
                        <Details>
                            <h4>Lakshmi Bs</h4>
                            <small>KVUPS, Pangode</small>
                            <Coma>
                                <img src={require("../../../assets/images/29-09-2021/test.svg").default} alt="" />
                            </Coma>
                            <p>My overall experience is very good. If you want to optimize your programming skills, it is my personal suggestion that, you should join Steyp.</p>
                        </Details>
                    </Individual>
                </OverlayScreen>
            )}
        </>
    );
}
const OverlayScreen = styled.div`
    position: fixed;
    left: 0px;
    top: 25px;
    width: 100%;
    z-index: 5;
    height: 100vh;
    overflow: hidden;
    background:rgba(239, 243, 239, 0.712);
    
    `
const Individual = styled.div`
    width: 650px;
    max-height: 90vh;
    overflow: hidden;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    left: 28%;
    top: 5%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 40px;
    border-radius: 10px;
    transition: all 0.5s ease 0s;
    z-index: 5;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    transform: scale(1,1);
    `;
const Cross = styled.div`
    width: 10%;
    cursor: pointer;
    img{
        width: 100%;
        display: block;
    }
`
const Photo = styled.div`
    width: 50%;
    margin: 0 auto;
    min-width: 120px;
    border-radius: 5px;
    overflow: hidden;
    img {
        display: block;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
    }
`;
const Details = styled.div`
    width: 100%;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    h4 {
        font-size: 25px;
        font-family: goridita_medium;
        color: rgb(45, 45, 45);
        text-transform: capitalize;
        margin-top: 20px;
    }
    small {
        align-items: center;
        text-align: center;
        display: block;
        font-size: 16px;
        margin-bottom: 30px;
        align-items: center;
    }
    p {
        font-size: 20px;
        font-weight: 500;
    }
`;
const Coma = styled.div`
    width: 15px;
`;

export default Pop;
