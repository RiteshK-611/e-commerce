import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "../Context_API/StateProvider";
import { auth } from "../Firebase/Firebase";

const Header = () => {  
  const [{ cart, user }] = useStateValue()
  
  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
        <Link to="/login">
          <div className="header__content" onClick={handleAuth}>
            <span className="header__contentLineOne">Hello{user? `, ${user.email}` : ' Guest'}</span>
            <span className="header__contentLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
      
        <Link to="/orders">
          <div className="header__content">
            <span className="header__contentLineOne">Returns</span>
            <span className="header__contentLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__content">
          <span className="header__contentLineOne">Your</span>
          <span className="header__contentLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__contentCart">
            <ShoppingCartOutlinedIcon />
            <span className="header__contentLineTwo header__cartCount">{cart?.length}</span>
          </div>
        </Link>
                
      </div>
    </div>
  );
}

export default Header;