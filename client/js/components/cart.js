var React = require('react');
var CartItem = require('./cartItem');
var cartStore = require('../stores/cartStore');
var appActions = require('../actions/appActions');

var Cart = React.createClass({
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
    alert('Fluc yeah! Thank you for placing your order! Your total is $' + this.state.cartPrice + '.');
    appActions.clearCart();
  },

  render: function(){
    
    var cartEmpty = function() {
      return Object.keys(this.state.cartItems).length === 0 ? true : false;
    }.bind(this);

    var cartItems = function() {
      var items = [];

      for (var key in this.state.cartItems) {
        items.push(
          <CartItem key={key} cartItem={this.state.cartItems[key]} />
        );
      }

      return items;
    }.bind(this);

    var emptyCartNote = (
      <li className='list-group-item cart-item'>
        <div>There are no items in your cart.</div>
      </li>
    );

    var cartButton = (<button className='btn btn-success' id='checkout-button' 
      onClick={ this.handleCheckout }>Checkout</button>);

    var emptyCartButton = React.cloneElement(cartButton, {disabled: 'disabled'});

    return (
      <div className='col-md-4'>
        
        <h3>Cart</h3>
        <ul className='cart-list'>
          {cartEmpty() ? emptyCartNote : cartItems()}
        </ul>

        <div className="panel panel-default total-price">
          <div className="panel-body clearfix">
            <div id='checkout-price'>Total Price: ${this.state.cartPrice}</div>
            {cartEmpty() ? emptyCartButton : cartButton} 
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Cart;
