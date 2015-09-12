var menuData = {
  
  init: function() {
    localStorage.clear();
    localStorage.setItem('menuItems', JSON.stringify({
      Pizzas:
        [{
          id: '1111',
          name: 'Pepperoni Pizza',
          price: 15.99,
          description: 'Pizza pie with pepperoni'
        },
        {
          id: '1112',
          name: 'Hawaiian Pizza',
          price: 18.99,
          description: 'Pizza pie with bacon and pineapple'
        },
        {
          id: '1113',
          name: 'Meat Lovers Pizza',
          price: 21.99,
          description: 'Pizza pie with pepperoni, sausage, salami, and bacon'
        }],
      Sandwiches:
        [{
          id: '1121',
          name: 'BLT',
          price: 8.99,
          description: 'Bacon, lettuce, and tomato on white bread'
        },
        {
          id: '1122',
          name: 'Club Sandwich',
          price: 9.99,
          description: 'Roast beef, ham, and turkey on sourdough bread'
        },
        {
          id: '1123',
          name: 'Philly Cheesesteak',
          price: 10.99,
          description: 'Sliced rib-eye roast with American cheese on a soft roll'
        }]
    }));
  }

};

module.exports = menuData;
