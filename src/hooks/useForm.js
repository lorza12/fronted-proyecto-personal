/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import helpHttp from '../helpers/helpHttp';

const useForm = (initialForm, validateForm) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post('https://formsubmit.co/ajax/lorza112@gmail.com', {
          body: form,
          headers: {
            'Content-Type': 'aplication/json',
            accept: 'application/json',
          },
        })
        .then((res) => {
          setLoading(false);
          setResp(true);
          setForm(initialForm);
        });
    } else {
      alert('Error');
    }
  };

  const handleClick = () => {
    navigate('/payment');
  };

  return {
    form,
    errors,
    loading,
    resp,
    handleChange,
    handleBlur,
    handleSubmit,
    handleClick,
  };
};

export default useForm;
