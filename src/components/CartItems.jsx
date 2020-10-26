
import React, {Component} from 'react'
import CartItem from './CartItem'

export default class CartItems extends Component{

    render(){
        return(
            <div className="container">
                <div className="row m-5">
                    <h1 className="text-success">Shopping Cart Functionality Application</h1>
                </div>
                <div className="row ml-1">
                </div>
                {this.props.items.map((item)=>{
                return <CartItem key={item.itemId} item={item}
                 onDelete={this.props.onDelete}
                 onIncrement = {this.props.onIncrement}
                 onDecreament = {this.props.onDecreament}
                 />;
            })}
            </div>
            
        );
    }

    
}

