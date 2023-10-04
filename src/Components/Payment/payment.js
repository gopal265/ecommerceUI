import React, { useState, useEffect } from 'react';
import './payment.css'
import {useDispatch} from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom';
import { sendOTp } from '../../actions/order';
function PaymentPage() {
  
  const location  = useLocation()
  const state = location.state
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [payment,setPayment] = useState(null)
   
  const handlePay  = ()=>{
    if(payment === null){
      return
    }
    dispatch(sendOTp())
    navigate('/paymentotp',{state:payment})
  }

  return (
    <div>
       <div className='container-fluid bag-nav'>
                    <div className='row pt-3 pb-3'>
                        <div className='col-md-2'>ShopCart</div>
                        <div className='col-md-8 center'>
                        <span className="">BAG</span> ----------&nbsp;
                        <span className="">ADDRESS</span> ---------- &nbsp;
                        <span className="">PAYMENT</span>
                     </div>
                     <div className='col-md-2'>
                     <span className=''>100% SECURE</span> 
                   </div>
                    </div>

                </div>
      <div id="cart">
        <div id="main1">
        
          <h4>Choose Payment Mode</h4>
          <div id="payment">
            <div id="mode">
              <div onClick={()=>setPayment("Cash on Delivery")}>
                <i className="fa-brands fa-amazon-pay" ></i>
                <h5>Cash On Delivery (Cash/Card/UPI)</h5>
              </div>
              <div id="card" onClick={()=> setPayment("Card")}>
                <i className="fa-solid fa-credit-card" ></i>
                <h5>Credit/Debit Card</h5>
              </div>
              <div onClick={()=>setPayment('UPI')}>
                <i className="fa-brands fa-cc-amazon-pay" ></i>
                <h5>PhonePe/Google Pay/BHIM UPI</h5>
              </div>
              <div onClick={()=> setPayment("Net Banking")}>
                <i className="fa-solid fa-building-columns" ></i>
                <h5>Net Banking</h5>
              </div>
              <div onClick={()=> setPayment("EMI")}>
                <i className="fa-solid fa-money-check-dollar" ></i>
                <h5>EMI/Pay Later</h5>
              </div>
            </div>
            <div id="paymentDiv">
              <h4>Cash On Delivery</h4>

              <div onClick={handlePay}>
                <div id="pay">PAY</div>
              </div>
            </div>
          </div>
        </div>

        <div className="orderbox">
          <div className="pricedets">PRICE DETAILS ({state.items} Items)</div>
          <div className="total">
            <span>Total MRP</span>
            <span className="totalprice">{Math.round(state.mrp)}</span>
          </div>
          <div className="discount">
            <span>Discount on MRP</span>
            <span className="filldiscount">- {Math.round(state.ds)}</span>
          </div>

          <div className="amount">
            <span>Total Amount</span>
            <span className="amount_pay">{Math.round(state.sp)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
