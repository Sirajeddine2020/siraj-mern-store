import React from 'react';
import {Link} from 'react-router-dom';
import "./Description.css";

function Description ({...props} ,key={...props.id.toString()})  {
	
    return (
    <section className="descript_body" >
	
  <Link to="/">Previous</Link>
    <div className="mr_grid info_row">

   
    <h6 className="product_category">Category: &nbsp; {props.product.category}</h6>
	<h6 className="product_description">&nbsp;{props.product.description}</h6>
     {/* {(product.reviews.length >0 ) ? <h6 className="reviews"> Number of reviews: &nbsp; {product.reviews.length}</h6> 
                                   : <h6 className="reviews"> Be the first to review it ! </h6>}  */}

	  
    </div>
        
    </section>
  );
};

export default Description;