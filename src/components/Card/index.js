import styles from './Card.module.scss'


function Card(props){
    return(
        <div className={styles.card}>
          <div className="btn-favorite">
            <img src="/img/unliked.svg" alt="unliked"/> 
          </div>
          <img className={styles.sneakers} src={props.imageUrl} alt="sneakers"/>
          <p>{props.title}</p>

          <div className="d-flex justify-between align-center mt-15">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{props.price} руб.</b>
            </div>
            <button className={styles.button}> 
              <img src="/img/plus.svg" alt="plus"/>
            </button>
            </div>
        </div>
    );
}

export default Card;