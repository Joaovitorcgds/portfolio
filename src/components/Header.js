import React from "react"
import styled from "styled-components"


export default function Header(){
  function scrollToAnimation(e){
    e.preventDefault()
    const nav = document.querySelector(".nav")
    const element = e.target
    const id = element.getAttribute("href")
    const to = document.querySelector(id).offsetTop
    window.scroll({
      top: to - 20,
      behavior: "smooth"
    })
    nav.classList.remove("active")
  }
  function toggleMenu(){
    const nav = document.querySelector(".nav")
    nav.classList.toggle("active")
  }

  return (
    <div>
      <HeaderStyle>
        <span>João Vitor Costa</span>
        <nav className="nav">
          <button onClick={() => toggleMenu()} className="btnMenu">Menu</button>
          <ul className="menu">
            <li>
              <a href="#about" onClick={scrollToAnimation}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#projects" onClick={scrollToAnimation}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#skills" onClick={scrollToAnimation}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={scrollToAnimation}>
                Contato
              </a>
            </li>
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

  .btnMenu{
      display: none;
    }

  @media (max-width: 500px) { 
    .btnMenu{
      display: block;
      background: transparent;
      color: #FBFBFF;
      border: 1px solid #FBFBFF;
      padding: 5px 10px;
      font-weight: 700;
      transition: .6s;
    }


    .menu{
      display: block;
      position: absolute;
      width: 100%;
      top: 65px;
      right: 0px;
      height: 0px;
      transition: .6s;
      visibility: hidden;
      overflow-y: hidden;
      background: #150F43;
      z-index: 1000;
    }

    .nav.active .menu{
      height: calc(100vh - 65px);
      visibility: visible;
      overflow-y: auto;
    }

    .nav.active .btnMenu{
      /* border: 1px solid #FF4433; */
      background: #FBFBFF;
      color: #150F43;
    }

    .menu li{
      padding: 1rem 0px;
      margin: 0px 2rem;
      border-bottom: 1px solid rgba(255,255,255,0.2);

      a{
        font-size: 2rem;
      }
    }
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