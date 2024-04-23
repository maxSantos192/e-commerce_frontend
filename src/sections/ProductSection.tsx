import { useEffect, useState } from 'react';
import { ProductProps } from '../types/productTypes';
import CardProduct from '../components/CardProduct';
import api from '../services/api';

function ProductSection() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/product/section');
      setProducts(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div className='flex items-center justify-center pb-10 pt-20'>
        <h1 className='text-center text-5xl font-bold text-mtitlecolor'>
          Our Products
        </h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
          {products.map(product => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className='mt-6 flex items-center justify-center'>
        <button className='border-2 px-10 py-2 text-mgold'>Show More</button>
      </div>
    </section>
  );
}

export default ProductSection;
