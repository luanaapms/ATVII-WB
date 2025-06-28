import React, { Component, FormEvent } from "react";

type Props = {
  tema: string;
  cpf: string;
  onExcluir: (cpf: string) => void;
  onCancelar: () => void;
};

class FormularioExcluirCliente extends Component<Props> {
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.onExcluir(this.props.cpf);
  };

  render() {
    const { tema, cpf, onCancelar } = this.props;
    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
      <div className="card-panel red lighten-5">
        <form onSubmit={this.handleSubmit}>
          <h5 className="red-text">Confirmar Exclusão</h5>
          <p>
            Deseja realmente excluir o cliente com CPF <strong>{cpf}</strong>?
          </p>

          <div className="row">
            <div className="col s6">
              <button className={estiloBotao} type="submit">
                Excluir
              </button>
            </div>
            <div className="col s6">
              <button type="button" className="btn grey" onClick={onCancelar}>
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormularioExcluirCliente;
