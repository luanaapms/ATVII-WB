import React, { Component, ChangeEvent } from "react";
import FormularioExcluirServico from "../formularios/excluiServico";
import FormularioAtualizarServico from "../formularios/atualizaServico";

interface Servico {
  nome: string;
  preco: string;
}

interface Props {
  tema?: string;
  servicos: Servico[];
  setServicos: (servicos: Servico[]) => void; 
}

interface State {
  busca: string;
  editandoIndex: number | null;
  excluindoIndex: number | null;
  paginaAtual: number;
}

class ListaServico extends Component<Props, State> {
  servicosPorPagina = 5;

  state: State = {
    busca: "",
    editandoIndex: null,
    excluindoIndex: null,
    paginaAtual: 1,
  };

  handleBuscaChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ busca: e.target.value, paginaAtual: 1 });
  };

  atualizarServico = (servicoAtualizado: Servico) => {
    const { editandoIndex } = this.state;
    const { servicos, setServicos } = this.props;

    if (editandoIndex === null) return;

    const novosServicos = [...servicos];
    novosServicos[editandoIndex] = servicoAtualizado;

    setServicos(novosServicos);
    this.setState({ editandoIndex: null });
  };

  excluirServico = (nome: string) => {
    const { servicos, setServicos } = this.props;
    const novosServicos = servicos.filter((s) => s.nome !== nome);
    setServicos(novosServicos);
    this.setState({ excluindoIndex: null });
  };

  cancelarEdicao = () => this.setState({ editandoIndex: null });
  cancelarExclusao = () => this.setState({ excluindoIndex: null });

  irParaPagina = (num: number) => {
    const totalPaginas = Math.ceil(this.servicosFiltrados().length / this.servicosPorPagina);
    if (num < 1) num = 1;
    else if (num > totalPaginas) num = totalPaginas;
    this.setState({ paginaAtual: num });
  };

  servicosFiltrados = () => {
    const { servicos } = this.props;
    const { busca } = this.state;
    return servicos.filter((s) =>
      s.nome.toLowerCase().includes(busca.toLowerCase())
    );
  };

  render() {
    const { tema = "blue", servicos } = this.props;
    const { busca, editandoIndex, excluindoIndex, paginaAtual } = this.state;

    const servicosFiltrados = this.servicosFiltrados();
    const indexUltimoServico = paginaAtual * this.servicosPorPagina;
    const indexPrimeiroServico = indexUltimoServico - this.servicosPorPagina;
    const servicosPaginaAtual = servicosFiltrados.slice(indexPrimeiroServico, indexUltimoServico);
    const totalPaginas = Math.ceil(servicosFiltrados.length / this.servicosPorPagina);

    return (
      <div className="container">
        <h4 className="center-align">Lista de Serviços</h4>

        <div className="input-field">
          <input
            type="text"
            placeholder="Buscar por nome"
            value={busca}
            onChange={this.handleBuscaChange}
          />
        </div>

        {editandoIndex !== null ? (
          <FormularioAtualizarServico
            tema={tema}
            nomeInicial={servicos[editandoIndex].nome}
            precoInicial={servicos[editandoIndex].preco}
            onAtualizar={this.atualizarServico}
            onCancelar={this.cancelarEdicao}
          />
        ) : excluindoIndex !== null ? (
          <FormularioExcluirServico
            tema={tema}
            nomeInicial={servicos[excluindoIndex].nome}
            onExcluir={this.excluirServico}
            onCancelar={this.cancelarExclusao}
          />
        ) : servicosPaginaAtual.length > 0 ? (
          <>
            <ul className="collection">
              {servicosPaginaAtual.map((servico, index) => (
                <li key={indexPrimeiroServico + index} className="collection-item">
                  <strong>Nome do serviço:</strong> {servico.nome}<br />
                  <strong>Preço:</strong> {servico.preco}<br />
                  <button
                    className="btn green lighten-2"
                    onClick={() =>
                      this.setState({ editandoIndex: indexPrimeiroServico + index })
                    }
                    style={{ marginRight: 10 }}> Atualizar </button>
                  <button
                    className="btn purple darken-2"
                    onClick={() =>
                      this.setState({ excluindoIndex: indexPrimeiroServico + index })
                    }>Excluir </button>
                </li>
              ))}
            </ul>

            <div className="center-align" style={{ marginTop: 20 }}>
              <button
                className="btn purple lighten-4"
                disabled={paginaAtual === 1}
                onClick={() => this.irParaPagina(paginaAtual - 1)}
                style={{ marginRight: 10 }}> Anterior </button>

              {[...Array(totalPaginas)].map((_, i) => {
                const numPagina = i + 1;
                return (
                  <button
                    key={numPagina}
                    className={`btn ${
                      paginaAtual === numPagina ? "purple darken-2" : "purple lighten-4"
                    }`}
                    style={{ marginRight: 5 }}
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
                style={{ marginLeft: 10 }}>Próxima</button>
            </div>
          </>
        ) : (
          <p className="center-align">Nenhum serviço encontrado.</p>
        )}
      </div>
    );
  }
}

export default ListaServico;
