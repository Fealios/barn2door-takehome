export const data = {
  items: [
    {
      id: 1,
      categories: [
        {
          id: 1,
          name: 'Fruit',
          subcategory: {
            id: 1,
            name: 'Apple'
          }
        }
      ],
      title: 'Red Delicious',
      img: 'http://www.bluestarclinic.com/wp-content/uploads/2013/12/apple-img.jpg',
      description: 'Yummy delicious apples that are red.'
    },
    {
      id: 2,
      categories: [
        {
          id: 2,
          name: 'Fruit'
        },
        {
          id: 3,
          name: 'Vegetable'
        }
      ],
      title: 'Potato',
      img:
        'https://paleofoundation.com/wp-content/uploads/2018/04/Are-Potatoes-Paleo-Are-Potatoes-allowed-on-the-Paleo-Diet.png',
      description: 'What even is a potato?'
    },
    {
      id: 3,
      categories: [
        {
          id: 3,
          name: 'Vegetable',
          subcategory: {
            id: 2,
            name: 'Root'
          }
        }
      ],
      title: 'Red Radishes'
    }
  ]
};
