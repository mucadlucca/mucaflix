import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './styles.css';
import Button from '../Button';
// import ButtonLink from '../ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/" >
      <img className="Logo" src={Logo} alt="Mucaflix logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;