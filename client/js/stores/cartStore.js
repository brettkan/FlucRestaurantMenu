var AppDispatcher = require('../dispatchers/appDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE = 'CHANGE';

var _state = {
  cartItems: {}
};

var addItemToCart = function(menuItem) {
  var itemID = menuItem.id;
  cartItems[itemID] = menuItem;
  cartItems[itemID].quantity = cartItems[itemID].quantity + 1 || 1;
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
