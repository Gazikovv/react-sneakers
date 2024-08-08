import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);  
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

React.useEffect(() =>{
    async function fetchData(){
      try {
        const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all([
          axios.get('https://66a3c01b44aa63704582609e.mockapi.io/cart'), 
          axios.get('https://66b092cd6a693a95b5394154.mockapi.io/favorite'),
          axios.get('https://66a3c01b44aa63704582609e.mockapi.io/sneakers')
          ]);
        // const cartResponse = await axios.get('https://66a3c01b44aa63704582609e.mockapi.io/cart');
        // const favoriteResponse = await axios.get('https://66b092cd6a693a95b5394154.mockapi.io/favorite');
        // const itemsResponse = await axios.get('https://66a3c01b44aa63704582609e.mockapi.io/sneakers');
  
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoriteResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error('error')
      }
    }

    fetchData();
}, []);

const onAddToCart = async(obj) =>{
  try {
    const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
    if(findItem){
      setCartItems(prev => prev.filter((item) => Number(item.parentId) !== Number(obj.id))); 
      await axios.delete(`https://66a3c01b44aa63704582609e.mockapi.io/cart/${findItem.id}`);
    } else{
      setCartItems((prev) => [...prev, obj])
      const { data } = await axios.post('https://66a3c01b44aa63704582609e.mockapi.io/cart', obj);
      setCartItems((prev) => prev.map(item => {
        if(item.parentId === data.parentId){
          return {
            ...item,
            id: data.id,
          }
        }
        return item;
      }))
    }
  } catch (error) {
    alert('Ошибка при добавлении в корзину ;(')
    console.error('error')
  }
}

const [loading, setLoading] = React.useState(false);

const onRemoveItem = async (event, id) => {
   event.preventDefault();
   event.stopPropagation();

   if (loading) return;

   setLoading(true);
   try {
     await axios.delete(`https://66a3c01b44aa63704582609e.mockapi.io/cart/${id}`);
     setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
   } catch (error) {
     console.error("Ошибка при удалении из корзины:", error);
   } finally {
     setLoading(false);
   }
 };

 const onAddToFavorite = async (obj) =>{
  try{
    if(favorites.find((favObj) => Number(favObj.id) === Number(obj.id))){
      axios.delete(`/cart/${obj.id}`)
      setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else{
      const { data } = await axios.post('https://66b092cd6a693a95b5394154.mockapi.io/favorite', obj);
      setFavorites((prev) => [...prev, data]);
    }
  } catch(error){
      alert('Не удалось добавить в закладки')
      console.error('error')
  }
};

const onChangeSearchInput = (event) =>{
  setSearchValue(event.target.value)
};

const isItemAdded = (id) => {
  return cartItems.some((obj) => Number(obj.parentId) === Number(id))
};

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems}}>
      <div className="wrapper clear">

        <Drawer items={cartItems} onClose={() => setCartOpened(!cartOpened)} onRemove={onRemoveItem} opened={cartOpened}/>

        <Header onClickCart={() => setCartOpened(!cartOpened)} />

          <Routes>
            <Route path="" element={
              <Home 
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }/>

            <Route path="favorites" element={
              <Favorites />
            }/>

            <Route path="orders" element={
              <Orders />
            }/>
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
