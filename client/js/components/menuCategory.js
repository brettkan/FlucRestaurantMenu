var React = require('react');
var MenuItem = require('./menuItem');

var MenuCategory = React.createClass({

  render: function(){
    var menuItems = this.props.menuCategoryItems.map(function(item, index) {
      return (
        <MenuItem key={item.id} menuItem={item} />
      );
    });

    return (
      <div className='menu-category'>
        <h3>{this.props.menuCategory}</h3>
        <ul>
          {menuItems}
        </ul>
      </div>
    );
  }

});

module.exports = MenuCategory;
