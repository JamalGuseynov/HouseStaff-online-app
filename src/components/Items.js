import React, { Component } from 'react';
import Item from './Item'; 

export class Items extends Component {
    render () {
        return (
            <main>
                {this.props.items.map(el => (
                    <Item 
                        onShowitem={this.props.onShowitem} 
                        key={el.id} 
                        item={el} 
                        onAdd={this.props.onAdd} 
                    />
                ))}
            </main>
        )
    }
}

export default Items;
