var appActions = require('../actions/appActions');

var apiUtil = {
  getMenuData: function() {
    var menuData = JSON.parse(localStorage.getItem('menuItems'));
    appActions.setMenuData(menuData);
  }
};

module.exports = apiUtil;
