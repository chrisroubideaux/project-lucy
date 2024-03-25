const inventory = [
  {
    category: 'Beverage Order',
    budget: '2,308.46',
    lastMonth: 'Last Month Sales: 40,000',
    lastWeek: 'Last Week Sales: 10,000',
    beerCost: 'Last Week: 3,000 ',
    wineCost: 'Last Week: 2,000 ',
    liquorCost: 'Last Week: 3,000 ',
    softDrinkCost: 'Last Week: 2,000 ',
    items: [
      {
        name: 'Beer',
        items: [
          {
            item: '12oz Bud Light bottles',
            par: 4,
            quantity: 0,
            price: 120.0,
            unit: 'case',
          },
          {
            item: '12oz Coors Light bottles',
            par: 4,
            quantity: 0,
            price: 120.0,
            unit: 'case',
          },
          {
            item: '12oz Miller Lite bottles',
            par: 0,
            quantity: 0,
            price: 100.0,
            unit: 'case',
          },
          {
            item: '12oz Corona bottles',
            par: 0,
            quantity: 0,
            price: 120.0,
            unit: 'case',
          },
        ],
      },
      {
        name: 'Liquor',
        items: [
          {
            item: '1.75L Tito’s Vodka',
            par: 1,
            quantity: 0,
            price: 300.0,
            unit: 'case',
          },
          {
            item: '1.75L Jack Daniels',
            par: 1,
            quantity: 0,
            price: 275.0,
            unit: 'case',
          },
          {
            item: '1.75L Jameson',
            par: 1,
            quantity: 0,
            price: 300.0,
            unit: 'case',
          },
          {
            item: '1.75L Jim Beam',
            par: 1,
            quantity: 0,
            price: 225.0,
            unit: 'case',
          },
          {
            item: '1.75L Patron',
            par: 1,
            quantity: 0,
            price: 235.0,
            unit: 'case',
          },
        ],
      },
      {
        name: 'Wine',
        items: [
          {
            name: ' 750ml Cabernet Sauvignon',
            par: 1,
            quantity: 0,
            price: 1000.0,
            unit: 'case',
          },
          {
            name: '750ml Chardonnay',
            par: 1,
            quantity: 20,
            price: 1200.0,
            unit: 'case',
          },
          {
            name: '750ml Pinot Noir',
            par: 1,
            quantity: 0,
            price: 800.0,
            unit: 'case',
          },
          {
            name: '750ml Sauvignon Blanc',
            par: 1,
            quantity: 0,
            price: 500.0,
            unit: 'case',
          },
        ],
      },
      {
        name: 'Soft Drinks',
        items: [
          {
            name: 'Coca Cola',
            par: 3,
            quantity: 0,
            price: 55.0,
            unit: 'case',
          },
          {
            name: 'Diet Coke',
            par: 2,
            quantity: 0,
            price: 50.0,
            unit: 'case',
          },

          {
            name: 'Sprite',
            par: 2,
            quantity: 0,
            price: 65.0,
            unit: 'case',
          },
          {
            name: 'F Dr. Pepper',
            par: 2,
            quantity: 0,
            price: 55.0,
            unit: 'case',
          },
          {
            name: 'Foutain Green Tea',
            par: 2,
            quantity: 0,
            price: 75.0,
            unit: 'case',
          },
        ],
      },
    ],
  },
];

export default inventory;

// Example usage:
console.log(inventory[0].items[0].name); // Output: Meat
console.log(inventory[0].items[0].items[0].name); // Output: 12oz Ribeye
console.log(inventory[0].items[0].items[0].quantity); // Output: 10
console.log(inventory[0].items[0].items[0].price); // Output: 15.99
console.log(inventory[0].items[0].items[0].unit); // Output: case
