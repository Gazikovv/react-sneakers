import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites(){
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-30">
          <h1>Мои закладки</h1>  
        </div>
        <div className="d-flex flex-wrap">
        <div className="sneakers-cards">
          {favorites
            .map((item, index) =>(
            <Card 
              // key={index}
              // id={item.id}
              // title= {item.title} 
              // price= {item.price} 
              // imageUrl={item.imageUrl}
              {...item}
              favorited={true}
              onFavorite={onAddToFavorite}
            />
          ))}
        </div>
        </div>
    </div>
    )
}

export default Favorites;