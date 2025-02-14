import React from 'react'
import AppContext from '../context';

const Info = ({ title, image, description }) => {
    const {setCartOpened} = React.useContext(AppContext);

    return (
     <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width="120px" src={image} alt="empty"/>
        <h2 className="mt-20">{title}</h2>
        <p className="opacity-6 mb-40 mt-10">{description}</p>
            <button onClick={() => setCartOpened(false)} className="green-btn">
                <img src="img/arrow-left.png" alt="arrow"/>
                    Вернуться назад
            </button>
    </div>
  )
}

export default Info;
