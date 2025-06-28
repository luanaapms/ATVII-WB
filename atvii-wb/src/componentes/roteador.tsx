import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularios/cadastroCliente";
import FormularioCadastroProduto from "./formularios/cadastroProduto";
import FormularioCadastroServico from "./formularios/cadastroServico";
import ListaCliente from "../componentes/listas/listaCliente";
import ListaProduto from "../componentes/listas/listaProduto";
import ListaServico from "../componentes/listas/listaServico";
import Consulta from "./vendas/consulta";
import HomePage from "./homepage";

interface Cliente {
    nome: string;
    nomeSocial: string;
    genero: string;
    cpf: string;
    rgs: string[];
    telefones: string[];
}

interface Produto {
    nome: string;
    preco: string;
}

interface Servico {
    nome: string;
    preco: string;
}

interface State {
    tela: string;
    tema: string;
    clientes: Cliente[];
    produtos: Produto[];
    servicos: Servico[];
}

class Roteador extends Component<{}, State> {
    state: State = {
        tela: "Início",
        tema: "purple lighten-4",
        clientes: [
            { nome: 'João da Silva', nomeSocial: 'João', genero: 'Masculino', cpf: '123.456.789-00', rgs: ['12.345.678-9'], telefones: ['(11) 91234-5678'] },
            { nome: 'Maria Oliveira', nomeSocial: 'Maria', genero: 'Feminino', cpf: '987.654.321-00', rgs: ['98.765.432-1'], telefones: ['(21) 99876-5432'] },
            { nome: 'Carlos Pereira', nomeSocial: 'Carlos', genero: 'Masculino', cpf: '456.789.123-00', rgs: ['45.678.901-2'], telefones: ['(31) 94567-8901'] },
            { nome: 'Ana Luiza Souza', nomeSocial: 'Ana', genero: 'Feminino', cpf: '321.654.987-00', rgs: ['32.165.498-3'], telefones: ['(41) 93456-7890'] },
            { nome: 'Pedro Santos', nomeSocial: 'Pedro', genero: 'Masculino', cpf: '654.321.987-00', rgs: ['65.432.109-4'], telefones: ['(51) 92345-6789'] },
            { nome: 'Fernanda Costa', nomeSocial: 'Fernanda', genero: 'Feminino', cpf: '789.123.456-00', rgs: ['78.912.345-5'], telefones: ['(61) 91234-5678'] },
            { nome: 'Roberto Lima', nomeSocial: 'Roberto', genero: 'Masculino', cpf: '234.567.890-00', rgs: ['23.456.789-6'], telefones: ['(71) 92345-6789'] },
            { nome: 'Juliana Martins', nomeSocial: 'Juliana', genero: 'Feminino', cpf: '890.123.456-00', rgs: ['89.012.345-7'], telefones: ['(81) 93456-7890'] },
            { nome: 'Lucas Almeida', nomeSocial: 'Lucas', genero: 'Masculino', cpf: '567.890.123-00', rgs: ['56.789.012-8'], telefones: ['(91) 94567-8901'] },
            { nome: 'Tatiane Rocha', nomeSocial: 'Tatiane', genero: 'Feminino', cpf: '345.678.901-00', rgs: ['34.567.890-9'], telefones: ['(11) 91234-5678'] },
            { nome: 'Marcos Vinícius', nomeSocial: 'Marcos', genero: 'Masculino', cpf: '111.222.333-44', rgs: ['11.222.333-4'], telefones: ['(12) 99876-5432'] },
            { nome: 'Patrícia Gomes', nomeSocial: 'Patrícia', genero: 'Feminino', cpf: '555.666.777-88', rgs: ['55.666.777-8'], telefones: ['(22) 98765-4321'] },
            { nome: 'Ricardo Fernandes', nomeSocial: 'Ricardo', genero: 'Masculino', cpf: '999.888.777-66', rgs: ['99.888.777-6'], telefones: ['(32) 97654-3210'] },
            { nome: 'Amanda Vieira', nomeSocial: 'Amanda', genero: 'Feminino', cpf: '444.333.222-11', rgs: ['44.333.222-1'], telefones: ['(42) 96543-2109'] },
            { nome: 'Diego Rodrigues', nomeSocial: 'Diego', genero: 'Masculino', cpf: '777.555.333-22', rgs: ['77.555.333-2'], telefones: ['(52) 95432-1098'] },
            { nome: 'Carla Mendes', nomeSocial: 'Carla', genero: 'Feminino', cpf: '666.444.222-11', rgs: ['66.444.222-1'], telefones: ['(62) 94321-0987'] },
            { nome: 'Felipe Santos', nomeSocial: 'Felipe', genero: 'Masculino', cpf: '333.222.111-44', rgs: ['33.222.111-4'], telefones: ['(72) 93210-9876'] },
            { nome: 'Letícia Araújo', nomeSocial: 'Letícia', genero: 'Feminino', cpf: '222.111.000-33', rgs: ['22.111.000-3'], telefones: ['(82) 92109-8765'] },
            { nome: 'Eduardo Almeida', nomeSocial: 'Eduardo', genero: 'Masculino', cpf: '888.777.666-55', rgs: ['88.777.666-5'], telefones: ['(92) 91098-7654'] },
            { nome: 'Bruna Castro', nomeSocial: 'Bruna', genero: 'Feminino', cpf: '555.444.333-22', rgs: ['55.444.333-2'], telefones: ['(13) 90987-6543'] }
        ],
        produtos: [
            { nome: 'Shampoo Anticaspa Masculino', preco: '22,90' },
            { nome: 'Condicionador Liso dos Sonhos', preco: '25,50' },
            { nome: 'Pomada Modeladora Masculina', preco: '18,00' },
            { nome: 'Máscara de Hidratação Feminina', preco: '35,90' },
            { nome: 'Gel Fixador Masculino', preco: '15,00' },
            { nome: 'Leave-in Reparador', preco: '29,90' },
            { nome: 'Óleo Capilar de Argan', preco: '42,00' },
            { nome: 'Cera Capilar Efeito Matte', preco: '19,90' },
            { nome: 'Creme para Pentear Feminino', preco: '17,50' },
            { nome: 'Shampoo Fortalecedor', preco: '26,90' },
            { nome: 'Spray Finalizador Feminino', preco: '21,00' },
            { nome: 'Kit Shampoo e Condicionador Masculino', preco: '39,90' },
            { nome: 'Tintura Capilar Castanho Claro', preco: '28,00' },
            { nome: 'Tônico Capilar Antiqueda Masculino', preco: '32,90' },
            { nome: 'Máscara Matizadora Roxa Feminina', preco: '33,50' },
            { nome: 'Shampoo Detox Capilar', preco: '23,00' },
            { nome: 'Spray Texturizador Masculino', preco: '20,00' },
            { nome: 'Mousse Volumizador Feminino', preco: '27,90' },
            { nome: 'Creme Alisante Masculino', preco: '36,00' },
            { nome: 'Finalizador Antifrizz Feminino', preco: '24,90' }
        ],
        servicos: [
            { nome: "Manicure", preco: "30,00" },
            { nome: "Pedicure", preco: "35,00" },
            { nome: "Design de sobrancelhas", preco: "25,00" },
            { nome: "Pintura de cabelo", preco: "200,00" },
            { nome: "Remoção de rugas", preco: "150,00" },
            { nome: "Remoção de manchas na pele", preco: "200,00" },
            { nome: "Aplicação de Botox", preco: "500,00" },
            { nome: "Tratamento para emagrecimento", preco: "300,00" },
            { nome: "Redução de medidas", preco: "350,00" },
            { nome: "Corte de cabelo masculino", preco: "80,00" },
            { nome: "Modelagem e corte de barba", preco: "50,00" },
            { nome: "Tratamento para quedas de cabelo", preco: "250,00" },
            { nome: "Massagem relaxante", preco: "120,00" },
            { nome: "Limpeza de pele", preco: "90,00" },
            { nome: "Hidratação capilar", preco: "70,00" },
            { nome: "Depilação a laser", preco: "400,00" },
            { nome: "Maquiagem para eventos", preco: "150,00" },
            { nome: "Escova progressiva", preco: "180,00" },
            { nome: "Tratamento de unhas encravadas", preco: "60,00" },
            { nome: "Peeling facial", preco: "220,00" }],
    };

    selecionarView = (novaTela: string) => {
        this.setState({ tela: novaTela });
    };

    adicionarCliente = (cliente: Cliente) => {
        this.setState((prev) => ({
            clientes: [...prev.clientes, cliente],
            tela: "Clientes",
        }));
    };

    adicionarProduto = (produto: Produto) => {
        this.setState((prev) => ({
            produtos: [...prev.produtos, produto],
            tela: "Produtos",
        }));
    };

    adicionarServico = (servico: Servico) => {
        this.setState((prev) => ({
            servicos: [...prev.servicos, servico],
            tela: "Serviços",
        }));
    };

    setClientes = (clientes: Cliente[]) => {
        this.setState({ clientes });
    };

    setProdutos = (produtos: Produto[]) => {
        this.setState({ produtos });
    };

    setServicos = (servicos: Servico[]) => {
        this.setState({ servicos });
    };

    render() {
        const { tela, tema, clientes, produtos, servicos } = this.state;

        return (
            <>
                <BarraNavegacao
                    seletorView={this.selecionarView}
                    tema={tema}
                    botoes={[
                        "Clientes",
                        "Produtos",
                        "Serviços",
                        "Relatórios",
                        "Cadastrar Cliente",
                        "Cadastrar Produto",
                        "Cadastrar Serviço",
                    ]}
                />

                {tela === "Início" && <HomePage tema={tema} selecionarView={this.selecionarView} />}

                {tela === "Clientes" && (
                    <ListaCliente tema={tema} clientes={clientes} setClientes={this.setClientes} />
                )}

                {tela === "Cadastrar Cliente" && (
                    <FormularioCadastroCliente tema={tema} onAdicionarCliente={this.adicionarCliente} />
                )}

                {tela === "Produtos" && (
                    <ListaProduto tema={tema} produtos={produtos} setProdutos={this.setProdutos} />
                )}

                {tela === "Cadastrar Produto" && (
                    <FormularioCadastroProduto tema={tema} onAdicionarProduto={this.adicionarProduto} />
                )}

                {tela === "Serviços" && (
                    <ListaServico tema={tema} servicos={servicos} setServicos={this.setServicos} />
                )}

                {tela === "Cadastrar Serviço" && (
                    <FormularioCadastroServico tema={tema} onAdicionarServico={this.adicionarServico} />
                )}

                {tela === "Relatórios" && <Consulta />}
            </>
        );
    }
}

export default Roteador;
