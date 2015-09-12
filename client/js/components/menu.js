var React = require('react');
var MenuCategory = require('./menuCategory');

var Menu = React.createClass({

  render: function(){
    var menuCategories = function() {
      var groups = [];
      var categoryCounter = 0;

      for (var key in this.props.menuItems) {
        groups.push(
          <MenuCategory key={'category' + categoryCounter} menuCategory={key} 
          menuCategoryItems={this.props.menuItems[key]} />
        );
        categoryCounter++;
      }

      return groups;
    }.bind(this);

    return (
      <section className='col-md-8'>
        <h3>Restaurant Menu</h3>
        <div>
          {menuCategories()}
        </div>
      </section>
    );
  }

});

module.exports = Menu;
