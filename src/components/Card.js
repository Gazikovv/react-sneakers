function Card(){
    return(
        <div className="card">
          <div className="btn-favorite">
            <img src="/img/unliked.svg" alt="unliked"/> 
          </div>
          <img className="sneakers-img" src="/img/sneakers/1.jpg" alt="sneakers"/>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"> 
              <img src="/img/plus.svg" alt="plus"/>
            </button>
            </div>
        </div>
    );
}

export default Card;