var React = require('react');

var MenuItem = React.createClass({

  handleAddToCart: function(){
  },

  render: function(){
    var item = this.props.menuItem;

    return (
      <li className='list-group-item menu-item' key={item.userId}>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.description}</div>
        <button onClick={ this.handleAddToCart }>Add to cart</button>
      </li>
    );
  }

});

module.exports = MenuItem;
