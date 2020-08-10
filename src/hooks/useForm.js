import { useState } from 'react';

export default function useForm(inicialValues) {
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

  function clearForm() {
    setFormValues(inicialValues);
  }

  return {
    handleChange,
    formValues,
    clearForm,
  };
}
