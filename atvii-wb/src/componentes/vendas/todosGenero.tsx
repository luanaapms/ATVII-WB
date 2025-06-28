import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Cliente = {
  nome: string;
  nomeSocial: string;
  genero: string;
  cpf: string;
};

type State = {
  clientes: Cliente[];
};

class ListarPorGenero extends Component<{}, State> {
  state: State = {
    clientes: [
      { nome: 'João da Silva', nomeSocial: 'João', genero: 'Masculino', cpf: '123.456.789-00' },
      { nome: 'Maria Oliveira', nomeSocial: 'Maria', genero: 'Feminino', cpf: '987.654.321-00' },
      { nome: 'Carlos Pereira', nomeSocial: 'Carlos', genero: 'Masculino', cpf: '456.789.123-00' },
      { nome: 'Ana Luiza Souza', nomeSocial: 'Ana', genero: 'Feminino', cpf: '321.654.987-00' },
      { nome: 'Pedro Santos', nomeSocial: 'Pedro', genero: 'Masculino', cpf: '654.321.987-00' },
      { nome: 'Fernanda Costa', nomeSocial: 'Fernanda', genero: 'Feminino', cpf: '789.123.456-00' },
      { nome: 'Roberto Lima', nomeSocial: 'Roberto', genero: 'Masculino', cpf: '234.567.890-00' },
      { nome: 'Juliana Martins', nomeSocial: 'Juliana', genero: 'Feminino', cpf: '890.123.456-00' },
      { nome: 'Lucas Almeida', nomeSocial: 'Lucas', genero: 'Masculino', cpf: '567.890.123-00' },
      { nome: 'Tatiane Rocha', nomeSocial: 'Tatiane', genero: 'Feminino', cpf: '345.678.901-00' },
      { nome: 'Marcos Vinícius', nomeSocial: 'Marcos', genero: 'Masculino', cpf: '111.222.333-44' },
      { nome: 'Patrícia Gomes', nomeSocial: 'Patrícia', genero: 'Feminino', cpf: '555.666.777-88' },
      { nome: 'Ricardo Fernandes', nomeSocial: 'Ricardo', genero: 'Masculino', cpf: '999.888.777-66' },
      { nome: 'Amanda Vieira', nomeSocial: 'Amanda', genero: 'Feminino', cpf: '444.333.222-11' },
      { nome: 'Diego Rodrigues', nomeSocial: 'Diego', genero: 'Masculino', cpf: '777.555.333-22' },
      { nome: 'Carla Mendes', nomeSocial: 'Carla', genero: 'Feminino', cpf: '666.444.222-11' },
      { nome: 'Felipe Santos', nomeSocial: 'Felipe', genero: 'Masculino', cpf: '333.222.111-44' },
      { nome: 'Letícia Araújo', nomeSocial: 'Letícia', genero: 'Feminino', cpf: '222.111.000-33' },
      { nome: 'Eduardo Almeida', nomeSocial: 'Eduardo', genero: 'Masculino', cpf: '888.777.666-55' },
      { nome: 'Bruna Castro', nomeSocial: 'Bruna', genero: 'Feminino', cpf: '555.444.333-22' }
    ],
  };

  renderTabela(titulo: string, lista: Cliente[]) {
    return (
      <div className="section">
        <h5 className="purple-text text-darken-2">{titulo}</h5>
        <table className="striped highlight responsive-table">
          <thead className="purple lighten-4">
            <tr>
              <th>Nome</th>
              <th>Nome Social</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((cliente, index) => (
              <tr key={index} className="hoverable">
                <td>{cliente.nome}</td>
                <td>{cliente.nomeSocial}</td>
                <td>{cliente.cpf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const masculinos = this.state.clientes.filter(c => c.genero === 'Masculino');
    const femininos = this.state.clientes.filter(c => c.genero === 'Feminino');

    return (
      <div className="container">
        <h4 className="center-align purple-text text-darken-3">Lista dos Clientes por Gênero</h4>
        {this.renderTabela("Clientes Masculinos", masculinos)}
        {this.renderTabela("Clientes Femininos", femininos)}
      </div>
    );
  }
}

export default ListarPorGenero;
