import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function TechSchool() {
  return (
    <FullTech>
        <TechNav>
            <h3>Tech Schooling</h3>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/learning">Learning</Link>
                    <Link to="/practice">Practices</Link>
                    <Link to="/workshops">Workshops</Link>
                    <Link to="/assesments">Assessments</Link>
                    <Link to="/newcontent">New Content</Link>
                    <Link to="/certification">Certification</Link>
                </li>
           </ul>
        </TechNav>
    </FullTech>
  )
}

const FullTech = styled.section`
    margin-top: 70px;
    margin-left: 80px;
    width: 94%;
`
const TechNav= styled.div`
    padding-top: 30px ;
    h3{
        text-transform: capitalize;
        font-family: goridita_medium;
        font-size: 23px;
        margin-bottom: 19px;
    }
    ul{
        display: flex;
        margin-bottom: 35px;
        border-bottom: 1px solid rgb(232, 232, 232);
        li{
            a{

                font-family: goridita_regular;
                min-width: fit-content;
                display: inline-block;
                color: rgb(113, 113, 113);
                font-size: 15px;
                margin-right: 32px;
                padding-bottom: 12px;
            }
        }
    }
    
`

export default TechSchool