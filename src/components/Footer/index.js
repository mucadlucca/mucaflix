import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo-gregio.svg';

function Footer() {
  return (
    <FooterBase>
      <a href="https://gregioalfaiataria.com.br/" target="_blank" rel="noopener noreferrer">
        <img src={Logo} style={{height: "80px" }} alt="Logo Gregio" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
