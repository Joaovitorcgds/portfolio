import React from "react"
import styled from "styled-components"


export default function Header(){
  return (
    <div>
      <HeaderStyle>
        <span>João Vitor Costa</span>
        <nav>
          <ul>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </HeaderStyle>
    </div>
  )
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 35px;

  position: fixed;
  z-index: 1;
  width: 100%;

  background: #150F43;
  color: #FBFBFF;
  
  span{
    font-size: 2.4rem;
    font-weight: 600;
  }

  ul{
    display: flex;
    gap: 15px;
    list-style: none;
    font-weight: 600;
    
    li{
      font-size: 1.6rem;
      cursor: pointer;
      transition: color 0.5s;
      
      &:hover{
        color: #FF4433;
      }
    }
  }

  @media (max-width: 350px){
    padding: 20px 10px;
  }

`;