var AppDispatcher = require('../dispatchers/appDispatcher');
var AppConstants = require('../constants/appConstants');

var appActions = {
  setMenuData: function(menuData) {
    AppDispatcher.dispatch({
      actionType: AppConstants.SET_MENU_DATA,
      data: menuData
    });
  }
};


module.exports = appActions;
