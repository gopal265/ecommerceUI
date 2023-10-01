import React, { useState, useEffect } from 'react';
import './payment.css'
function PaymentPage() {
  const [amount, setAmount] = useState('--');
  const [MRP, setMRP] = useState('--');
  const [discount, setDiscount] = useState('--');
  const [itemCount, setItemCount] = useState('--');

  useEffect(() => {
    const amountValue = localStorage.getItem('amount');
    setAmount(amountValue);

    const MRPValue = localStorage.getItem('MRP');
    setMRP(MRPValue);

    const discountValue = localStorage.getItem('discount');
    setDiscount(discountValue);

    const itemCountValue = localStorage.getItem('itemcount');
    setItemCount(itemCountValue);
  }, []);

  return (
    <div>
      <div id="navbar">
        <img id="logo" src="https://bit.ly/3LDsXgz" alt="" />

        <div id="nav2">
          <h5 id="first">BAG</h5>
          <div className="line"></div>
          <h5 id="second">ADDRESS</h5>
          <div className="line"></div>
          <h5>PAYMENT</h5>
        </div>
        <div id="nav3">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt=""
          />
          <p>
            100 % <b>SECURE</b>
          </p>
        </div>
      </div>
      <div id="cart">
        <div id="main1">
          <div>
            <h4>Bank Offer</h4>
            <p>
              10% Instant Discount with Standard Chartered Credit & Debit cards
              on a min spend of Rs 3,000. TCA
            </p>
            <p>
              Show More <i className="fa-solid fa-angle-down"></i>
            </p>
          </div>
          <h4>Choose Payment Mode</h4>
          <div id="payment">
            <div id="mode">
              <div>
                <i className="fa-brands fa-amazon-pay"></i>
                <h5>Cash On Delivery (Cash/Card/UPI)</h5>
              </div>
              <div id="card">
                <i className="fa-solid fa-credit-card"></i>
                <h5>Credit/Debit Card</h5>
              </div>
              <div>
                <i className="fa-brands fa-cc-amazon-pay"></i>
                <h5>PhonePe/Google Pay/BHIM UPI</h5>
              </div>
              <div>
                <i className="fa-solid fa-wallet"></i>
                <h5>Paytm/Payzapp/Wallets</h5>
              </div>
              <div>
                <i className="fa-solid fa-building-columns"></i>
                <h5>Net Banking</h5>
              </div>
              <div>
                <i className="fa-solid fa-money-check-dollar"></i>
                <h5>EMI/Pay Later</h5>
              </div>
            </div>
            <div id="paymentDiv">
              <h4>Cash On Delivery</h4>

              <a href="otp.html">
                <div id="pay">PAY</div>
              </a>
            </div>
          </div>
        </div>

        <div className="orderbox">
          <div className="pricedets">PRICE DETAILS ({itemCount} Items)</div>
          <div className="total">
            <span>Total MRP</span>
            <span className="totalprice">{MRP}</span>
          </div>
          <div className="discount">
            <span>Discount on MRP</span>
            <span className="filldiscount">- {discount}</span>
          </div>

          <div className="amount">
            <span>Total Amount</span>
            <span className="amount_pay">{amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
