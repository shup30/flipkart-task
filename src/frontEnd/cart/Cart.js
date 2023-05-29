import React,{useEffect} from 'react';
import './Cart.css';
import { useSelector , useDispatch} from 'react-redux';
import {decreaseCart, removeFromCart,addToCart, getTotals} from './CartSlice';


const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart =(cartItem) =>{
        dispatch(removeFromCart(cartItem));
    }
    const handleRemoveProduct = (cartItem) =>{
        dispatch(decreaseCart(cartItem));
    }
    const handleAddProduct = (cartItem) =>{
        dispatch(addToCart(cartItem));
    }


    useEffect(()=>{
        dispatch(getTotals());
    },[cart, dispatch]);

    // const totalPrice= cart.cartItems.reduce(
    //    (price ,cartItem) => price + cartItem.quantity + cartItem.price,
    //     0
    //  );
    const{cartTotalQuantity} = useSelector(state => state.cart)

    return ( <>
        <div className="cart-Items">
        <div className="c-header">Cart Items</div>
        {cart.cartItems.length === 0 ? (
        <div className="c-empty">No items are added.</div>
        ):
        <div>
         <div>  <p>You have <span>{cartTotalQuantity}</span> items in Shopping Cart</p> </div>
            {cart.cartItems?.map((cartItem)=>{
                <div key={cartItem.id} className="c-list">
                    <img className="c-img"
                    src={cartItem.image} alt={cartItem.name}
                    />
                    <div className="c-name">{cartItem.name} </div>
                    <div className="c-function">
                        <button className="c-add" 
                        onClick={()=>handleAddProduct(cartItem)}
                        >+</button>
                        <button className="c-remove" 
                        onClick={()=>handleRemoveProduct(cartItem)}
                        >-</button>
                    </div>
                    <div className="c-price">
                        {cartItem.cartQuantity}* Rs.{cartItem.price}
                    </div>
                    <div className="c-name">
                        <button className="c-remove" onClick={()=>handleRemoveFromCart(cartItem)} >Remove</button>
                    </div>
                 </div>
            })}
        </div>
}
        <div className="c-totalPrice">
            Total price
            <div className="c-addprice">
                {/* Rs.{totalPrice} */}
                Rs.{cart.cartTotalAmount}
                </div>
        </div>
    </div>

    </> );
}
 
export default Cart;