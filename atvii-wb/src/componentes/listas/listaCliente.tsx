import React, { Component, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import FormularioAtualizarCliente from "../formularios/atualizaCliente";
import FormularioExcluirCliente from "../formularios/excluiCliente";

interface Cliente {
  nome: string;
  nomeSocial: string;
  genero: string;
  cpf: string;
  rgs: string[];
  telefones: string[];
}

interface Props {
  tema?: string;
  clientes: Cliente[];
  setClientes: (clientes: Cliente[]) => void;
}

interface State {
  busca: string;
  clienteEditando: Cliente | null;
  cpfParaExcluir: string | null;
  paginaAtual: number;
}

class ListaCliente extends Component<Props, State> {
  clientesPorPagina = 5;

  state: State = {
    busca: "",
    clienteEditando: null,
    cpfParaExcluir: null,
    paginaAtual: 1,
  };

  handleBuscaChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ busca: e.target.value, paginaAtual: 1 });
  };

  atualizarCliente = (clienteAtualizado: Cliente) => {
    const { clientes, setClientes } = this.props;
    const novosClientes = clientes.map(c =>
      c.cpf === clienteAtualizado.cpf ? clienteAtualizado : c
    );
    setClientes(novosClientes);
    this.setState({ clienteEditando: null });
  };

  excluirCliente = (cpf: string) => {
    const { clientes, setClientes } = this.props;
    const novosClientes = clientes.filter(c => c.cpf !== cpf);
    setClientes(novosClientes);
    this.setState({ cpfParaExcluir: null });
  };

  irParaPagina = (num: number) => {
    const totalPaginas = Math.ceil(
      this.filtrarClientes().length / this.clientesPorPagina
    );
    if (num < 1) num = 1;
    else if (num > totalPaginas) num = totalPaginas;
    this.setState({ paginaAtual: num });
  };

  filtrarClientes() {
    const { clientes } = this.props;
    const { busca } = this.state;
    return clientes.filter(cliente =>
      cliente.cpf.toLowerCase().includes(busca.toLowerCase())
    );
  }

  render() {
    const { tema } = this.props;
    const { busca, clienteEditando, cpfParaExcluir, paginaAtual } = this.state;

    const clientesFiltrados = this.filtrarClientes();

    const indexUltimoCliente = paginaAtual * this.clientesPorPagina;
    const indexPrimeiroCliente = indexUltimoCliente - this.clientesPorPagina;
    const clientesPaginaAtual = clientesFiltrados.slice(
      indexPrimeiroCliente,
      indexUltimoCliente
    );
    const totalPaginas = Math.ceil(clientesFiltrados.length / this.clientesPorPagina);

    return (
      <div className="container">
        <h4 className="center-align">Lista de Clientes</h4>

        <div className="input-field">
          <input
            type="text"
            placeholder="Buscar por CPF"
            value={busca}
            onChange={this.handleBuscaChange}
          />
        </div>

        {clienteEditando && (
          <FormularioAtualizarCliente
            tema={tema || ""}
            cliente={clienteEditando}
            onAtualizar={this.atualizarCliente}
            onCancelar={() => this.setState({ clienteEditando: null })}
          />
        )}

        {cpfParaExcluir && (
          <FormularioExcluirCliente
            tema={tema || ""}
            cpf={cpfParaExcluir}
            onExcluir={this.excluirCliente}
            onCancelar={() => this.setState({ cpfParaExcluir: null })}
          />
        )}

        {clientesPaginaAtual.length > 0 ? (
          <>
            <ul className="collection">
              {clientesPaginaAtual.map((cliente, index) => (
                <li key={indexPrimeiroCliente + index} className="collection-item">
                  <strong>Nome:</strong> {cliente.nome}
                  <br />
                  <strong>Nome Social:</strong> {cliente.nomeSocial}
                  <br />
                  <strong>Gênero:</strong> {cliente.genero}
                  <br />
                  <strong>CPF:</strong> {cliente.cpf}
                  <br />
                  <strong>RG(s):</strong> {cliente.rgs.join(", ")}
                  <br />
                  <strong>Telefone(s):</strong> {cliente.telefones.join(", ")}
                  <br />
                  <button
                    className="btn green lighten-2"
                    onClick={() => this.setState({ clienteEditando: cliente })}
                  >
                    Atualizar
                  </button>
                  <button
                    className="btn purple darken-2"
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.setState({ cpfParaExcluir: cliente.cpf })}
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>

            <div className="center-align" style={{ marginTop: "20px" }}>
              <button
                className="btn purple lighten-4"
                disabled={paginaAtual === 1}
                onClick={() => this.irParaPagina(paginaAtual - 1)}
                style={{ marginRight: "10px" }}
              >
                Anterior
              </button>

              {[...Array(totalPaginas)].map((_, i) => {
                const numPagina = i + 1;
                return (
                  <button
                    key={numPagina}
                    className={`btn ${
                      paginaAtual === numPagina ? "purple darken-2" : "purple lighten-4"
                    }`}
                    style={{ marginRight: "5px" }}
                    onClick={() => this.irParaPagina(numPagina)}
                  >
                    {numPagina}
                  </button>
                );
              })}

              <button
                className="btn purple lighten-4"
                disabled={paginaAtual === totalPaginas}
                onClick={() => this.irParaPagina(paginaAtual + 1)}
                style={{ marginLeft: "10px" }}
              >
                Próxima
              </button>
            </div>
          </>
        ) : (
          <p className="center-align">Nenhum cliente encontrado.</p>
        )}
      </div>
    );
  }
}

export default ListaCliente;
