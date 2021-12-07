import React from "react";
import { createCheckout } from "../redux/apiCalls";

const Tickets = () => {
  const handleBuy = () => {
    createCheckout();
  };

  return (
    <section className="tickets-container">
      <div className="tickets__text-container">
        <h2>Get your tickets!</h2>
      </div>
      <div className="tickets__cards-container">
        <div className="tickets__card">
          <h3>Single ticket</h3>
          <div className="tickets__card-amount-container">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-ticket-interface-kiranshastry-lineal-color-kiranshastry.png" />
            <p>x1</p>
          </div>
          <div className="tickets__card-price-container">
            <p className="tickets__card-price">15$</p>
            <button className="btn-main">Buy</button>
          </div>
        </div>
        <div className="tickets__card">
          <h3>Triple pack</h3>
          <div className="tickets__card-amount-container">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-ticket-interface-kiranshastry-lineal-color-kiranshastry.png" />
            <p>x3</p>
          </div>
          <div className="tickets__card-price-container">
            <p className="tickets__card-price">45$</p>
            <button className="btn-main">Buy</button>
          </div>
        </div>
        <div className="tickets__card">
          <h3>Mega pack</h3>
          <div className="tickets__card-amount-container">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-ticket-interface-kiranshastry-lineal-color-kiranshastry.png" />
            <p>x5</p>
          </div>
          <div className="tickets__card-price-container">
            <p className="tickets__card-price">65$</p>
            <button className="btn-main" onClick={handleBuy}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
