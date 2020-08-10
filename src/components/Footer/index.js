import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/symbol.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={Logo} style={{ height: '60px' }} alt="Simbolo M do Mucaflix" />
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
