import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CartItems from './components/CartItems'

class App extends Component {
    state = {
      items : [
          {itemId: 1, itemName: 'Nemero Eno Jeans full size', itemCount:0},
          {itemId: 2, itemName: 'Nemero Eno Jeans half size', itemCount:0},
          {itemId: 3, itemName: 'Nemero Eno Shoes full size', itemCount:0},
          {itemId: 4, itemName: 'Nemero Eno Belt full size', itemCount:0},
          {itemId: 5, itemName: 'Nemero Eno Sleeper full size', itemCount:0},
      ]
    }
    render() { 
      return ( 
        <div>
        <Navbar totalItems={this.state.items.filter((item)=>{return item.itemCount>0}).length}/>
        <main>
          <CartItems
           items={this.state.items}
           onDelete={this.deleteCartItem}
           onIncrement={this.incrementCartItems}
           onDecreament={this.decrementCartItems}
           />
        </main>
      </div>
      );
    }

    incrementCartItems = (index)=>{
      const items = [...this.state.items];
      const item = items[index];
      item.itemCount++;
      this.setState({items});
  }

    decrementCartItems = index => {
        const items = [...this.state.items];
        const item = items[index];
        if(item.itemCount>0)
        item.itemCount--;
        this.setState({items: items});
    }

    deleteCartItem = (index) =>{
        const itemp = this.state.items.filter((item)=>{return item.itemId!=index});
        this.setState({ items: itemp});
    }
}
 
export default App;
