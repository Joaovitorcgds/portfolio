import React from "react";
import styled from "styled-components";
import { descricaoAluracord, descricaoToDoList, descricaoCounterDown } from "../objects/modalObj";


export default function Modal({id, setShowModal, showModal, valorDaImagem}){
  function hideModal(e){
    let click = e.target.id;
    if(click === "bgModal"){
      setShowModal(false)
    }
  }

  function showProjeto(descricao){
    return(
      <>
        <div>
          <h1>{descricao.titulo}</h1>
          <p>{descricao.descricao}</p>
          <ul>
            {Object.entries(descricao.tecnologias)
            .map((key, value) => {
              return(
              <li key={value}>
                <img src={key[1]} alt={key[0]}/>
              </li>)
            })}
          </ul>
        </div>
        <img 
          src={descricao.imagem.src}
          alt={descricao.imagem.alt}/>
      </>
    )
  }

  return(  
    <div id={id} onClick={(e) => hideModal(e)}>
      {showModal ? 
        <StyledModalOverlay id="bgModal">
          <StyledModal>
            <StyledModalBody>
              {valorDaImagem === "projetoAlura" ? showProjeto(descricaoAluracord):
               valorDaImagem === "projetoToDoList" ? showProjeto(descricaoToDoList):
               showProjeto(descricaoCounterDown)
              }
            </StyledModalBody>
          </StyledModal>
        </StyledModalOverlay>
      : null}
    </div>
  )
}



const StyledModalBody = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
   
  div{
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
  } 

  h1{
    font-size: 3.2rem;
    color: #150F43;
    margin: 0;
  }

  p{
    font-size: 2.0rem;
    line-height: 3.0rem;
    color: #43464b;
    margin: 0;
  }

  ul{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    list-style: none;

    li{
      transition: transform 0.5s;

      &:hover{
        transform: scale(1.2);
      }

      img{
        width: 30px;
      }
    }
  }

  img{
    width: 300px;
  }

  @media (max-width: 770px){
    display: flex;
    align-items: center ;
    flex-direction: column;
    margin: 0;
    row-gap: 35px; 
    h1{
    font-size: 35px;
    }
    p{
    font-size: 20px;
    line-height: 30px;
    }
  }

  @media (max-width: 520px){
    h1{
    font-size: 25px;
    }
    p{
    font-size: 15px;
    line-height: 25px;
    }
    img{
      width: 250px;
    }
  }
`;

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: #EBEBFF;
  width: 750px;
  height: 500px;
  border-radius: 15px;
  padding: 15px;

  @media (max-width: 770px){
    width: 500px;
    height: 80vh;
  }

  @media (max-width: 520px){
    width: 280px;
  }
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;