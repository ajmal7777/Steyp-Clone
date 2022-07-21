import React, { useState } from "react";
import styled from "styled-components"
import Options from "../../modal/Options";
import {Link} from "react-router-dom"

function NavBar() {

    const [isTog,setTog] = useState(false)

  return (
    <NavSection>
        <Wrapper>
            <NavRight>
                <Heading>
                    <Logo>
                        <Img src={require("../../assets/images/15-09-2021/steyp-logo.svg").default}/>
                    </Logo>
                </Heading>
            </NavRight>
            <NavLeft>
               <Link to="/dashboards"> 
                <DashboardLink>Go to dashboard</DashboardLink>
                </Link>
                
                <NavHamberg  onClick={()=> setTog(true)}>
                    <Hamberg src={require("../../assets/images/15-09-2021/hamburg.7b560c07.svg").default}/>
                </NavHamberg>
            </NavLeft>
            <Options isTog={isTog} setTog={setTog} />
        </Wrapper>
    </NavSection>
  )
}

const NavSection = styled.section`
    width: 100%;
    height: 100px;
    background-color:#fff;
    position: fixed;
    z-index: 3;
    @media (max-width:480px){
        height: 70px;
    }
    `
const Wrapper = styled.section`
    width: 85%;
    height: 100%;
    max-width: 1325px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavRight= styled.div`
    width: 40%;
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
    width: 28%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width:768px){
        width:35%;
    }
    @media (max-width:480px){
        width:45%;
    }
    `
const DashboardLink= styled.a`
    cursor: pointer;
    color: #4eaf7c;
    border: 3px solid rgb(78, 175, 124);
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    transition: all 0.3s ease 0s;
    padding: 10px 40px;
    font-weight: 500;
    
    @media (max-width:1080px){
        padding:5px ;
        font-weight: 500;
        @media (max-width:480px){
            font-size: 10px;
            border: 2px solid rgb(78, 175, 124);
            font-weight: 150;
        }
    }
    @media (max-width:768px){
        width:100%   
        
    }
    @media (max-width:480px){
        font-size: 10px;
    }
    
    
    `
const NavHamberg= styled.div`
    margin-left: 30px;
    cursor: pointer;
    width: 30px;
`

const Hamberg= styled.img`
    width: 100%;
    display: block;
`
export default NavBar