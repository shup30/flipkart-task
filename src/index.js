import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer, { getTotals } from './frontEnd/cart/CartSlice';

const store = configureStore({
  reducer:{ 
     cart: cartReducer,
  },
});

store.dispatch(getTotals());



const mytheme = createMuiTheme({
  palette:{
    primary:{
       main:"#D4AC0D"
    },
},
});



ReactDOM.render(
  <Provider store={store}>
  <Router>
    <ThemeProvider theme={mytheme}>
    <App />
    </ThemeProvider>
    </Router>
    </Provider>,
  document.getElementById('root')
);

