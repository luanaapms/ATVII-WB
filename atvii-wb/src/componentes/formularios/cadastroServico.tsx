import React, { Component, ChangeEvent, FormEvent } from "react";

type Servico = {
  nome: string;
  preco: string;
};

type Props = {
  tema: string;
  onAdicionarServico: (servico: Servico) => void;
};

type State = {
  nome: string;
  preco: string;
  mensagem: string;
};

class FormularioCadastroServico extends Component<Props, State> {
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

    if (!nome.trim() || !preco.trim()) {
      this.setState({ mensagem: 'Por favor, preencha todos os campos.' });
      return;
    }

    this.props.onAdicionarServico({ nome: nome.trim(), preco: preco.trim() });

    this.setState({
      nome: '',
      preco: '',
      mensagem: 'Serviço cadastrado com sucesso!',
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
              <h5 className="card-title">Cadastro de Serviço</h5>

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
                  Nome do Serviço
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

export default FormularioCadastroServico;
