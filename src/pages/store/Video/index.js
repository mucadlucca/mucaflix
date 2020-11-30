import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function StoreVideo() {
  const initialValues = {
    title: '',
    url: '',
    category: '',
  };
  const history = useHistory();
  const { handleChange, formValues, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  const categoriesTitle = categories.map(({ title }) => title);

  // const [videos, setVideos] = useState([]);

  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video:</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        const chosenCategory = categories.find((category) => {
          return category.title === formValues.category;
        });

        videosRepository.create({
          title: formValues.title,
          url: formValues.url,
          categoryId: chosenCategory.id,
        })
          .then(() => {
            history.push('/');
          });

        // setVideos([
        //   ...videos,
        //   formValues,
        // ]);

        clearForm();
      }}
      >
        <FormField
          label="Título do video: "
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />

        <FormField
          label="URL: "
          name="url"
          value={formValues.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria: "
          name="category"
          value={formValues.category}
          onChange={handleChange}
          suggestions={categoriesTitle}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {/* {videos.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {videos.map((video) => (
          <li key={`${video.title}`}>
            {video.title}
          </li>
        ))}
      </ul> */}

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default StoreVideo;
