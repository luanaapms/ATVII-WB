import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Dado = {
  genero: string;
  nome: string;
  tipo: string;
  total: number;
};

type State = {
  dados: Dado[];
};

class ComprasGenero extends Component<{}, State> {
  state: State = {
    dados: [
      // Masculino
      { genero: "Masculino", nome: "Corte de cabelo masculino", tipo: "Serviço", total: 50 },
      { genero: "Masculino", nome: "Modelagem e corte de barba", tipo: "Serviço", total: 40 },
      { genero: "Masculino", nome: "Tratamento para quedas de cabelo", tipo: "Serviço", total: 35 },
      { genero: "Masculino", nome: "Massagem relaxante", tipo: "Serviço", total: 30 },
      { genero: "Masculino", nome: "Shampoo Anticaspa Masculino", tipo: "Produto", total: 70 },
      { genero: "Masculino", nome: "Pomada Modeladora Masculina", tipo: "Produto", total: 55 },
      { genero: "Masculino", nome: "Gel Fixador Masculino", tipo: "Produto", total: 60 },
      { genero: "Masculino", nome: "Kit Shampoo e Condicionador Masculino", tipo: "Produto", total: 45 },
      { genero: "Masculino", nome: "Tônico Capilar Antiqueda Masculino", tipo: "Produto", total: 30 },
      { genero: "Masculino", nome: "Spray Texturizador Masculino", tipo: "Produto", total: 25 },
      { genero: "Masculino", nome: "Creme Alisante Masculino", tipo: "Produto", total: 20 },

      // Feminino
      { genero: "Feminino", nome: "Manicure", tipo: "Serviço", total: 60 },
      { genero: "Feminino", nome: "Pedicure", tipo: "Serviço", total: 55 },
      { genero: "Feminino", nome: "Design de sobrancelhas", tipo: "Serviço", total: 50 },
      { genero: "Feminino", nome: "Pintura de cabelo", tipo: "Serviço", total: 40 },
      { genero: "Feminino", nome: "Maquiagem para eventos", tipo: "Serviço", total: 25 },
      { genero: "Feminino", nome: "Limpeza de pele", tipo: "Serviço", total: 20 },
      { genero: "Feminino", nome: "Máscara de Hidratação Feminina", tipo: "Produto", total: 65 },
      { genero: "Feminino", nome: "Creme para Pentear Feminino", tipo: "Produto", total: 70 },
      { genero: "Feminino", nome: "Spray Finalizador Feminino", tipo: "Produto", total: 45 },
      { genero: "Feminino", nome: "Máscara Matizadora Roxa Feminina", tipo: "Produto", total: 35 },
      { genero: "Feminino", nome: "Mousse Volumizador Feminino", tipo: "Produto", total: 30 },
      { genero: "Feminino", nome: "Finalizador Antifrizz Feminino", tipo: "Produto", total: 50 }
    ],
  };

  render() {
    return (
      <div className="container">
        <h4 className="center-align purple-text text-darken-2">Consumidos por Gênero</h4>
        <table className="highlight centered responsive-table z-depth-1">
          <thead className="purple lighten-4">
            <tr>
              <th>Gênero</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dados.map((item, index) => (
              <tr key={index} className="hoverable">
                <td>{item.genero}</td>
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

export default ComprasGenero;
