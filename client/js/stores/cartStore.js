var AppDispatcher = require('../dispatchers/appDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE = 'CHANGE';

var _state = {
  cartItems: {},
  cartPrice: 0
};

var addItemToCart = function(menuItem) {
  var itemID = menuItem.id;
  var priceSum = _state.cartPrice + menuItem.price;

  _state.cartItems[itemID] = menuItem;
  _state.cartItems[itemID].quantity = _state.cartItems[itemID].quantity + 1 || 1;

  _state.cartPrice = Number(priceSum.toFixed(2));
};

var removeItemFromCart = function(itemID){
  var priceDiff = _state.cartPrice - _state.cartItems[itemID].price;

  _state.cartItems[itemID].quantity--;
  _state.cartPrice = Number(priceDiff.toFixed(2));

  if (_state.cartItems[itemID].quantity <= 0) {
    delete _state.cartItems[itemID];
  }

};

var queueStore = objectAssign({}, EventEmitter.prototype, {
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

queueStore.dispatchToken = AppDispatcher.register(function(payload) {
  if (payload.actionType === appConstants.ADD_TO_CART) {
    addItemToCart(payload.data);
    queueStore.emit(CHANGE);
  } else if (payload.actionType === appConstants.REMOVE_FROM_CART ){
    removeItemFromCart(payload.data);
    queueStore.emit(CHANGE);
  }

  return true;
});

module.exports = queueStore;
