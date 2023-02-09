// import './DoctorProfile.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProdu } from '../../feactures/products/productoSlice';
import { addCart } from '../../feactures/cart/cartSlice';

const productDetail = () => {
  const params = useParams();
  const data = useSelector((state) => state.product.detail);
  // console.log('🚀 ~ file: productDetail.jsx:11 ~ productDetail ~ data', data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdu(params._id));
  }, [dispatch]);

  // const onAddProduct = (id) => {
  //   dispatch(addCart(id));
  // };

  return (
    <div>
      <h1>hola</h1>
      {data && (
        <div className="cont5">
          <div className="cont5__image">
            <img className="image" src={data.image} alt="" />
            <p>{data.tittle}</p>
            <button type="button" onClick={() => dispatch(addCart(data))}>
              agregar al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default productDetail;
