import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img src="Amazon-logo.png" className="header__logo" />
      </Link>

      <div className="header__search">
        <input className="header__search__input" type="text" />
        <SearchIcon className="header__search__icon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__options">
            <span className="header__option__line">Hello Guest</span>
            <span className="header__option__lineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header__options">
          <span className="header__option__line">Returns</span>
          <span className="header__option__lineTwo">Orders</span>
        </div>

        <div className="header__options">
          <span className="header__option__line">Your</span>
          <span className="header__option__lineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__option__basket">
            <ShoppingBasketIcon />
            <span
              className="header__option__lineTwo 
            header__basket__count"
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
