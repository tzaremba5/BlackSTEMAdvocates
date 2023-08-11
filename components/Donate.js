import React, { useState } from 'react';
import { checkout } from '../checkout';

function Donate() {
  const [error, setError] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!donationAmount) {
      setError('Please enter a donation amount.');
      return;
    }

    const amountInCents = Math.round(parseFloat(donationAmount) * 100);

    if (isNaN(amountInCents) || amountInCents <= 0) {
      setError('Please enter a valid donation amount.');
      return;
    }

    setError('');

  };

  const StripeCheckOut = (priceId) => {
    checkout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
    })
  }

  return (
    <div className="flex justify-center mt-[50px] mx-[50px]">
      <div className='w-full max-w-[700px]'>
        <div className="text-xl font-bold mb-4">
          Would you like to donate?
        </div>
        <div className='flex flex-col tablet:flex-row justify-between'>
          <button
              type="submit"
              className="border-2 rounded-md px-4 py-2 mt-2 hover:bg-indigo-500 hover:text-white"
              onClick={() => {StripeCheckOut('price_1Ne3wkBa1RCfaJ9yF0nuKd5t')}}
            >
              Donate $5
          </button>
          <button
              type="submit"
              className="border-2 rounded-md px-4 py-2 mt-2 hover:bg-indigo-500 hover:text-white"
              onClick={() => {StripeCheckOut('price_1Ne4cHBa1RCfaJ9yhVkrTSIN')}}
            >
              Donate $10
          </button>
          <button
              type="submit"
              className="border-2 rounded-md px-4 py-2 mt-2 hover:bg-indigo-500 hover:text-white"
              onClick={() => {StripeCheckOut('price_1Ne4cmBa1RCfaJ9yzHL1DMxL')}}
            >
              Donate $20
          </button>
          <button
              type="submit"
              className="border-2 rounded-md px-4 py-2 mt-2 hover:bg-indigo-500 hover:text-white"
              onClick={() => {StripeCheckOut('price_1Ne4d3Ba1RCfaJ9yEF7xn5ta')}}
            >
              Donate $50
          </button>          <button
              type="submit"
              className="border-2 rounded-md px-4 py-2 mt-2 hover:bg-indigo-500 hover:text-white"
              onClick={() => {StripeCheckOut('price_1Ne4dJBa1RCfaJ9y4FLIYd4G')}}
            >
              Donate $100
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donate;
