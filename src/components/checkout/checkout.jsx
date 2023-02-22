/* eslint-disable consistent-return */
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../pages/modal/modal';
import './checkout.css';

const URL = process.env.REACT_APP_API_URL;

const Checkout = () => {
  const elements = useElements();
  const stripe = useStripe();
  const [valor, setValor] = useState();
  const navigate = useNavigate();
  const total = window.localStorage.getItem('total');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          amount: Math.floor(total * 100), // total.toFixed(2)
          // amount: 10_000,
        }),
      };
      try {
        const response = await fetch(`${URL}/api/payment`, options);
        console.log(response);
        const data = await response.json();
        console.log('data', data.message);
        setValor(response.status);
        return data;
      } catch (err) {
        return err;
      }
    }
  };

  return (
    <section>
      {valor === 200 ? (
        <Modal
          text="pago realizado"
          button={() => navigate('/')}
          textButton="Ir al inicio"
        />
      ) : null }
      {valor === 500 ? (
        <Modal
          text="pago rechazado"
          button={() => navigate('/')}
          textButton="Regresar"
        />
      ) : null }
      <form className="checkoutForm" onSubmit={handleSubmit}>
        <div className="form-grup">
          <CardElement className="form-cont" />
        </div>
        <button type="submit">Pay</button>
      </form>
    </section>

  );
};

export default Checkout;
