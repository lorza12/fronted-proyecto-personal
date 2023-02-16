/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useRef, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProd } from '../../feactures/products/productAPI';
import './createProduct.css';

const URL = process.env.REACT_APP_API_URL;

const createProduct = () => {
  // const dispatch = useDispatch();

  const referencia = useRef();

  const upLoadFiles = () => {
    referencia.current.click();
  };
  const navigate = useNavigate();
  const [image, setImage] = useState();
  console.log('🚀 ~ file: createProduct.jsx:9 ~ createProduct ~ image', image);
  const [text, setText] = useState();
  console.log('🚀 ~ file: createProduct.jsx:10 ~ createProduct ~ text', text);
  const [upload, setUpLoad] = useState();
  console.log('🚀 ~ file: createProduct.jsx:11 ~ createProduct ~ upload', upload);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(image);
    } else {
      setPreview('');
    }
  }, [image]);

  const handleChangeData = ({ target }) => {
    const key = target.name;
    setText({ ...text, [key]: target.value }); // haga una copia y guarde la info
  };

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const file = files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/products');
    const formData = new FormData();
    formData.append('file', image);

    // connect to back end
    const options = {
      method: 'POST',
      body: formData,
    };
    const response = await fetch(`${URL}/api/upload/file`, options);
    const resp = await response.json();
    console.log('🚀 ~ file: createProduct.jsx:37 ~ handleSubmit ~ resp', resp.url);
    setUpLoad(resp.url);
    await createProd({ ...text, image: resp.url });
  };

  return (
    <section>
      <section className="container-form">
        <div className="container-form__load-data">
          <form onSubmit={handleSubmit}>
            {image ? <img src={preview} onClick={upLoadFiles} loading="eager" alt="images" width="500" /> : null}
            <input
              type="file"
              className="input__Selectimage"
              name="image"
              onChange={handleChangeImage}
            />
            <h1>titulo</h1>
            <input
              type="text"
              className="tittle"
              name="tittle"
              onChange={handleChangeData}
            />
            <h1>cantidad</h1>
            <input
              type="text"
              className="quantity"
              name="quantity"
              onChange={handleChangeData}
            />
            <h1>description</h1>
            <input
              type="text"
              className="description"
              name="description"
              onChange={handleChangeData}
            />
            <h1>precio</h1>
            <input
              type="text"
              className="price"
              name="price"
              onChange={handleChangeData}
            />
            <button
              type="submit"
            >
              Agregar
            </button>
          </form>

        </div>
      </section>

    </section>
  );
};

export default createProduct;
