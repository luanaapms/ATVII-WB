import { Component, ChangeEvent, FormEvent } from "react";

type Props = {
    tema: string;
};

type State = {
    nome: string;
    preco: string;
    mensagem: string;
};

export default class FormularioAtualizarServico extends Component<Props, State> {
    state: State = {
        nome: '',
        preco: '',
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
            preco: '',
            mensagem: 'Serviço atualizado com sucesso!'
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
                                id="nome"
                                name="nome"
                                type="text"
                                className="validate"
                                value={this.state.nome}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="nome" className={this.state.nome ? 'active' : ''}> Nome do Serviço </label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="preco"
                                name="preco"
                                type="text"
                                className="validate"
                                value={this.state.preco}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="preco" className={this.state.preco ? 'active' : ''}> Preço </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Atualizar
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
