import React, {useState} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [valorDaImagem, setValorDaImagem] = useState("");

  function pegarEMudar(e){
    const alt = e.target.alt;
    setValorDaImagem(alt);
    setShowModal(true);
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <Introduce/>
        <About/>
        <Projects showModal={(e) => pegarEMudar(e)}/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
