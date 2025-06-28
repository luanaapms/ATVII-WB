import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Dado = {
  nome: string;
  tipo: string;
  total: number;
};

type State = {
  dados: Dado[];
};

class Geral extends Component<{}, State> {
  state: State = {
    dados: [
      { nome: "Corte de cabelo masculino", tipo: "Serviço", total: 50 },
      { nome: "Corte de cabelo feminino", tipo: "Serviço", total: 45 },
      { nome: "Manicure", tipo: "Serviço", total: 60 },
      { nome: "Pedicure", tipo: "Serviço", total: 55 },
      { nome: "Shampoo Anticaspa Masculino", tipo: "Produto", total: 70 },
      { nome: "Condicionador Liso dos Sonhos", tipo: "Produto", total: 65 },
      { nome: "Pomada Modeladora Masculina", tipo: "Produto", total: 55 },
      { nome: "Máscara de Hidratação Feminina", tipo: "Produto", total: 50 },
      { nome: "Kit Shampoo e Condicionador Masculino", tipo: "Produto", total: 45 },
      { nome: "Creme para Pentear Feminino", tipo: "Produto", total: 40 }
    ],
  };

  render() {
    return (
      <div className="container">
        <h4 className="center-align purple-text text-darken-2">Mais Consumidos no Geral</h4>
        <table className="highlight centered responsive-table z-depth-1">
          <thead className="purple lighten-4">
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Total Consumido</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dados.map((item, index) => (
              <tr key={index} className="hoverable">
                <td>{item.nome}</td>
                <td>{item.tipo}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Geral;
