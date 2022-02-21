import React from "react";
import styled from "styled-components";

export default function Contact(){
  const midia = {
    instagram: ["../icons/instagram.png", "https://www.instagram.com/joaovitorcgds/"],
    github: ["../icons/github.png", "https://github.com/Joaovitorcgds"],
    linkedin: ["../icons/linkedin.png", "https://www.linkedin.com/in/joaovitorcgds/"],
    whatsapp: ["../icons/whatsapp.png", "https://wa.me/55021975875130"]
  }

  return(
    <div >
      <ContatoStyle>
        <h1>Contato</h1>
        <p>Se curtiu meus projetos, me mande uma mensagem em uma dessas redes sociais e responderei assim que possível.</p>
        <ul>
          {Object.entries(midia).map((key, value) => {
            const secKey = key[1];
            return(
              <li key={value}>
                <a href={secKey[1]} target="_blank" rel="noreferrer">
                  <img src={secKey[0]} alt={key[0]}/>
                </a>
              </li>
            )
          })}
        </ul>
      </ContatoStyle>
    </div>
  )
}

export const ContatoStyle = styled.section`
  background: #150F43;
  color: white;
  padding: 30px;

  h1{
    font-size: 3.5rem;
  }

  p{
    font-size: 2.0rem;
    line-height: 3.0rem;
    text-align: center;
    max-width: 80vw;
    margin: 0 auto;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    list-style: none;
    margin-top: 30px;
    
    li{
      font-size: 1.5rem;
      display: flex;
      gap: 5px;
      align-items: center;
      color: #43464b;
      transition: transform 0.5s;
    
      &:hover{
      transform: scale(1.2);
      }

      img{
        width: 30px;
      }
    }
  }
`;