import React, {Component} from 'react';

class CartItem extends Component{
    state = {
        item: this.props.item
    };

    render(){
        return (
            <div className='row'>
                <div className="col-md-5">
                    <span style={{fontSize:25}}>{this.state.item.itemName} {this.formatItemCount(this.state.item.itemCount)}</span>
                    </div>
                    <div className="col-md-5">
                        <button className="ml-4 btn-md btn-dark" onClick={()=>{this.props.onIncrement(this.props.item.itemId-1)}}>(+) Increase Item</button>                            
                        <button onClick={()=>{this.props.onDecreament(this.state.item.itemId-1)}} className="ml-4 btn-md btn-info">(-) Decrease Item</button>
                        <button className="ml-4 btn-md btn-danger" onClick={()=> {this.props.onDelete(this.state.item.itemId)}}>Delete Item</button>
                    </div>  
            </div>
        );
    }


    formatItemCount(count){
        return count>0 ? <span className="badge badge-primary">{count}</span> : <span className="badge badge-warning">Zero</span>;
    }

}

export default CartItem;