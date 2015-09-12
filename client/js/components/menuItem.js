var React = require('react');
var appActions = require('../actions/appActions');

var MenuItem = React.createClass({

  handleAddToCart: function(){
    appActions.addToCart(this.props.menuItem);
  },

  render: function(){
    var item = this.props.menuItem;

    return (
      <li className='list-group-item menu-item' key={item.userId}>
        <div className='menu-name'>{item.name}</div>
        <div>${item.price}</div>
        <div className='menu-description'>{item.description}</div>
        <button className='btn btn-primary menu-button' onClick={ this.handleAddToCart }>Add to cart</button>
      </li>
    );
  }

});

module.exports = MenuItem;
