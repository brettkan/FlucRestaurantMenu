var menuData = {
  
  init: function() {
    localStorage.clear();
    localStorage.setItem('menuItems', JSON.stringify([
      {
        id: '1',
        name: 'Pepperoni Pizza',
        price: 15.99,
        description: 'Pizza pie with pepperoni'
      },
      {
        id: '2',
        name: 'Hawaiian Pizza',
        price: 18.99,
        description: 'Pizza pie with bacon and pineapple'
      },
      {
        id: '3',
        name: 'Meat Lovers Pizza',
        price: 21.99,
        description: 'Pizza pie with pepperoni, sausage, salami, and bacon'
      }
    ]));
  }

};

module.exports = menuData;
