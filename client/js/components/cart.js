var React = require('react');
var CartItem = require('./cartItem');
var cartStore = require('../stores/cartStore');
var appActions = require('../actions/appActions');

var Queue = React.createClass({
  getInitialState: function() {
    return cartStore.getState();
  },

  componentDidMount: function(){
    cartStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    cartStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(cartStore.getState());
  },

  handleCheckout: function() {
    alert('Fluc yeah! Thank you for placing your order! Your total is $' + this.state.cartPrice);
    appActions.clearCart();
  },

  render: function(){
    var cartItems = function() {
      var items = [];

      for (var key in this.state.cartItems) {
        items.push(
          <CartItem key={key} cartItem={this.state.cartItems[key]} />
        );
      }

      return items;
    }.bind(this);

    return (
      <div className='col-md-4'>
        
        <h3>Cart</h3>
        <ul className='cart-list'>
          {cartItems()}
        </ul>

        <div className="panel panel-default total-price">
          <div className="panel-body clearfix">
            <div id='checkout-price'>Total Price: ${this.state.cartPrice}</div>
            <button className='btn btn-default' id='checkout-button' onClick={ this.handleCheckout }>Checkout</button>  
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Queue;
