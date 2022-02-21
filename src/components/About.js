import React from "react";
import styled from "styled-components";

export default function About(){
  const Passatempo = {
    Jogos: "/icons/_videogame.png",
    Música: "/icons/_headphones.png",
    Animes: "/icons/_tv.png",
    Esportes: "../icons/_sports.png"
  }

  return(
    <div>
      <AboutStyle>
      <h2>Sobre mim</h2>
        <p>Estudo desenvolvimento web já faz quase 2 anos, minha curiosidade e vontade de aprender só tem crescido desde então. Procuro sempre estar bem informado sobre as mudanças que acontecem no mundo da tecnologia e um dia espero ajudar alguém com os códigos que eu escrevo.</p>

        <div>
          <span>Passatempo</span>
          <ul>
            {Object.entries(Passatempo).map((key, value) => {
              return (
                <li key={value}>
                  <img src={key[1]} alt={key[0]}/>
                  <span>{key[0]}</span>
                </li>
              )
            })}
            
          </ul>
        </div>
      </AboutStyle>
    </div>
  )
}

const AboutStyle = styled.section`
  background: #EBEBFF;
  padding: 45px 30px;

  h2{
    font-size: 3.5rem;
    color: #150F43;
  }

  p{
    font-size: 2.0rem;
    line-height: 3.0rem;
    text-align: center;
    color: #43464b;
    max-width: 80vw;
    margin: 0 auto;
  }

  div {
    text-align: center;
    margin-top: 40px;
    
    > span{
      text-align: center;
      font-size: 3.0rem;
      color: #FF4433;
    }
    
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;
      list-style: none;
      margin-top: 15px;
      
      li{
        font-size: 1.5rem;
        display: flex;
        gap: 5px;
        align-items: center;
        color: #43464b;
  
        img{
          width: 30px;
        }
      }
    }
  }
`;