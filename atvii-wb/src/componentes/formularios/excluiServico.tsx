import React, { ChangeEvent, FormEvent, Component } from "react";

type Props = {
  tema: string;
  nomeInicial: string;
  onExcluir: (nome: string) => void;
  onCancelar: () => void;
};

type State = {
  nome: string;
  mensagem: string;
};

class FormularioExcluirServico extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: props.nomeInicial,
      mensagem: '',
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.nomeInicial !== this.props.nomeInicial) {
      this.setState({ nome: this.props.nomeInicial });
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ nome: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.onExcluir(this.state.nome);
    this.setState({ mensagem: "Serviço excluído com sucesso!" });
  };

  render() {
    const { tema, onCancelar } = this.props;
    const { nome, mensagem } = this.state;
    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <h5>Excluir Serviço</h5>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="nome"
                type="text"
                value={nome}
                onChange={this.handleChange}
              />
              <label className={nome ? "active" : ""}>Nome do Serviço</label>
            </div>
          </div>
          <button className={estiloBotao} type="submit">
            Excluir
          </button>
          <button
            type="button"
            className="btn grey"
            style={{ marginLeft: 10 }}
            onClick={onCancelar}
          >
            Cancelar
          </button>
          {mensagem && (
            <div className="row">
              <div className="col s12">
                <span className="green-text">{mensagem}</span>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default FormularioExcluirServico;
