import React from 'react';
import './Cart.css';


const Cart = ({cart, handleRemoveFromcart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else {
        message =<div>
            <h3>Boroloxxxx</h3>
            <h3><small>Thanks For Giving Your Money</small> </h3>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue': 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold borderd ${cart.length === 3 ? 'yellow': 'purple'}`}>something</p>
            {cart.length > 2 ? <span className='purple'> Buy More</span>: <span>No Money</span>}
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={() => handleRemoveFromcart(tshirt._id)}>X</button></p>)
            }

            {
                cart.length === 2 && <p>Duble bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na!!</h3> 
            }
        </div>
    );
};

export default Cart;


/** 
 * CONDITIONAL RENDERING
 * 1. Use if else to set a variable that will contain an element, Components
 * 2. Ternary Operator: Condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 * 
*/

/**
 * CONDITIONAL CSS CLASS
 * 1.Use ternary
 * 2. ternary indside template string
 */
