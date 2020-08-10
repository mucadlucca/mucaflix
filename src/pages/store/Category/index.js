import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import config from '../../../config';

function StoreCategory() {
  const inicialValues = {
    title: '',
    description: '',
    color: '#E50914',
  };

  const { handleChange, formValues, clearForm } = useForm(inicialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${config.URL}/categories`)
      .then(async (response) => {
        const data = await response.json();
        setCategories(data);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formValues.title}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories,
          formValues,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria: "
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="color"
          value={formValues.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar pra Home
      </Link>
    </PageDefault>
  );
}

export default StoreCategory;
