var React = require('react');
var NavBar = require('./navBar');
var Menu = require('./menu');
var Cart = require('./cart');
var menuStore = require('../stores/menuStore');
var apiUtil = require('../utils/apiUtil');
var menuData = require('../menuData');


var Main = React.createClass({

  getInitialState: function(){
    return menuStore.getState();
  },

  componentWillMount: function() {
    menuData.init();
    apiUtil.getMenuData();
  },

  componentDidMount: function(){
    menuStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    menuStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(menuStore.getState());
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
          <div className='row'>
            <Menu menuItems={this.state.menuItems} />
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

