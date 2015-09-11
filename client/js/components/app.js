var React = require('react');
var NavBar = require('./navBar');
var Menu = require('./menu');
var Cart = require('./cart');
var appStore = require('../stores/appStore');
var apiUtil = require('../utils/apiUtil');
var menuData = require('../menuData');


var Main = React.createClass({

  getInitialState: function(){
    return appStore.getState();
  },

  componentWillMount: function() {
    menuData.init();
    apiUtil.getMenuData();
  },

  componentDidMount: function(){
    appStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    appStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(appStore.getState());
  },

  render: function() {
    return (
      <div>
        <div className='container'>
          <div className = 'row'>
            <NavBar />
          </div>
        </div>
        <div className='container'>
          <div className = 'row'>
            <Menu />
            <Cart />
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <Main />,
  document.getElementById('app')
);

