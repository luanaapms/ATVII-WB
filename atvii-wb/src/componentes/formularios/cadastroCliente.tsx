import { Component, ChangeEvent, FormEvent } from "react";

type Props = {
  tema: string;
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

export default class FormularioCadastroCliente extends Component<Props, State> {
  state: State = {
    nome: '',
    nomeSocial: '',
    genero: '',
    cpf: '',
    rgs: [''],
    telefones: [''],
    mensagem: ''
  };

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
    this.setState({ rgs: [...this.state.rgs, ''] });
  };

  removerRG = (index: number) => {
    const rgs = this.state.rgs.filter((_, i) => i !== index);
    this.setState({ rgs });
  };

  adicionarTelefone = () => {
    this.setState({ telefones: [...this.state.telefones, ''] });
  };

  removerTelefone = (index: number) => {
    const telefones = this.state.telefones.filter((_, i) => i !== index);
    this.setState({ telefones });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    this.setState({
      nome: '',
      nomeSocial: '',
      genero: '',
      cpf: '',
      rgs: [''],
      telefones: [''],
      mensagem: 'Cliente cadastrado com sucesso!'
    });
  };

  render() {
    const estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;
     return (
    <div className="row">
      <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              name="nome"
              type="text"
              value={this.state.nome}
              onChange={this.handleChange}
            />
            <label className="active">Nome</label>
          </div>
          <div className="input-field col s6">
            <input
              name="nomeSocial"
              type="text"
              value={this.state.nomeSocial}
              onChange={this.handleChange}
            />
            <label className="active">Nome Social</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              name="genero"
              type="text"
              value={this.state.genero}
              onChange={this.handleChange}
            />
            <label className="active">Gênero</label>
          </div>
          <div className="input-field col s6">
            <input
              name="cpf"
              type="text"
              value={this.state.cpf}
              onChange={this.handleChange}
            />
            <label className="active">CPF</label>
          </div>
        </div>


          <div className="row">
            <div className="col s12">
              <label className="active">RGs</label>
              {this.state.rgs.map((rg, index) => (
                <div key={index} className="input-field col s6">
                  <input
                    type="text"
                    value={rg}
                    onChange={(e) => this.handleRgChange(index, e.target.value)}
                  />
                  <button type="button" className="btn red" onClick={() => this.removerRG(index)}>Remover</button>
                </div>
              ))}
              <button type="button" className="btn green" onClick={this.adicionarRG}>Adicionar RG</button>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <label className="active">Telefones</label>
              {this.state.telefones.map((tel, index) => (
                <div key={index} className="input-field col s6">
                  <input
                    type="text"
                    value={tel}
                    onChange={(e) => this.handleTelefoneChange(index, e.target.value)}
                  />
                  <button type="button" className="btn red" onClick={() => this.removerTelefone(index)}>Remover</button>
                </div>
              ))}
              <button type="button" className="btn green" onClick={this.adicionarTelefone}>Adicionar Telefone</button>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <button className={estiloBotao} type="submit">Cadastrar
                <i className="material-icons right">Enviar</i>
              </button>
            </div>
          </div>
          {this.state.mensagem && (
            <div className="row">
              <div className="col s12">
                <span className="green-text">{this.state.mensagem}</span>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}
