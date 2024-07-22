function Drawer(){
    return(
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="mb-30">Корзина</h2>
          <div className="cart-items flex">
          <div className="cart-item d-flex align-center mb-20">
            <img className="cart-item_sneakers" src="/img/sneakers/2.jpg" alt="sneakers"/>
            <div className="ml-20 mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="/img/btn-remove.svg" alt="remove"/>
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <img className="cart-item_sneakers" src="/img/sneakers/4.jpg" alt="sneakers"/>
            <div className="ml-20 mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>8 499 руб.</b>
            </div>
            <img className="remove-btn" src="/img/btn-remove.svg" alt="remove"/>
          </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="green-btn">
              Оформить заказ
              <img src="/img/btn-right.svg" alt="right"/>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Drawer;