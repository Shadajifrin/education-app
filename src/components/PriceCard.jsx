// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


const PriceCard = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const price = [
    {
      name: "BASIC PLAN",
      price: "49K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "BEGINNER PLAN",
      price: "79K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "PREMIUM PLAN",
      price: "109K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      name: "ULTIMATE PLAN",
      price: "149K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };
  const handleDone = () => {
    alert("Payment Done successfully");
    setIsPaymentComplete(true);
  };

  return (
    <div>
      <section className='price padding'>
        <div className='container grid'>
          {price.map((val, index) => (
            <div className='price-items shadow' key={index}>
              <h4>{val.name}</h4>
              <h1>
                <span> Rs. </span>
                {val.price}
              </h1>
              <p>{val.desc}</p>
              <button className='outline-btn' onClick={() => handleGetStarted(val)}>GET STARTED</button>
            </div>
          ))}
        </div>
      </section>

      {selectedPlan && (
        <div className='payment-options'>
          <h2>Payment Options for {selectedPlan.name}</h2>
          <div className="payment-select">
            <label>Select Payment Method:</label>
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="">Select</option>
              <option value="phonepay">Phone Pe</option>
              <option value="gpay">GPay</option>
              <option value="gpay">PayTM</option>
              
              
            </select>
          </div>
          <div className="upi-input">
            <label>Enter UPI ID:</label>
            <input type="text" value={upiId} onChange={handleUpiIdChange} />
          </div>
          {!isPaymentComplete && (
            <button className='done-btn' onClick={handleDone}>DONE</button>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceCard;
