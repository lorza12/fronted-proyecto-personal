/* eslint-disable consistent-return */
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../pages/modal/modal';
import './checkout.css';

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
      console.log(paymentMethod);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          amount: Math.floor(total * 100), // total.toFixed(2)
        }),
      };
      try {
        const response = await fetch('http://localhost:8080/api/payment', options);
        const data = await response.json();
        setValor(true);
        return data;
      } catch (err) {
        setValor(false);
        setTimeout(() => {
          setValor(true);
        }, 2000);
      }
    }
  };

  return (
    <section>
      {valor === true ? (
        <Modal
          text="pago realizado"
          button={() => navigate('/')}
          textButton="Ir al inicio"
        />
      ) : null }
      {valor === false ? (
        <Modal
          text="pago rechazado"
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
