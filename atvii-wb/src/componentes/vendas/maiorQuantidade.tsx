import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Cliente = {
  nome: string;
  quantidade: number;
};

type State = {
  clientes: Cliente[];
};

class MaiorQuantidade extends Component<{}, State> {
  state: State = {
    clientes: [
      { nome: "João da Silva", quantidade: 25 },
      { nome: "Maria Oliveira", quantidade: 22 },
      { nome: "Carlos Pereira", quantidade: 20 },
      { nome: "Ana Luiza Souza", quantidade: 19 },
      { nome: "Pedro Santos", quantidade: 17 },
      { nome: "Fernanda Costa", quantidade: 15 },
      { nome: "Roberto Lima", quantidade: 13 },
      { nome: "Juliana Martins", quantidade: 11 },
      { nome: "Lucas Almeida", quantidade: 9 },
      { nome: "Tatiane Rocha", quantidade: 8 }
    ],
  };

  render() {
    return (
      <div className="container">
        <h4 className="center-align purple-text text-darken-2">Maiores Consumidores em Quantidade</h4>
        <table className="highlight centered responsive-table z-depth-1">
          <thead className="purple lighten-4">
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.clientes.map((cliente, index) => (
              <tr key={index} className="hoverable">
                <td>{cliente.nome}</td>
                <td>{cliente.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MaiorQuantidade;
