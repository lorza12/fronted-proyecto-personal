/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProd } from '../../feactures/products/productAPI';
import './createProduct.css';

const URL = process.env.REACT_APP_API_URL;

const createProduct = () => {
  const referencia = useRef();

  const upLoadFiles = () => {
    referencia.current.click();
  };
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [text, setText] = useState();
  const [upload, setUpLoad] = useState();
  console.log('🚀 ~ file: createProduct.jsx:23 ~ createProduct ~ upload', upload);
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
    setUpLoad(resp.url);
    await createProd({ ...text, image: resp.url });
  };

  return (
    <section>
      <section className="container-form">
        <form onSubmit={handleSubmit}>
          <div className="container-form__load-data">
            <div className="container-form__load-data-img">
              {image ? <img src={preview} onClick={upLoadFiles} loading="eager" alt="images" width="300" /> : null}
              <br />
              <br />
              <input
                type="file"
                className="input__Selectimage"
                name="image"
                onChange={handleChangeImage}
              />
            </div>
            <div className="container-form__load-data-text">
              <h1>Nombre del producto</h1>
              <input
                type="text"
                className="tittle"
                name="tittle"
                placeholder="Agregue un titulo"
                onChange={handleChangeData}
              />
              <h1>cantidad</h1>
              <input
                type="text"
                className="quantity"
                name="quantity"
                placeholder="Unidades del producto"
                onChange={handleChangeData}
              />
              <h1>descricción</h1>
              <input
                type="text"
                className="description"
                name="description"
                placeholder="Descricción"
                onChange={handleChangeData}
              />
              <h1>precio</h1>
              <input
                type="text"
                className="price"
                name="price"
                placeholder="Valor del producto"
                onChange={handleChangeData}
              />
              <br />
              <br />
              <hr />
              <button
                type="submit"
                className="createProduct"
              >
                Agregar producto
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default createProduct;
