import React from "react";
import "./Style.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class MinhasAtividades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atividades: [],
      acao: '',
      redirect: false,
      id_atividade: "",
      nome_atividade: "",
      descricao_atividade: "",
      data_atividade: "",
      cargaHoraria_atividade: ""
    };
  }

  componentDidMount() {
    this.listar();
  }

  listar() {
    axios.get("http://localhost:3003/listar").then(res => {
      const atividades = res.data;
      this.setState({ atividades });
    });
  }

  remover(id) {
    axios.delete("http://localhost:3003/delete/" + id).then(res => {
      console.log(res);
      console.log(res.data);
    });
    alert("Tarefa removida!");
  }
  editar(e, id) {
    e.preventDefault();
    axios
      .get("http://localhost:3003/atividade/" + id)
      .then(response => {
        const atividades = response.data[0];
        const dataFormat = atividades.data_atividade.split("T")[0];
        this.setState({
          redirect: true,
          acao: 'editar',
          id_atividade: atividades.id_atividade,
          nome_atividade: atividades.nome_atividade,
          descricao_atividade: atividades.descricao_atividade,
          data_atividade: dataFormat,
          cargaHoraria_atividade: atividades.carga_horaria_atividade
        });
        console.log(response.data);
        console.log(response.status);
      })
      .catch(erro => console.log(erro));
  }

  detalhar(e, id) {
    e.preventDefault();
    axios
      .get("http://localhost:3003/atividade/" + id)
      .then(response => {
        const atividades = response.data[0];
        const dataFormat = atividades.data_atividade.split("T")[0];
        this.setState({
          redirect: true,
          acao: 'detalhar',
          id_atividade: atividades.id_atividade,
          nome_atividade: atividades.nome_atividade,
          descricao_atividade: atividades.descricao_atividade,
          data_atividade: dataFormat,
          cargaHoraria_atividade: atividades.carga_horaria_atividade
        });
        console.log(response.data);
        console.log(response.status);
      })
      .catch(erro => console.log(erro));
  }

  render() {
    const { redirect, acao } = this.state;
    if (redirect && acao == 'editar') {
      return (
        <Redirect
          to={{
            pathname: "/novaAtividade",
            state: {
              id: this.state.id_atividade,
              nome: this.state.nome_atividade,
              descricao: this.state.descricao_atividade,
              data: this.state.data_atividade,
              cargaHoraria: this.state.cargaHoraria_atividade
            }
          }}
        />
      );
    }else if(redirect && acao == 'detalhar'){
      return (
        <Redirect 
        to={{
          pathname: "/atividade",
          state: {
            id: this.state.id_atividade,
            nome: this.state.nome_atividade,
            descricao: this.state.descricao_atividade,
            data: this.state.data_atividade,
            cargaHoraria: this.state.cargaHoraria_atividade
          }
        }} />
      );
    }

    return (
      <div>
        <form>
          <h1 className="titulo"> Minhas Atividades </h1>
          <ul className="ulListaAtividade">
            {this.state.atividades.map(atividade => (
                  <li className="liListaAtividade">
                      <a className="aListaAtividade">{atividade.nome_atividade}</a>
                    <span>
                    <input
                        className="verMaisBtn"
                        type="submit"
                        value="Detalhes"
                        onClick={e => this.detalhar(e, atividade.id_atividade)}
                      />
                      <input
                        className="editarBtn"
                        type="submit"
                        value="Editar"
                        onClick={e => this.editar(e, atividade.id_atividade)}
                      />
                      <input
                        className="excluirBtn"
                        type="submit"
                        value="Excluir"
                        onClick={e => this.remover(atividade.id_atividade)}
                      />
                    </span>
                  </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
