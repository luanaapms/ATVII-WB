/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, MouseEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

type Props = {
  tema: string;
  botoes: string[];
  seletorView: (valor: string, e: MouseEvent<HTMLAnchorElement>) => void;
};

export default class BarraNavegacao extends Component<Props> {
  componentDidMount() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  gerarListaBotoes() {
    const { botoes, seletorView } = this.props;

    if (botoes.length <= 0) return null;

    return botoes.map(valor => (
      <li key={valor}>
        <a href="#!" onClick={(e) => seletorView(valor, e)}>
          {valor}
        </a>
      </li>
    ));
  }

  render() {
    const { tema } = this.props;

    return (
      <>
        <nav className={tema}>
          <div className="nav-wrapper" style={{ padding: "0 2rem" }}>
            <a className="brand-logo" style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
              WB
            </a>
            <a href="#!" data-target="mobile-menu" className="sidenav-trigger" aria-label="Menu">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.gerarListaBotoes()}
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-menu">
          {this.gerarListaBotoes()}
        </ul>
      </>
    );
  }
}
