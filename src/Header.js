import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="amazon-logo.png" className="header__logo" alt="amazon-logo" />
      </Link>

      <div className="header__search">
        <input className="header__search__input" type="text" />
        <SearchIcon className="header__search__icon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__options">
            <span className="header__option__line">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__option__lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__options">
            <span className="header__option__line">Returns</span>
            <span className="header__option__lineTwo">Orders</span>
          </div>
        </Link>

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
