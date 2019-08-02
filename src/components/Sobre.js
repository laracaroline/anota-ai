import React from "react";
import "./Style.css";
function Sobre() {
  return (
    <div>
      <h1 className="tituloHome"> Sobre </h1>
      <p className="textoSobre">
        Este site tem como objetivo facilitar a vida de estagiários com o
        preenchimento do relatório de atividades diárias. <br />
        Mas como? Por meio de telas objetivas e simples, possibilita o cadastro
        de atividades informando também a descrição da atividade, data e carga
        horária cumprida. <br />
        Em breve estará disponível a função de gerar relatório completo em
        formato PDF! Se você é estagiário, precisa de um relatório diário sem
        complicações e fácil de utilizar, esse site foi feito para você!{" "}
      </p>
    </div>
  );
}

export default Sobre;
