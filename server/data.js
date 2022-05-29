import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Jean',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: true,
    },
    {
      name: 'ted',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'Nike slime Shirt',
      slug: 'nike-slime-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '2',
      name: 'Puma slime Shirt',
      slug: 'puma-slime-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 70,
      countInStock: 4,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Adidas slime Shirt',
      slug: 'adidas-slime-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 150,
      countInStock: 8,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Esprit slime Shirt',
      slug: 'esprit-slime-shirt',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Esprit',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
