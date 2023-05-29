import React from 'react';
import {Switch, Route} from 'react-router-dom';
import EventForm from '../frontEnd/eventForm/EventForm';
import Products from '../frontEnd/products/Products';
import Cart from '../frontEnd/cart/Cart';
import Header from '../ui/header/Header';


const Blank = ({productItems}) => {
    return ( <>
    <Header />
    
        <Switch>
            {/* <Route path="/" exact>
                <Home />
            </Route> */}

            <Route path="/eventForm" exact>
                <EventForm />
            </Route>

            <Route path="/products" >
                <Products productItems={productItems} />
            </Route>

            <Route path="/cart">
                <Cart />
            </Route>



        </Switch>
    </> );
}
 
export default Blank;