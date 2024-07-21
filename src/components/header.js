function Header(){
    return(
        <header className="d-flex justify-between p-40">
        <div className="header-left d-flex align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="logo"/>
          <div className="header-info">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header-right d-flex align-center">
          <li className="d-flex align-center">
            <img width={18} height={18} src="/img/basket.svg" alt="basket"/>
            <span>1205 руб.</span>
          </li>
          <li className="d-flex align-center">
            <img width={18} height={18} src="/img/favorite.svg" alt="favorite"/>
            <span>Закладки</span>
          </li>
          <li className="d-flex align-center">
            <img width={18} height={18} src="/img/user.svg" alt="user"/>
            <span>Профиль</span>
          </li>
        </ul>
      </header>
    );
}

export default Header;