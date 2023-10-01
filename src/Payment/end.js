import React, { useEffect } from 'react';
import './end.css'; // Import your CSS file
import confetti from '../payment/confetti'; // Import your confetti library (make sure it's installed)

function ConfirmPayment() {
  useEffect(() => {
    const start = () => {
      setTimeout(function () {
        confetti.start();
      }, 1000);
    };

    const stop = () => {
      setTimeout(function () {
        confetti.stop();
      }, 10000);
    };

    start();
    stop();
  }, []);

  return (
    <div>
      <div id="thanks">
        <img src="https://bit.ly/3J2FZ5A" alt="" />
      </div>
      <div id="confirm">
        <h3>
          Order Confirmed
          <br />
          You will soon receive a mail/SMS regarding confirmation of your recent order
        </h3>
      </div>
      <a href="../Landingpage/index.html">
        <div id="move">GO TO HOME</div>
      </a>
    </div>
  );
}

export default ConfirmPayment;
