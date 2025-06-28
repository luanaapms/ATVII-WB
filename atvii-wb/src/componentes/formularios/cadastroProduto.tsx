import React, { Component, ChangeEvent, FormEvent } from "react";

type Produto = {
  nome: string;
  preco: string;
};

type Props = {
  tema: string;
  onAdicionarProduto: (produto: Produto) => void;
};

type State = {
  nome: string;
  preco: string;
  mensagem: string;
};

class FormularioCadastroProduto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      preco: '',
      mensagem: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "nome") this.setState({ nome: value });
    else if (name === "preco") this.setState({ preco: value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { nome, preco } = this.state;

    if (!nome || !preco) return;

    this.props.onAdicionarProduto({ nome, preco });

    this.setState({
      nome: '',
      preco: '',
      mensagem: 'Produto cadastrado com sucesso!',
    });
  };

  render() {
    const { tema } = this.props;
    const { nome, preco, mensagem } = this.state;
    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
      <div className="container" style={{ paddingTop: '40px', maxWidth: 600 }}>
        <div className="card">
          <div className="card-content">
            <form className="row" onSubmit={this.handleSubmit}>
              <h5 className="card-title">Cadastro de Produto</h5>

              <div className="input-field col s12">
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  className="validate"
                  value={nome}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="nome" className={nome ? 'active' : ''}>
                  Nome do Produto
                </label>
              </div>

              <div className="input-field col s12">
                <input
                  id="preco"
                  name="preco"
                  type="text"
                  className="validate"
                  value={preco}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="preco" className={preco ? 'active' : ''}>
                  Preço
                </label>
              </div>

              <div className="col s12" style={{ marginTop: 30 }}>
                <button className={estiloBotao} type="submit" name="action">
                  Cadastrar
                </button>
              </div>

              {mensagem && (
                <div className="col s12" style={{ marginTop: 20 }}>
                  <span className="green-text">{mensagem}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormularioCadastroProduto;
