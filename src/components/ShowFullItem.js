import React, { Component } from 'react';

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <img 
                    src={"./img/" + this.props.item.img} 
                    alt={this.props.item.title} 
                />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}</b>
            </div>
        );
    }
}

export default ShowFullItem;