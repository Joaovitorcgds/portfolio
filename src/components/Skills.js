import React from "react";
import styled from "styled-components";

export default function Skills(){
  const habilidades = {
    HTML: "/images/html5.png",
    CSS: "/images/css3.png",
    JavaScript: "/images/javascript.png",
    React: "/images/react.png",
    Git:"/images/git.png",
    NextJs: "/images/nextjs.png"
  }

  return(
    <div>
      <SkillsStyle>
        <h2>Skills</h2>
        <ul>
          {Object.entries(habilidades).map((key, value) => {
            return(
            <li key={value}>
              <img src={key[1]} alt={key[0]}/>
              <span>{key[0]}</span>
            </li>)
          })}
        </ul>
      </SkillsStyle>
    </div>
  )
}

const SkillsStyle = styled.section`
  color: #EBEBFF;
  padding: 45px 30px;
  
  h2{
    font-size: 3.5rem;
    color: #150F43;
  }

  ul{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  
    align-items: center;
    margin: 0 auto;
    max-width: 700px;
    gap: 25px 0px;
    
    list-style: none;
    
    padding: 0px;
    margin-top: 40px;
    
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 15px;
      margin: 0 auto;
      transition: transform 0.5s;
      
      &:hover{
        transform: scale(1.2);
      }

      img{
        width: 80px;
      }

      span{
        font-size: 2.0rem;
        font-weight: 600;
        color: #43464b;
      }
    }
  }
`;