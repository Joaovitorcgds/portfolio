import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Modal from "./components/Modal";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [valorDaImagem, setValorDaImagem] = useState("");

  function onHideModal(e){
    let alt = e.target.alt;
    console.log(alt)
    setValorDaImagem(alt);
    setShowModal(true);
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <Introduce/>
        <About id="about"/>
        <Modal 
          id="modal" 
          setShowModal={setShowModal}
          showModal={showModal}
          valorDaImagem ={valorDaImagem}
        />
        <Projects id= "projects" showModal={(e) => onHideModal(e)}/>
        <Skills id= "skills"/>
        <Contact id= "contact"/>
      </main>
    </div>
  );
}

