import React from "react";
import axios from "axios";
import Card from "../components/Card";
import AppContext from "../context";

function Orders(){
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
  const [orders, setOrders] = React.useState([]);  
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://66b092cd6a693a95b5394154.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Error');
      }
    })();
  }, []);

    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-30">
          <h1>Мои покупки</h1>  
        </div>
        <div className="d-flex flex-wrap">
        <div className="sneakers-cards">
          {(isLoading ? [...Array(9)] : orders).map((item, index) =>(
            <Card 
              key={index}
              {...item}
              loading={isLoading}
            />
          ))}
        </div>
        </div>
    </div>
    )
}

export default Orders;