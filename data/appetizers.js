// appetizers array
const appetizers = [
  {
    id: '1',
    category: 'Appetizers',
    name: 'Bruschetta',
    image: '/images/appetizers/brushetta.png',
    description:
      'Grilled crostini served with with shaved fillet & fresh arugula tossed in house made lemon ailoi topped with shaved parmesan .',
    price: 17,
    options: [
      {
        sauce: 'Lemon Aioli',
        choices: [
          'Lemon Aioli',
          'No Aioli',
          'Extra Aioli',
          'Extra Parmesan',
          'No Parmesan',
          'No Arugula',
          'Extra Arugula',
          'Light Arugula',
        ],
      },
      {
        method: 'Tossed in Lemon Aioli',
      },
    ],
  },
  {
    id: '2',
    category: 'Appetizers',
    name: 'Chicken Wings',
    image: '/images/appetizers/wings.png',
    description:
      'Chicken wings tossed in your choice of one of our house made sauce served with your choice of ranch or blue cheese.',
    description2:
      'Chicken wings tossed in your choice of one of our house made sauce served with your choice of ranch or blue cheese. 1/2 lb or 1 lb orders portions, need it on the go? we now do pick up and delivery.',
    price: '10-20',
    options: [
      {
        sauce: 'Buffalo, BBQ, Korean BBG',
        quantity: '1/2 lb',
        quantity: '1 lb',
        choices: [
          'House made Buffalo',
          'House made BBQ',
          'Korean BBQ',
          'Garlic Parmesan',
          'Sauce on side',
          'No Sauce',
          'Extra Sauce',
        ],
      },
      {
        choices: ['Ranch', 'Blue Cheese'],
      },
    ],
  },
  {
    id: '3',
    category: 'Appetizers',
    name: 'Pork boa bun sliders',
    image: '/images/appetizers/sliders.png',
    description:
      'Steamed house made boa buns filled with top noch pork belly, with pickled cucumber, & house made korean bbq sauce.',
    description2:
      'Steamed house made boa buns filled with top noch pork belly, with pickled cucumber, & house made korean bbq sauce. 3 sliders per order. Need it on the go? we now do pick up and delivery.',
    price: 17,
    options: [
      {
        quantity: '3 sliders',
        choices: ['Korean BBQ', 'Sauce on side', 'No Sauce', 'Extra Sauce'],
      },
      {
        choices: ['Korean BBQ', 'Soy Sauce', 'Sweet Chili'],
      },
    ],
  },
  {
    id: '4',
    category: 'Appetizers',
    image: '/images/appetizers/potstickers.png',
    name: 'Pork potstickers',
    description:
      'House made pork potstickers served with house made soy sauce and house made sweet chili sauce.',
    description2:
      'House made pork potstickers served with house made soy sauce and house made sweet chili sauce. 6 potstickers per order. Need it on the go? we now do pick up and delivery.',

    price: 15,
    options: [
      {
        quantity: '6 potstickers',
        sauce: 'Soy Sauce, Sweet Chili',
        choices: [
          'Soy Sauce',
          'Sweet Chili',
          'Sauce on side',
          'No Sauce',
          'Extra Sauce',
        ],
      },
    ],
  },
];

export default appetizers;
