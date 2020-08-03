import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function StoreCategory() {
  const inicialValues = {
    name: '',
    description: '',
    color: '#E50914',
  };

  const [categories, setCategories] = useState([]);
  const [formValues, setFormValues] = useState(inicialValues);

  function setFormValue(key, value) {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  }

  function handleChange(event) {
    setFormValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:3333/categories';

    fetch(URL)
      .then(async (response) => {
        const data = await response.json();
        setCategories(data);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formValues.name}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories,
          formValues,
        ]);

        setFormValues(inicialValues);
      }}
      >

        <FormField
          label="Nome da categoria: "
          type="text"
          name="name"
          value={formValues.name}
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
          <li key={`${category.name}`}>
            {category.name}
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
