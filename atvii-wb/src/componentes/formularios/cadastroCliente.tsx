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
  tema?: string;
  onAdicionarCliente: (cliente: Cliente) => void;
};

type State = {
  nome: string;
  nomeSocial: string;
  genero: string;
  cpf: string;
  rgs: string[];
  telefones: string[];
  mensagem: string;
};

class FormularioCadastroCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      nomeSocial: '',
      genero: '',
      cpf: '',
      rgs: [''],
      telefones: [''],
      mensagem: '',
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nome") this.setState({ nome: value });
    else if (name === "nomeSocial") this.setState({ nomeSocial: value });
    else if (name === "genero") this.setState({ genero: value });
    else if (name === "cpf") this.setState({ cpf: value });
  };

  handleRgChange = (index: number, value: string) => {
    const novosRgs = [...this.state.rgs];
    novosRgs[index] = value;
    this.setState({ rgs: novosRgs });
  };

  handleTelefoneChange = (index: number, value: string) => {
    const novosTelefones = [...this.state.telefones];
    novosTelefones[index] = value;
    this.setState({ telefones: novosTelefones });
  };

  adicionarRG = () => {
    this.setState((prevState) => ({ rgs: [...prevState.rgs, ''] }));
  };

  removerRG = (index: number) => {
    this.setState((prevState) => ({
      rgs: prevState.rgs.filter((_, i) => i !== index)
    }));
  };

  adicionarTelefone = () => {
    this.setState((prevState) => ({ telefones: [...prevState.telefones, ''] }));
  };

  removerTelefone = (index: number) => {
    this.setState((prevState) => ({
      telefones: prevState.telefones.filter((_, i) => i !== index)
    }));
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { nome, nomeSocial, genero, cpf, rgs, telefones } = this.state;

    if (!nome || !genero || !cpf) {
      this.setState({ mensagem: 'Por favor, preencha os campos obrigatórios: Nome, Gênero e CPF.' });
      return;
    }

    const novoCliente: Cliente = {
      nome,
      nomeSocial,
      genero,
      cpf,
      rgs,
      telefones,
    };

    this.props.onAdicionarCliente(novoCliente);

    this.setState({
      nome: '',
      nomeSocial: '',
      genero: '',
      cpf: '',
      rgs: [''],
      telefones: [''],
      mensagem: 'Cliente cadastrado com sucesso!',
    });
  };

  render() {
    const { tema } = this.props;
    const { nome, nomeSocial, genero, cpf, rgs, telefones, mensagem } = this.state;
    const estiloBotao = `btn waves-effect waves-light ${tema || ''}`;

    return (
      <div className="container" style={{ paddingTop: '40px', maxWidth: 700 }}>
        <div className="card">
          <div className="card-content">
            <form className="row" onSubmit={this.handleSubmit}>
              <h5 className="card-title">Cadastro de Cliente</h5>

              <div className="input-field col s12 m6">
                <input name="nome" type="text" value={nome} onChange={this.handleChange} required />
                <label className={nome ? "active" : undefined}>Nome</label>
              </div>
              <div className="input-field col s12 m6">
                <input name="nomeSocial" type="text" value={nomeSocial} onChange={this.handleChange} />
                <label className={nomeSocial ? "active" : undefined}>Nome Social</label>
              </div>

              <div className="input-field col s12 m6">
                <input name="genero" type="text" value={genero} onChange={this.handleChange} required />
                <label className={genero ? "active" : undefined}>Gênero</label>
              </div>
              <div className="input-field col s12 m6">
                <input name="cpf" type="text" value={cpf} onChange={this.handleChange} required />
                <label className={cpf ? "active" : undefined}>CPF</label>
              </div>

              <div className="col s12">
                <label>RGs</label>
                {rgs.map((rg, index) => (
                  <div key={index} className="row" style={{ marginBottom: 0, alignItems: 'center' }}>
                    <div className="input-field col s10 m11">
                      <input
                        type="text"
                        value={rg}
                        onChange={(e) => this.handleRgChange(index, e.target.value)}
                      />
                    </div>
                    <div className="input-field col s10 m11" style={{ paddingTop: '10px' }}>
                      <button type="button" className="btn dark purple" onClick={() => this.removerRG(index)}>Remover</button>
                    </div>
                  </div>
                ))}
                <button type="button" className="btn green" onClick={this.adicionarRG}>Adicionar</button>
              </div>

              <div className="col s12" style={{ marginTop: 20 }}>
                <label>Telefones</label>
                {telefones.map((tel, index) => (
                  <div key={index} className="row" style={{ marginBottom: 0, alignItems: 'center' }}>
                    <div className="input-field col s10 m11">
                      <input
                        type="text"
                        value={tel}
                        onChange={(e) => this.handleTelefoneChange(index, e.target.value)}
                      />
                    </div>
                    <div className="input-field col s10 m11" style={{ paddingTop: '10px' }}>
                      <button type="button" className="btn dark purple" onClick={() => this.removerTelefone(index)}>Remover</button>
                    </div>
                  </div>
                ))}
                <button type="button" className="btn green" onClick={this.adicionarTelefone}>Adicionar</button>
              </div>

              <div className="col s12" style={{ marginTop: 30 }}>
                <button className={estiloBotao} type="submit">Cadastrar</button>
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

export default FormularioCadastroCliente;
