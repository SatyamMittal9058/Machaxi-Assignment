import ProductCard from './ProductCard/ProductCard';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    image: 'elec.jpg',
    short_description: 'Latest model with amazing features.',
    price: 4999,
  },
  {
    id: 2,
    name: 'My Book',
    short_description: 'An enthralling tale of adventure.',
    image: 'books.jpg',
    price: 99,
  },
  {
    id: 3,
    name: 'Shirt',
    short_description: 'Comfortable and stylish wear.',
    image: 'clothing.jpeg',
    price: 499
  },
  
];

function  Products(){
  return (
    <div className="flex-grow p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
