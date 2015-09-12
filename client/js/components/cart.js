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
        <div>You do not have any items in your cart</div>
      </li>
    );

    var autoDisableButton = function() {
      var cartButton = (<button className='btn btn-default' id='checkout-button' 
        onClick={ this.handleCheckout }>Checkout</button>);

      if (Object.keys(this.state.cartItems).length === 0) {
        cartButton.props.disabled = 'disabled';
      } 

      return cartButton;
    }.bind(this);

    return (
      <div className='col-md-4'>
        
        <h3>Cart</h3>
        <ul className='cart-list'>
          {cartEmpty() ? emptyCartNote : cartItems()}
        </ul>

        <div className="panel panel-default total-price">
          <div className="panel-body clearfix">
            <div id='checkout-price'>Total Price: ${this.state.cartPrice}</div>
            {autoDisableButton()} 
          </div>
        </div>

      </div>
    );
  }

});

module.exports = Queue;
