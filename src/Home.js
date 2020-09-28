import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="amazon-home-header.jpeg" />

        <div className="home__row">
          <Product
            id="3298"
            title="the lean start up"
            price={29.99}
            image="amazon-product.jpg"
            rating={3}
          />
          <Product
            id="80829"
            title="the lean start up"
            price={29.99}
            image="apple-pencile.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="8928"
            title="the lean start up"
            price={29.99}
            image="product-iphone.png"
            rating={3}
          />
          <Product
            id="8920"
            title="the lean start up"
            price={29.99}
            image="product-beats.jpeg"
            rating={3}
          />
          <Product
            id="8291"
            title="the lean start up"
            price={29.99}
            image="apple-watch.png"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="89230"
            title="the lean start up"
            price={29.99}
            image="wide-monitor.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
