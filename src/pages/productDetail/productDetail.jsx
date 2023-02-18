import Types from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BsHeart } from 'react-icons/bs';
import { MdOutlineAdd } from 'react-icons/md';
import { GrFormSubtract } from 'react-icons/gr';
import { getProdu } from '../../feactures/products/productoSlice';
import { addCart } from '../../feactures/cart/cartSlice';
import './productDetail.css';

const productDetail = ({ toggle }) => {
  const params = useParams();
  const data = useSelector((state) => state.product.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdu(params._id));
  }, [dispatch]);

  return (
    <section className="productDetailCont">
      <section className="productDetalCont__info">
        {data && (
          <div className="cont5">
            <div className="cont__img">
              <img className="image" src={data.image} loading="eager" alt="" />
            </div>
            <div className="infoDescription">
              <h1>{data.tittle}</h1>
              <p>Aromatizadora</p>
              <br />
              <p className="paragrafh">{data.description}</p>
              <br />
              <p><GrFormSubtract /> 1 <MdOutlineAdd /></p>
              <br />
              <p>$ {data.price}</p>
              <br />
              <p><BsHeart />Agregar a favoritos</p>
              <button
                type="button"
                className="productDetButton"
                onClick={() => {
                  const f2 = toggle;
                  f2();
                  dispatch(addCart(data));
                }}
              >
                Agregar al carrito
              </button>
            </div>

          </div>
        )}
      </section>
    </section>
  );
};

productDetail.propTypes = {
  toggle: Types.func.isRequired,
  open: Types.bool.isRequired,
};

export default productDetail;
