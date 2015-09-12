var React = require('react');
var appActions = require('../actions/appActions');

var CartItem = React.createClass({

  handleRemoveFromCart: function(){
    appActions.removeFromCart(this.props.cartItem.id);
  },

  render: function(){
    var item = this.props.cartItem;

    return (
      <li className='list-group-item cart-item' key={item.userId}>
        <div>{item.name}</div>
        <div>${item.price}</div>
        <div>Quantity: {item.quantity}</div>
        <button className='btn btn-default' onClick={ this.handleRemoveFromCart }>Remove from cart</button>
      </li>
    );
  }

});

module.exports = CartItem;
