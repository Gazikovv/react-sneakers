import React from 'react';
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../../context';

function Card({
  id, 
  title, 
  imageUrl, 
  price, 
  onFavorite, 
  onPlus, 
  favorited = false,
  loading = false
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = {id, parentId: id, title, imageUrl, price}
  const onClickPlus = () =>{
    onPlus(obj);
  }

  const onClickFavorite = () =>{
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  }

    return(
        <div className={styles.card}>
          {loading ? (<ContentLoader 
            speed={2}
            width={155}
            height={265}
            viewBox="0 0 155 210"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="150" height="91" /> 
            <rect x="0" y="117" rx="5" ry="5" width="150" height="15" /> 
            <rect x="0" y="137" rx="5" ry="5" width="95" height="15" /> 
            <rect x="1" y="174" rx="5" ry="5" width="80" height="25" /> 
            <rect x="119" y="169" rx="8" ry="8" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
            {onFavorite && <div className="cu-p btn-favorite" onClick={onClickFavorite}>
              <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked"/> 
            </div>}
            <img className={styles.sneakers} src={imageUrl} alt="sneakers"/>
            <p>{title}</p>

            <div className="d-flex justify-between align-center mt-15">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
                {onPlus && (
                  <img 
                    className={styles.plus} 
                    onClick={onClickPlus} 
                    src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} 
                    alt="plus"
                  />
                )}
              </div>
          </>
          )}
        </div>
    );
}

export default Card;