
import React, { Fragment } from 'react'
class AddressCheckout extends React.Component {
  handleLogoClick = () => {
    window.location.href = '../Home/Home.js';
  };

  handleFirstClick = () => {
    window.location.href = '../Bag/Bag.js';
  };

  handleThirdClick = () => {
    window.location.href = '../Payment/Payment.js';
  };

  render() {
    return (
        <Fragment>
        <NavBar />
      <div>
        <div id="navbar">
          <img
            id="logo"
            src="https://bit.ly/3LDsXgz"
            alt="logo"
            onClick={this.handleLogoClick}
          />
          <div id="div2">
            <h5 onClick={this.handleFirstClick}>BAG</h5>
            <div className="line"></div>
            <h5>ADDRESS</h5>
            <div className="line"></div>
            <h5 onClick={this.handleThirdClick}>PAYMENT</h5>
          </div>
          <div id="div3">
            <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="" />
            <p>
              100 % <b>SECURE</b>
            </p>
          </div>
        </div>
        <div id="cart">
          <div id="div">
            <div>
              <h3>Select Delivery Address </h3>
              <div>
                <h5>ADD NEW ADDRESS</h5>
              </div>
            </div>
            <h5>DEFAULT ADDRESS</h5>
            <div>
              <div id="name">
                <div>
                  <h4>Sumit Kumar</h4>
                </div>
                <div id="home">Home</div>
              </div>
              <p>House No-C12,Old Extension Road,Gandhi Road,Karmik Nagar Dhanbad,Jharkhand,PIN-123456</p>
              <p>Mobile No: <b>2314567898</b></p>
              <p>Pay on Delivery</p>
              <div id="option">
                <div>Remove</div>
                <div>EDIT</div>
              </div>
            </div>
            <div id="add">+Add New Address</div>
          </div>
          <div id="checkDiv">
            <div id="itemDiv">
              <h5>DELIVERY ESTIMATES</h5>
              Delivery Between 7Apr to 10Apr
              <br />
            </div>
            <a href="payment.js">
              <div id="place">CONTINUE</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
</Fragment>
export default AddressCheckout;
