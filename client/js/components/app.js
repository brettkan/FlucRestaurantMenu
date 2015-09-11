var React = require('react');
var NavBar = require('./navBar');
var Menu = require('./menu');
var Cart = require('./cart');
var AppStore = require('../stores/AppStore');
var ApiUtil = require('../utils/apiUtil');
var MenuData = require('../menuData');


var Main = React.createClass({

  getInitialState: function(){
    return AppStore.getState();
  },

  componentWillMount: function() {
    MenuData.init();
    ApiUtil.getMenuData();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(AppStore.getState());
  },

  render: function() {
    return (
      <div className='container'>
        <NavBar />
        <Menu />
        <Cart />
      </div>
    );
  }
});
