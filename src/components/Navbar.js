import React from 'react';
import './Style.css'

export default class Navbar extends React.Component{
  render(){
    return(
        <ul>
            <li> <h5> anota.aí</h5></li>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">Nova Atividade</a></li>
            <li><a href="contact.asp">Minhas Atividades</a></li>
            <li><a href="about.asp">Sobre</a></li>
        </ul>
    )
  }
};