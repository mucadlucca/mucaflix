import React from 'react';
import Logo from '../../assets/img/logo.png';
import './styles.css';
import Button from '../Button';
// import ButtonLink from '../ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/" >
      <img className="Logo" src={Logo} alt="Mucaflix logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;