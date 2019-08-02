import React from "react";
import "./Style.css";
import { Redirect } from "react-router-dom";

export default class Atividade extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      id: this.props.location.state.id,
      nome: this.props.location.state.nome,
      descricao: this.props.location.state.descricao,
      data: this.props.location.state.data,
      cargaHoraria: this.props.location.state.cargaHoraria
    }
  }

  voltar(e){
    e.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    if(this.state.redirect){
      return <Redirect to="/minhasAtividades"/>;
    }
    return (
      <div>
          <h1 className="titulo"> Atividade </h1>
          <div className="divAtividade">
          <p className="rotuloAtividade">Nome: <p className="dadoAtividade">{this.state.nome}</p></p>
          <p className="rotuloAtividade">Descrição: <p className="dadoAtividade">{this.state.descricao}</p></p>
          <p className="rotuloAtividade">Carga Horária: <p className="dadoAtividade">{this.state.cargaHoraria}</p></p>
          <p className="rotuloAtividade">Data: <p className="dadoAtividade">{(this.state.data).split("-").reverse().join("/")}</p></p>
          <button className="voltarBtn" onClick={e => this.voltar(e)}>Voltar</button>
          </div>
      </div>
    );
  }
}
