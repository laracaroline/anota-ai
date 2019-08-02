import React from "react";
import "./Style.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
export default class NovaAtividade extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangeCargaHoraria = this.onChangeCargaHoraria.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    
    this.state = this.props.location.state ? {
      redirect: false,
      id: this.props.location.state.id || "",
      nome: this.props.location.state.nome || "",
      descricao: this.props.location.state.descricao || "",
      data: this.props.location.state.data || "",
      cargaHoraria: this.props.location.state.cargaHoraria || ""
    } : {
      redirect: false,
      id: "",
      nome: "",
      descricao: "",
      data: "",
      cargaHoraria: ""
    };
    
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onChangeDescricao(e) {
    this.setState({
      descricao: e.target.value
    });
  }

  onChangeData(e) {
    this.setState({
      data: e.target.value
    });
  }

  onChangeCargaHoraria(e) {
    this.setState({
      cargaHoraria: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.id) {
      const obj = {
        nome: this.state.nome,
        descricao: this.state.descricao,
        data: this.state.data,
        cargaHoraria: this.state.cargaHoraria
      };
      axios
        .post("http://localhost:3003/inserir", obj)
        .then(response => {
          this.resp = response;
          alert("Tarefa Inserida");
          this.setState({ redirect: true });
        })
        .catch(e => {
          console.error(e);
        });

      this.setState({
        nome: "",
        descricao: "",
        data: "",
        cargaHoraria: ""
      });
    }else{
      const id = this.props.location.state.id;
      const obj = {
        nome: this.state.nome,
        descricao: this.state.descricao,
        data: this.state.data,
        cargaHoraria: this.state.cargaHoraria
      };
      axios.put("http://localhost:3003/editar/" + id, obj)
        .then(response => {
          this.resp = response;
          alert("Edição concluída!");
          this.setState({ redirect: true });
        })
        .catch(e => {
          console.error(e);
        });
      this.setState({
        nome: "",
        descricao: "",
        data: "",
        cargaHoraria: ""
      });

    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/minhasAtividades" />;
    }
    return (
      <div>
        <h1 className="titulo"> Nova Atividade </h1>
        <form className="formulario" onSubmit={this.onSubmit} method="post">
          <label className="labelForm">Nome</label>
          <input
            className="inputForm"
            type="text"
            value={this.state.nome}
            onChange={this.onChangeNome}
            maxlength="99"
            required
          />
          <br/>
          <label className="labelForm">Descrição </label>
          <textarea
            value={this.state.descricao}
            onChange={this.onChangeDescricao}
            maxlength="299"
            required
          />
          <br />
          <label className="labelForm">Carga Horária </label>
          <input
            className="inputForm cargaData"
            type="time"
            value={this.state.cargaHoraria}
            onChange={this.onChangeCargaHoraria}
            required
          />
          <br />
          <label className="labelForm">Data</label>
          <input
            className="inputForm cargaData"
            type="date"
            value={this.state.data}
            onChange={this.onChangeData}
            required
          />
          <input className="inputSubmit" type="submit" />
        </form>
      </div>
    );
  }
}
