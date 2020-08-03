import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function StoreVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default StoreVideo;