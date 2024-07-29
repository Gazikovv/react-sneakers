
function Drawer({onClose, onRemove, items = []}){
    return(
        <div className="overlay">
        <div className="drawer d-flex flex-column">
          <div className="d-flex justify-between mb-30">
            <h2>Корзина</h2>
            <img onClick={onClose} className="remove-btn" src="/img/btn-remove.svg" alt="btn"/>
          </div>

          {items.length > 0 ? (
            <div>
              <div className="cart-items flex">
            {items.map((obj) =>(
              <div className="cart-item d-flex align-center mb-20">
                <img className="cart-item_sneakers" src={obj.imageUrl} alt="sneakers"/>
                <div className="ml-20 mr-15">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img onClick={(e) => onRemove(e, obj.id)} className="remove-btn" src="/img/btn-remove.svg" alt="remove"/>
              </div>
            ))}
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
          ):(
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.svg" alt="empty"/>
              <h2 className="mt-20">Корзина пустая</h2>
              <p className="opacity-6 mb-40 mt-10">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={onClose} className="green-btn">
                <img src="/img/arrow-left.png" alt="arrow"/>
                Вернуться назад
              </button>
            </div>
          )}

        </div>
      </div>
    );
}

export default Drawer;
