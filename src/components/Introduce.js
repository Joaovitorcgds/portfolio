import React from "react";
import styled from "styled-components";

export default function Introduce(){
  return(
    <div>
      <IntroduceStyle>
        <h1>
          Olá, me chamo <span>João</span> e sou desenvolvedor <span>front-end</span>
        </h1>
        <img src="/images/me.png" alt="foto do João"/>
      </IntroduceStyle>
    </div>
  )
}

const IntroduceStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  background: #150F43;
  padding: 80px 30px 0px 30px;
  

  h1{
    width: 500px;
    margin: 0;
    font-size: 4.5rem;
    color: #FBFBFF;

    span{
      color: #FF4433;
    }
  }

  img{
    width: 300px; 
  }
  
  @media (max-width: 620px){
    justify-content: center;
    height: 100vh;

    img{ 
      display: none;
    }
  }

  @media (max-width: 350px){
    text-align: center;
  }
`;