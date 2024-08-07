import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props){
    const { totalPrice} = useCart();

    return(
        <header className="d-flex justify-between p-40">
          <Link to="/">
            <div className="header-left d-flex align-center">
              <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="logo"/>
              <div className="header-info">
                <h3 className="text-uppercase">REACT SNEAKERS</h3>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>
        <ul className="header-right d-flex align-center">
          <li onClick={props.onClickCart} className="d-flex align-center  cu-p">
            <img width={18} height={18} src="/img/basket.svg" alt="basket"/>
            <span>{totalPrice} руб.</span>
          </li>
          <Link to="/favorites">
            <li className="d-flex align-center  cu-p">
              <img width={18} height={18} src="/img/favorite.svg" alt="favorite"/>
              <span>Закладки</span>
            </li>
          </Link>
          <Link to={"/orders"}>
            <li className="d-flex align-center  cu-p">
              <img width={18} height={18} src="/img/user.svg" alt="user"/>
              <span>Профиль</span>
            </li>
          </Link>
        </ul>
      </header>
    );
}

export default Header;