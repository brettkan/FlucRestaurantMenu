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

  render: function(){
    var cartItems = function() {
      var items = [];

      for (var key in this.state.cartItems) {
        // console.log(key, this.state.cartItems[key]);
        items.push(
          <CartItem key={key} cartItem={this.state.cartItems[key]} />
        );
      }

      return items;
    }.bind(this);

    return (
      <div className='col-med-4'>
        <ul className='cart-list'>
          {cartItems()}
        </ul>
        <div className='total-price'>
          {this.state.cartPrice}
        </div>
      </div>
    );
  }

});

module.exports = Queue;
