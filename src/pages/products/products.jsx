import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProducts } from '../../feactures/products/productoSlice';

import './products.css';

const products = () => {
  const data = useSelector((state) => state.product.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchGet = () => {
  //     const res = setProducts();
  //     return res;
  //   };
  //   dispatch(fetchGet());
  // }, []);

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
        {data.map((element) => (
          <section className="productsContainer__cart">
            <div className="productsContainer__alon">
              <div className="productsContainer__alon__img">
                <img className="" src={element.image} alt="" />
                <p key={element}>{element.description}</p>
                <p key={element.price}>{element.price}</p>
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
          </section>
        ))}
      </section>
    </>
  );
};

export default products;
