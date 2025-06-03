import { Component, ChangeEvent, FormEvent } from "react";

type Props = {
    tema: string;
};

type State = {
    nome: string;
    mensagem: string;
};

export default class FormularioExcluirServico extends Component<Props, State> {
    state: State = {
        nome: '',
        mensagem: ''
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        this.setState({
            nome: '',
            mensagem: 'Serviço excluído com sucesso!'
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
                            <label className="active">Nome do Serviço </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit"> Excluir
                                <i className="material-icons right"> delete </i>
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