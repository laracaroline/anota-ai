import React from 'react';
import './Style.css';

export default class Navbar extends React.Component{
  render(){
    return(
        <ul className="ulNav">
            <li className="liNav"> <h5 className="h5Nav"> anota.aí</h5></li>
            <li className="liNav"><a className="aNav" href="/home">Home</a></li>
            <li className="liNav"><a className="aNav" href="/novaAtividade">Nova Atividade</a></li>
            <li className="liNav"><a className="aNav" href="/minhasAtividades">Minhas Atividades</a></li>
            <li className="liNav"><a className="aNav" href="/sobre">Sobre</a></li>
        </ul>
    )
  }
};