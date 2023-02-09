import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from '../../components/checkout/checkout';

const stripePromise = loadStripe('pk_test_51MF1FLIZSTomfzNxuUMmwuqeHcBVN91SDeKA41JgafquANphGNXTItQUjBJBS29zIBruRYN1JeEIdEAG3UihDp3100eELLO47e');

const payment = () => {
  const total = window.localStorage.getItem('total');
  return (
    <section>
      <section className="info-pay">
        <h1>total a pagar $ {total}</h1>
      </section>
      <section className="pasarela-pay">
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>

      </section>
    </section>
  );
};

export default payment;
