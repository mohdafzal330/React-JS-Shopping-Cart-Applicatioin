import React, {Component} from 'react'

export default class Navbar extends Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">E-Commerce Module</span>
                    <span>Total : {this.props.totalItems} items</span>
                </nav>
            </div>
      )
    }
}