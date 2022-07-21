import React from 'react'
import styled from 'styled-components'

function NavDash() {
  return (
    <NavSection>
    <Wrapper>
        <NavRight>
            <Heading>
                <Logo>
                    <Img src={require("../assets/images/15-09-2021/steyp-logo.svg").default}/>
                </Logo>
            </Heading>
        </NavRight>
        <NavLeft>
            <GoldNav>
                <Coin>
                    <img src={require("../assets/images/dollar.png")} alt="dollar" />
                </Coin>
                <a href="">50 coins</a>
                <Add>
                    <img src={require("../assets/images/plus-solid.svg").default} alt="plus-solid" />
                </Add>
            </GoldNav>
            <NavHamberg >
                <Hamberg src={require("../assets/images/messages.svg").default}/>
            </NavHamberg>
            <IconMan>
                <img src={require("../assets/images/iconman.png")} alt="" />
            </IconMan>
            <span>Muhammed Ajmal</span> 
            <DownArrow>
                <img src={require("../assets/images/polygon.svg").default} alt="" />
            </DownArrow>
        </NavLeft>
    </Wrapper>
</NavSection>
)
}

const NavSection = styled.section`

    padding: 0px 18px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    z-index: 99;
    background: rgb(249, 249, 251);
    -webkit-box-align: inherit;
    align-items: inherit;
`
const Wrapper = styled.section`
width: 100%;
height: 100%;
max-width: 1325px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`
const NavRight= styled.div`
width: 30%;
@media (max-width:640px){
    width:25%;
}

`
const Heading = styled.h1`
width: 100%;
`
const Logo= styled.div`
width:120px;
@media (max-width:480px){
    width:100%;
}
`
const Img = styled.img`
width: 100%;
display: block;
`
const NavLeft= styled.div`
width: 58%;
display: flex;
justify-content: flex-end;
span{
    align-items: center;
    margin: 0px 13px;
    font-size: 14px;
    font-family: goridita_medium;
    
}


@media (max-width:768px){
    width:35%;
}
@media (max-width:480px){
    width:45%;
}
`
const IconMan = styled.div`
    width: 40px;
    border-radius: 50%;
    img{
        width: 100%;
        display: block;
    }
`
const GoldNav = styled.div`
    width: 180px;
    height: 40px;
    padding: 6px 16px;
    background: linear-gradient(90deg, rgb(255, 235, 59) 0%, rgb(255, 249, 196) 100%);
    border-radius: 26px 5px 5px 26px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    color: rgb(51, 51, 51);
    cursor: pointer;
    a{
        font-size: 14px;
        font-weight: 600;
        margin: 0px 12px 0px 6px;
        color: black;
    }
    
`
const Coin = styled.div`
    width: 20px;
    img{
        display: block;
        width: 100%;
    }
    `
const Add = styled.div`
    border-radius: 50%;
    padding: 3px;
    background: rgb(249, 168, 37);
    color: rgb(255, 255, 255);
    font-size: 14px;
    width: 20px;
    img{
        display: block;
        width: 100%;
    }
`
const DownArrow = styled.div`
    margin-top: 6px;
    width: 10px;
    img{
    display: block;
    width: 100%;
}  
`


const NavHamberg= styled.div`
    cursor: pointer;
    display: block;
    width: 20px;
    max-height: 19px;
    margin: 6px 20px 0px 10px;

`

const Hamberg= styled.img`
width: 100%;
display: block;
`

export default NavDash