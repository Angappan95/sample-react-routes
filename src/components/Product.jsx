import React, {Component} from 'react';

class Product extends Component {
    state = { 
        products: [
            'Apple',
            'Orange',
            'Grapes'
        ]
     }

     getProductlist = (products) => {
        return products.map(product => {
            return <li key={product}>{product}</li>
        });
    }

    render() { 
        return ( 
            <div>
                <h1>Product Page</h1>
                <div className="products">{this.getProductlist(this.state.products)}</div>
            </div> 
         );
    }
}
 
export default Product;