import React, { useEffect } from "react";
import "../styles/Counter.css";
const Counter = () => {
  useEffect(() => {
    const allCounters = document.querySelectorAll(".sm-counter");

    allCounters.forEach((el) => {
      const counter = el.querySelector(".sm-number");
      const storedNumber = counter.innerText;
      counter.innerText = "0";

      const updateNumber = () => {
        const currentNumber = Number(counter.innerText);
        const incrFormula = storedNumber / 50;

        if (currentNumber < storedNumber) {
          counter.innerText = `${Math.ceil(currentNumber + incrFormula)}`;
          setTimeout(updateNumber, 10);
        }
      };

      updateNumber();
    });
  }, []);

  return (
    <div>
         <h2 className="aptitle">Découvrez nos dernières statistiques</h2>
    <div className="con">
    <div className="containerf">
      <div className="sm-counter">
        <div className="sm-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <g fill="currentColor">
              <path
                fill="currentColor"
                d="M24.92437,62V36H16V24h8.92437v-8.38004C24.92437,6.49153,30.70333,2,38.84651,2 c3.90067,0,7.25309,0.29041,8.23008,0.42022v9.53975l-5.64773,0.00257C37.00014,11.96253,36,14.06699,36,17.15515V24h12l-4,12h-8v26 H24.92437z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="sm-number">71</div>
        <div className="sm-name">Facebook</div>
      </div>
      <div className="sm-counter">
        <div className="sm-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <title>logo-twitter</title>
            <g fill="currentColor">
              <path
                fill="currentColor"
                d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6 c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9 c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2 c1.7,5.2,6.5,9,12.3,9.1c-4.5,3.5-10.2,5.6-16.3,5.6c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.2,0,37.4-20,37.4-37.4 c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="sm-number">12</div>
        <div className="sm-name">Twitter</div>
      </div>
      <div className="sm-counter">
        <div className="sm-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <title>logo-youtube</title>
            <g fill="currentColor">
              <path
                fill="currentColor"
                d="M63.4,19.2c0,0-0.6-4.4-2.5-6.4c-2.4-2.5-5.2-2.6-6.4-2.7C45.4,9.5,32,9.5,32,9.5h0c0,0-13.4,0-22.4,0.6 c-1.3,0.1-4,0.2-6.4,2.7c-1.9,1.9-2.5,6.4-2.5,6.4S0,24.4,0,29.6v4.9c0,5.2,0.6,10.4,0.6,10.4s0.6,4.4,2.5,6.4 c2.4,2.5,5.6,2.5,7.1,2.7c5.1,0.5,21.8,0.6,21.8,0.6s13.4,0,22.4-0.7c1.3-0.1,4-0.2,6.4-2.7c1.9-1.9,2.5-6.4,2.5-6.4 S64,39.6,64,34.4v-4.9C64,24.4,63.4,19.2,63.4,19.2z M25.4,40.3l0-18l17.3,9L25.4,40.3z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="sm-number">50</div>
        <div className="sm-name">Youtube</div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Counter;
