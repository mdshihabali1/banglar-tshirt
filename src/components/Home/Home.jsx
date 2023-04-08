import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('You have already added this t-shirt');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
       
       
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !==id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
           <div className='t-shirts-container'>
           {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
           </div>
           <div className='cart-container'>
                <Cart
                 cart={cart}
                 handleRemoveFromcart={handleRemoveFromCart}
                 ></Cart>
           </div>
        </div>
    );
};

export default Home;