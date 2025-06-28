import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Cliente = {
  nome: string;
  quantidade: number;
};

type State = {
  clientes: Cliente[];
};

class MenorQuantidade extends Component<{}, State> {
  state: State = {
    clientes: [
      { nome: "Bruna Castro", quantidade: 1 },
      { nome: "Eduardo Almeida", quantidade: 2 },
      { nome: "Letícia Araújo", quantidade: 3 },
      { nome: "Felipe Santos", quantidade: 4 },
      { nome: "Carla Mendes", quantidade: 5 },
      { nome: "Diego Rodrigues", quantidade: 6 },
      { nome: "Amanda Vieira", quantidade: 7 },
      { nome: "Ricardo Fernandes", quantidade: 8 },
      { nome: "Patrícia Gomes", quantidade: 9 },
      { nome: "Marcos Vinícius", quantidade: 10 }
    ],
  };

  render() {
    return (
      <div className="container">
        <h4 className="center-align purple-text text-darken-2">Menores Consumidores em Quantidade</h4>
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

export default MenorQuantidade;
