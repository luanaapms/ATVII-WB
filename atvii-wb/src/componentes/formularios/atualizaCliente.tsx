import React, { Component, ChangeEvent, FormEvent } from "react";

type Cliente = {
  nome: string;
  nomeSocial: string;
  genero: string;
  cpf: string;
  rgs: string[];
  telefones: string[];
};

type Props = {
  tema: string;
  cliente: Cliente;
  onAtualizar: (cliente: Cliente) => void;
  onCancelar: () => void;
};

type State = {
  nome: string;
  nomeSocial: string;
  genero: string;
  cpf: string;
  rgs: string[];
  telefones: string[];
};

class FormularioAtualizarCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: props.cliente.nome,
      nomeSocial: props.cliente.nomeSocial,
      genero: props.cliente.genero,
      cpf: props.cliente.cpf,
      rgs: [...props.cliente.rgs],
      telefones: [...props.cliente.telefones],
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.cliente !== this.props.cliente) {
      this.setState({
        nome: this.props.cliente.nome,
        nomeSocial: this.props.cliente.nomeSocial,
        genero: this.props.cliente.genero,
        cpf: this.props.cliente.cpf,
        rgs: [...this.props.cliente.rgs],
        telefones: [...this.props.cliente.telefones],
      });
    }
  }
   // mudanças de textos "simples"
   handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  };

  // mudanças de textos "complexos" (arrays)
  handleRgChange = (index: number, value: string) => {
    const rgs = [...this.state.rgs];
    rgs[index] = value;
    this.setState({ rgs });
  };

  handleTelefoneChange = (index: number, value: string) => {
    const telefones = [...this.state.telefones];
    telefones[index] = value;
    this.setState({ telefones });
  };

  adicionarRG = () => {
    this.setState((prevState) => ({
      rgs: [...prevState.rgs, ""],
    }));
  };

  removerRG = (index: number) => {
    this.setState((prevState) => ({
      rgs: prevState.rgs.filter((_, i) => i !== index),
    }));
  };

  adicionarTelefone = () => {
    this.setState((prevState) => ({
      telefones: [...prevState.telefones, ""],
    }));
  };

  removerTelefone = (index: number) => {
    this.setState((prevState) => ({
      telefones: prevState.telefones.filter((_, i) => i !== index),
    }));
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { nome, nomeSocial, genero, cpf, rgs, telefones } = this.state;
    this.props.onAtualizar({ nome, nomeSocial, genero, cpf, rgs, telefones });
  };

  render() {
    const { tema, onCancelar } = this.props;
    const { nome, nomeSocial, genero, cpf, rgs, telefones } = this.state;
    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
      <div className="card-panel">
        <form onSubmit={this.handleSubmit}>
          <h5>Atualizar Cliente</h5>

          <div className="row">
            <div className="input-field col s6">
              <input name="nome" type="text" value={nome} onChange={this.handleChange} />
              <label className="active">Nome</label>
            </div>
            <div className="input-field col s6">
              <input name="nomeSocial" type="text" value={nomeSocial} onChange={this.handleChange} />
              <label className="active">Nome Social</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input name="genero" type="text" value={genero} onChange={this.handleChange} />
              <label className="active">Gênero</label>
            </div>
            <div className="input-field col s6">
              <input name="cpf" type="text" value={cpf} disabled />
              <label className="active">CPF</label>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <label className="active">RGs</label>
              {rgs.map((rg, index) => (
                <div key={index} className="input-field col s6">
                  <input
                    type="text"
                    value={rg}
                    onChange={(e) => this.handleRgChange(index, e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn red"
                    onClick={() => this.removerRG(index)}
                  >
                    Remover
                  </button>
                </div>
              ))}
              <button type="button" className="btn green" onClick={this.adicionarRG}>
                Adicionar RG
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <label className="active">Telefones</label>
              {telefones.map((tel, index) => (
                <div key={index} className="input-field col s6">
                  <input
                    type="text"
                    value={tel}
                    onChange={(e) => this.handleTelefoneChange(index, e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn red"
                    onClick={() => this.removerTelefone(index)}
                  >
                    Remover
                  </button>
                </div>
              ))}
              <button type="button" className="btn green" onClick={this.adicionarTelefone}>
                Adicionar Telefone
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <button className={estiloBotao} type="submit">Atualizar</button>
            </div>
            <div className="col s6">
              <button type="button" className="btn grey" onClick={onCancelar}>Cancelar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormularioAtualizarCliente;
