import React from 'react';
import './Style.css';

export default class Navbar extends React.Component{
  render(){
    return(
        <ul>
            <li> <h5> anota.aí</h5></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/novaAtividade">Nova Atividade</a></li>
            <li><a href="/minhasAtividades">Minhas Atividades</a></li>
            <li><a href="/sobre">Sobre</a></li>
        </ul>
    )
  }
};