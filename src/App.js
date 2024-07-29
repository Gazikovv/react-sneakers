import React from 'react'
import axios from 'axios';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

React.useEffect(() =>{
    axios.get('https://66a3c01b44aa63704582609e.mockapi.io/sneakers').then(res =>{
      setItems(res.data)
    });
    axios.get('https://66a3c01b44aa63704582609e.mockapi.io/cart').then(res =>{
      setCartItems(res.data)
    });
}, []);

const onAddToCart = (obj) =>{
  axios.post('https://66a3c01b44aa63704582609e.mockapi.io/cart', obj);
  setCartItems((prev) => [...prev, obj])
}
// const onRemoveItem = (id) =>{
//   Axios.delete(`https://66a3c01b44aa63704582609e.mockapi.io/cart/${id}`);
//   setCartItems((prev) => prev.filter((item) => item.id !== id))
// }


const [loading, setLoading] = React.useState(false);


const onRemoveItem = async (event, id) => {
   event.preventDefault();
   event.stopPropagation();

   if (loading) return;

   setLoading(true);
   try {
     await axios.delete(`https://66a3c01b44aa63704582609e.mockapi.io/cart/${id}`);
     setCartItems(prev => prev.filter(item => item.id !== id));
   } catch (error) {
     console.error("Ошибка при удалении из корзины:", error);
   } finally {
     setLoading(false);
   }
 };
console.log(cartItems)
const onChangeSearchInput = (event) =>{
  setSearchValue(event.target.value)
}
  return (
    <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(!cartOpened)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(!cartOpened)} />
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
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) =>(
            <Card 
              key={index}
              id={item.id}
              title= {item.title} 
              price= {item.price} 
              imageUrl={item.imageUrl} 
              onFavorite={() => console.log('Добавали в избранное')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
    </div>
    </div>
  );
}

export default App;
