import { useState } from 'react';

export default function useForm(initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

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

  function clearForm() {
    setFormValues(initialValues);
  }

  return {
    handleChange,
    formValues,
    clearForm,
  };
}
