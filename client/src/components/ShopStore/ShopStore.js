import React, { Component } from 'react';
import './style.css';
import Products from './Products/Products';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
//import * as authActions from '../../store/actions/authActions';
import { connect } from "react-redux";
import {products} from '../../data/products'
//import ProductDetails from '../../containers/ProductDetails'


class ShopStore extends Component{

    state={
        categoryTitle: 'Products'
    }

    render() {

              return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/" render={(props) => <Products products={products} {...props} />} />
				   {/* 	<Route
            path="/:productSlug/:productId/p"
            component={ProductDetails}
          />
          <Route path="/:slug" component={ProductListPage} />
                 <Route exact path="/products" render={(props) => <Products products={products} {...props} />} />
                    <Route exact path="/products/:slug" render={(props) => <Products products={products}{...props}  />} /> 
					*/}
                </Switch>
            </React.Fragment>
            
        );
    }
}



export default connect(null, null)(ShopStore);