import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProducts } from '../../feactures/products/productoSlice';
import imgTitle from './assest/4elementos-04.png';

import './products.css';

const products = () => {
  const data = useSelector((state) => state.product.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  if (data === null) {
    setLoading(true);
  }

  const handleProduct = (data1) => {
    navigate(`/product-detail/${data1}`);
  };

  return (
    <>
      {loading === true ? <span>Loading... </span> : null}
      <section className="productsContainer">
        <section className="productsContainer__title">
          <h1 className="productsContainer__title__h1">
            <img src={imgTitle} loading="eager" alt="title" />
          </h1>
          <p>
            Nos gusta cerrar los ojos, respirar profundo
            y dejar que los aromas nos inspiren, nos conecten
            con el Universo, nos sanen. Creemos en el poder de la
            aromaterapia y con esta selección de productos,
            tú podrás disfrutarlo.
          </p>
        </section>
        <section className="productsContainer__section2">
          <div className="productsContainer__products">
            {data.map((element) => (
              <div className="productsContainer__cart" key={element._id}>
                <div>
                  <img className="" src={element.image} loading="eager" alt="" />
                </div>
                <div>
                  <button
                    type="button"
                    className="button__product"
                    onClick={() => {
                      handleProduct(element._id);
                    }}
                  >
                    Detalle del producto
                  </button>
                </div>
              </div>

            ))}
          </div>

        </section>
      </section>
    </>
  );
};

export default products;
