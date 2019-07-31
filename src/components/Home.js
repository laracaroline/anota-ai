import React from 'react';
import './Style.css';
import Pagina from './Pagina';
import Navbar from './Navbar';
import { withRouter } from "react-router-dom";

export class Home extends React.Component{
  render(){
    return(
      <div>
          <h1 className="tituloHome"> Olá, Estagiária!</h1>
          <p className="textoHome"> Anote suas atividades e veja-as sempre que quiser!</p>
      </div>
      
    )
  }
};


export default withRouter(Home);