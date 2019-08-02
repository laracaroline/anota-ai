import React from "react";
import "./Style.css";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NovaAtividade from "./NovaAtividade";
import MinhasAtividades from "./MinhasAtividades";
import Atividade from "./Atividade";
import Sobre from "./Sobre";

export default class Pagina extends React.Component {
  render() {
    return (
      <div className="divPagina">
        <div className="divPaginaConteudo">
          <BrowserRouter>
                <Switch>
                  <Route path="/" exact={true} component={Home} />
                  <Route path="/home" exact={true} component={Home} />
                  <Route path="/novaAtividade" exact={true} component={NovaAtividade} />
                  <Route path="/minhasAtividades" exact={true} component={MinhasAtividades} />
                  <Route path="/atividade" exact={true} component={Atividade} />
                  <Route path="/sobre" exact={true} component={Sobre} />
                </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
