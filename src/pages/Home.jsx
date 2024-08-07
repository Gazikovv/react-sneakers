import React from 'react';
import Card from '../components/Card';

function Home({
  items,
  searchValue, 
  setSearchValue, 
  onChangeSearchInput, 
  onAddToFavorite, 
  onAddToCart,
  isLoading
}){

    const renderItems = () =>{
      const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
      return ( 
        isLoading 
          ? [...Array(9)] 
          : filtredItems).map((item, index) =>(
        <Card 
          key={index}
          {...item}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          loading={isLoading}
        />
      ))
    }

    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-30">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search"/>
            {searchValue && (
              <img 
              onClick={() => setSearchValue('')} 
              className=" clear remove-btn" 
              src="/img/btn-remove.svg" 
              alt="remove"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>  
        </div>
        <div className="sneakers-cards">
          {renderItems()}
        </div>
    </div>
    )
}

export default Home;