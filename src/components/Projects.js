import React from "react";
import styled from "styled-components";

export default function Projects({showModal}){
  const repositorios = {
    projetoAlura: "../images/projeto1.png", 
    projetoToDoList: "../images/projeto2.png", 
    projetoContador: "../images/projeto3.png"
  }

  return(
    <div>
      <ProjectStyle>
        <h2>Projetos</h2>
        <ul>
          {Object.entries(repositorios).map((key, value) => {
            return(
              <li key={value}>
                <img src={key[1]} alt={key[0]} onClick={showModal} />
              </li>
            )
          })}
        </ul>
        </ProjectStyle>
    </div>
  )
}

const ProjectStyle = styled.section`
  background: #28408F;
  color: #EBEBFF;
  padding: 45px 30px;

  h2{
    font-size: 3.5rem;
  }

  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    
    list-style: none;
    
    padding: 0px;
    margin-top: 40px;
    
    img{
      width: 300px;
      cursor: pointer;
      transition: transform 0.5s;

      &:hover{
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
        transform: scale(1.05);
      }

      @media (max-width: 310px){
        width: 250px;
      }
    }
  }
`;