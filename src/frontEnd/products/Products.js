import React from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { addToCart } from '../cart/CartSlice';
import './Products.css';

const Products = ({productItems}) => {
   const dispatch = useDispatch();
   const history = useHistory();

     const handleProduct =(Item) =>{
        dispatch(addToCart(Item));
        // history.push("/cart");
     };
     
    return ( <>
    <div className="Products">
        {productItems.map((Item)=>(
            <div className="card">
                <div>
                    <img className="p-img"
                    src={Item.image}
                    alt={Item.name}
                    />
                </div>
                <div>
                    <h3 className="p-name">{Item.name}</h3>
                </div>
                <div>
                    <h3 className="p-price">Rs.{Item.price}</h3>
                </div>
                <div>
                    <button className="c-btn" onClick={()=>handleProduct(Item)}>Add to cart</button>
                    <button className="c-btn">View Details</button>
                </div>

             </div>
        ))}
    </div>
    </> );
}
 
export default Products;