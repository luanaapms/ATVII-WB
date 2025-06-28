import React, { Component, ChangeEvent, FormEvent } from "react";

type Props = {
  tema: string;
  nomeInicial: string;
  precoInicial: string;
  onAtualizar: (produtoAtualizado: { nome: string; preco: string }) => void;
  onCancelar: () => void;
};

type State = {
  nome: string;
  preco: string;
};

class FormularioAtualizarProduto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: props.nomeInicial,
      preco: props.precoInicial,
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.nomeInicial !== this.props.nomeInicial ||
      prevProps.precoInicial !== this.props.precoInicial
    ) {
      this.setState({
        nome: this.props.nomeInicial,
        preco: this.props.precoInicial,
      });
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "nome") this.setState({ nome: value });
    else if (name === "preco") this.setState({ preco: value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { nome, preco } = this.state;
    this.props.onAtualizar({ nome, preco });
  };

  render() {
    const { tema, onCancelar } = this.props;
    const { nome, preco } = this.state;
    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <h5>Atualizar Produto</h5>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="nome"
                type="text"
                value={nome}
                onChange={this.handleChange}
              />
              <label className="active">Nome do Produto</label>
            </div>
            <div className="input-field col s6">
              <input
                name="preco"
                type="text"
                value={preco}
                onChange={this.handleChange}
              />
              <label className="active">Preço</label>
            </div>
          </div>
          <button className={estiloBotao} type="submit">
            Atualizar
          </button>
          <button
            type="button"
            className="btn grey"
            style={{ marginLeft: 10 }}
            onClick={onCancelar}
          >
            Cancelar
          </button>
        </form>
      </div>
    );
  }
}

export default FormularioAtualizarProduto;
