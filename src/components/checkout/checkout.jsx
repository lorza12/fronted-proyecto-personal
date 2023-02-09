import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Checkout = () => {
  const elements = useElements();
  const stripe = useStripe();
  const total = window.localStorage.getItem('total');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod);

    if (error) {
      throw new Error(error);
    }
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
    const response = await fetch('http://localhost:8080/api/payment', options);
    const data = await response.json();
    console.log(`hola ${data}`);
    return data;
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

export default Checkout;
