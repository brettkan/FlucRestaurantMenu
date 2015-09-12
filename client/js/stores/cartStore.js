var AppDispatcher = require('../dispatchers/appDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE = 'CHANGE';

var _state = {
  cartItems: {},
  cartPrice: '0.00'
};

var getCartPrice = function() {
  var total = 0;

  for (var key in _state.cartItems) {
    var item = _state.cartItems[key];
    total += item.quantity * item.price;
  }

  return total;
};

var addItemToCart = function(menuItem) {
  var itemID = menuItem.id;
  var priceSum = getCartPrice() + menuItem.price;

  _state.cartItems[itemID] = menuItem;
  _state.cartItems[itemID].quantity = _state.cartItems[itemID].quantity + 1 || 1;

  _state.cartPrice = priceSum.toFixed(2);
};

var removeItemFromCart = function(itemID){
  var priceDiff = getCartPrice() - _state.cartItems[itemID].price;

  _state.cartItems[itemID].quantity--;
  _state.cartPrice = priceDiff.toFixed(2);

  if (_state.cartItems[itemID].quantity <= 0) {
    delete _state.cartItems[itemID];
  }

};

var clearCart = function() {
  _state.cartItems = {};
  _state.cartPrice = '0.00';
};

var cartStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE, cb);
  },
  getState: function() {
    return _state;
  }
});

cartStore.dispatchToken = AppDispatcher.register(function(payload) {
  if (payload.actionType === appConstants.ADD_TO_CART) {
    addItemToCart(payload.data);
    cartStore.emit(CHANGE);
  } else if (payload.actionType === appConstants.REMOVE_FROM_CART){
    removeItemFromCart(payload.data);
    cartStore.emit(CHANGE);
  } else if (payload.actionType === appConstants.CLEAR_CART){
    clearCart();
    cartStore.emit(CHANGE);
  } 

  return true;
});

module.exports = cartStore;
