var AppDispatcher = require('../dispatchers/appDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE = 'CHANGE';

var _state = {
  menuItems: {}
};

var setMenuItems = function(data) {
  _state.menuItems = data;
};

var menuStore = objectAssign({}, EventEmitter.prototype, {
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

menuStore.dispatchToken = AppDispatcher.register(function(payload) {
  if (payload.actionType === appConstants.SET_MENU_DATA) {
    setMenuItems(payload.data);
    menuStore.emit(CHANGE);
  }

  return true;
});

module.exports = menuStore;
