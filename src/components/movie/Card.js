import React, { Component } from 'react';

import './Card.css'

class Card extends Component {

  render() {
    return (
      <div onClick={this.props.clicked}>
            <img src={this.props.image}/>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
      </div>

    );
  }
}

export default Card;
