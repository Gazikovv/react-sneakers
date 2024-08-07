import React from 'react'
import axios from 'axios';

import Info from '../Info';
import AppContext from '../../context';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({onClose, onRemove, items = [], opened}){
    const {cartItems, setCartItems, totalPrice, totalNalog} = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () =>{
      try {
        setIsLoading(true);
        const {data} = await axios.post('https://66b092cd6a693a95b5394154.mockapi.io/orders', {
          items: cartItems
        });
        setOrderId(data.id)
        setIsOrderCompleted(true);
        setCartItems([])

        for (let i = 0; i < cartItems.length; i++) {
          const item = cartItems[i];
          await axios.delete('https://66b092cd6a693a95b5394154.mockapi.io/cart/' + item.id); 
          await delay(1000); 
        }

      } catch (error){ 
        alert('Error complete order :(')
      }
      setIsLoading(false);
    }
    return(
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        <div className={styles.drawer}>
          <div className="d-flex justify-between mb-30">
            <h2>Корзина</h2>
            <img onClick={onClose} className="remove-btn" src="/img/btn-remove.svg" alt="btn"/>
          </div>

          {items.length > 0 ? (
            <div className="d-flex flex-column flex">
              <div className="cart-items flex">
            {items.map((obj) =>(
              <div key={obj.id} className="cart-item d-flex align-center mb-20">
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
                <b>{totalPrice + totalNalog} руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>{totalNalog} руб.</b>
              </li>
            </ul>
            <button disabled={isLoading} onClick={onClickOrder} className="green-btn">
              Оформить заказ
              <img src="/img/btn-right.svg" alt="right"/>
            </button>
              </div>
            </div>
          ):(
            <Info 
              title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"} 
              description={isOrderCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
              image={isOrderCompleted ? "/img/complete-order.svg" : "/img/empty-cart.svg"}></Info>
          )}

        </div>
      </div>
    );
}

export default Drawer;
