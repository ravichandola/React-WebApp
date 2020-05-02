import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor () {
        super();
        this.state = {  
        products : [
            {
                id: 1,
                price : 99,
                title : 'Book',
                qty : 1,
                img : ''
            },
            {
                id: 2,
                price : 7999,
                title : 'Mobile Phone',
                qty : 1,
                img : ''
            },
            {
                id: 3,
                price : 10499,
                title : 'Dishwasher',
                qty : 1,
                img : ''
            }
        ]  
        }
      }     
    render(){
        const { products } = this.state;
        return(
            <div className="cart">
               
                {products.map((product) => {
                    return  <CartItem product={ product } key={product.id} />
                })}
            </div>
            
        );
    }

}

export default Cart;