var React = require('react');
var appActions = require('../actions/appActions');

var CartItem = React.createClass({

  handleRemoveFromCart: function(){
    appActions.addToCart(this.props.cartItem);
  },

  render: function(){
    var item = this.props.cartItem;

    return (
      <li className='list-group-item cart-item' key={item.userId}>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.quantity}</div>
        <button onClick={ this.handleRemoveFromCart }>Remove from cart</button>
      </li>
    );
  }

});

module.exports = CartItem;
