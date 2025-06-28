import React, { Component, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import FormularioAtualizarProduto from "../formularios/atualizaProduto";
import FormularioExcluirProduto from "../formularios/excluiProduto";

interface Produto {
  nome: string;
  preco: string;
}

interface Props {
  tema?: string;
  produtos: Produto[];
  setProdutos: (produtos: Produto[]) => void; 
}

interface State {
  busca: string;
  produtoEditando: Produto | null;
  nomeParaExcluir: string | null;
  paginaAtual: number;
}

class ListaProduto extends Component<Props, State> {
  produtosPorPagina = 5;

  state: State = {
    busca: '',
    produtoEditando: null,
    nomeParaExcluir: null,
    paginaAtual: 1,
  };

  handleBuscaChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ busca: e.target.value, paginaAtual: 1 });
  };

  atualizarProduto = (produtoAtualizado: Produto) => {
    const novosProdutos = this.props.produtos.map(p =>
      p.nome === produtoAtualizado.nome ? produtoAtualizado : p
    );
    this.props.setProdutos(novosProdutos);
    this.setState({ produtoEditando: null });
  };

  excluirProduto = (nome: string) => {
    const novosProdutos = this.props.produtos.filter(p => p.nome !== nome);
    this.props.setProdutos(novosProdutos);
    this.setState({ nomeParaExcluir: null });
  };

  produtosFiltrados = () => {
    return this.props.produtos.filter(produto =>
      produto.nome.toLowerCase().includes(this.state.busca.toLowerCase())
    );
  };

  irParaPagina = (num: number) => {
    const totalPaginas = Math.ceil(this.produtosFiltrados().length / this.produtosPorPagina);
    if (num < 1) num = 1;
    else if (num > totalPaginas) num = totalPaginas;
    this.setState({ paginaAtual: num });
  };

  render() {
    const { tema } = this.props;
    const { busca, produtoEditando, nomeParaExcluir, paginaAtual } = this.state;

    const produtosFiltrados = this.produtosFiltrados();
    const indexUltimoProduto = paginaAtual * this.produtosPorPagina;
    const indexPrimeiroProduto = indexUltimoProduto - this.produtosPorPagina;
    const produtosPaginaAtual = produtosFiltrados.slice(indexPrimeiroProduto, indexUltimoProduto);
    const totalPaginas = Math.ceil(produtosFiltrados.length / this.produtosPorPagina);

    return (
      <div className="container">
        <h4 className="center-align">Lista de Produtos</h4>

        <div className="input-field">
          <input
            type="text"
            placeholder="Buscar por nome"
            value={busca}
            onChange={this.handleBuscaChange}
          />
        </div>

        {produtoEditando && (
          <FormularioAtualizarProduto
            tema={tema || ''}
            nomeInicial={produtoEditando.nome}
            precoInicial={produtoEditando.preco}
            onAtualizar={this.atualizarProduto}
            onCancelar={() => this.setState({ produtoEditando: null })}
          />
        )}

        {nomeParaExcluir && (
          <FormularioExcluirProduto
            tema={tema || ''}
            nomeInicial={nomeParaExcluir}
            onExcluir={this.excluirProduto}
            onCancelar={() => this.setState({ nomeParaExcluir: null })}
          />
        )}

        {produtosPaginaAtual.length > 0 ? (
          <>
            <ul className="collection">
              {produtosPaginaAtual.map((produto, index) => (
                <li key={indexPrimeiroProduto + index} className="collection-item">
                  <strong>Nome do produto:</strong> {produto.nome}<br />
                  <strong>Preço:</strong> {produto.preco}<br />
                  <button
                    className="btn green lighten-2"
                    onClick={() => this.setState({ produtoEditando: produto })}
                  >
                    Atualizar
                  </button>
                  <button
                    className="btn purple darken-2"
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.setState({ nomeParaExcluir: produto.nome })}
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>

            <div className="center-align" style={{ marginTop: '20px' }}>
              <button
                className="btn purple lighten-4"
                disabled={paginaAtual === 1}
                onClick={() => this.irParaPagina(paginaAtual - 1)}
                style={{ marginRight: '10px' }}
              >
                Anterior
              </button>

              {[...Array(totalPaginas)].map((_, i) => {
                const numPagina = i + 1;
                return (
                  <button
                    key={numPagina}
                    className={`btn ${paginaAtual === numPagina ? 'purple darken-2' : 'purple lighten-4'}`}
                    style={{ marginRight: '5px' }}
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
                style={{ marginLeft: '10px' }}
              >
                Próxima
              </button>
            </div>
          </>
        ) : (
          <p className="center-align">Nenhum produto encontrado.</p>
        )}
      </div>
    );
  }
}

export default ListaProduto;
