import React from 'react';
import styles from './Card.module.scss'


function Card({id, title, imageUrl, price, onFavorite, onPlus}){

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () =>{
    onPlus({id, title, imageUrl, price});
    setIsAdded(!isAdded);
  }

  React.useEffect(() =>{
  }, [isAdded])

    return(
        <div className={styles.card}>
          <div className="cu-p btn-favorite" onClick={onFavorite}>
            <img src="/img/unliked.svg" alt="unliked"/> 
          </div>
          <img className={styles.sneakers} src={imageUrl} alt="sneakers"/>
          <p>{title}</p>

          <div className="d-flex justify-between align-center mt-15">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
              <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="plus"/>
            </div>
        </div>
    );
}

export default Card;