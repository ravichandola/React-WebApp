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
      
     handleIncreaseQuantity = (product) => {
        console.log('Increase the quantity',product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        
        this.setState({
            products : products 
        })
        
     }
      
    render(){
        const { products } = this.state;
        return(
            <div className="cart">
               
                {products.map((product) => {
                    return  <
                        CartItem product={ product } 
                        key={product.id} 
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        />
                })}
            </div>
            
        );
    }

}

export default Cart;