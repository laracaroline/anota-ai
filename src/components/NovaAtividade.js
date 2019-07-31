import React from "react";
import "./Style.css";

export default class NovaAtividade extends React.Component {
  render() {
    return (
      <div>
        <h1 className="titulo"> Nova Atividade </h1>
        <form>
            <label className="labelForm">Nome </label>
            <input className="inputForm" type="text"/>
            <br/>
            <label className="labelForm">Carga Horária </label>
            <input className="inputForm" type="time"/>
            <br/>
            <label className="labelForm">Data</label>
            <input className="inputForm" type="date"/>
            <input className="inputSubmit"type="submit"></input>
        </form>
      </div>
    );
  }
}
