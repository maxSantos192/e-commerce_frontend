import { useState, useEffect } from 'react';
import Container from '../components/Container';
import { ProductProps } from '../types/productTypes';
import ServiceInfo from '../components/ServiceInfo';
import CardCategory from '../components/CardCategory';
import api from '../services/api';
import CardProduct from '../components/CardProduct';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/product/section');
        setProducts(response?.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <section className='relative flex h-[30vh] w-full md:h-[50vh]'>
        <img
          className='left-0 top-0 h-full w-full object-cover'
          src='https://i.postimg.cc/SKQ21KFp/home-banner.jpg'
          alt='home banner'
        />
        <div className='absolute bottom-0 right-0 z-10 block w-3/4 bg-mbanner px-8 py-8 md:right-20 md:h-3/5 md:w-1/3 md:py-14'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
      </section>

      <Container>
        <section className='flex flex-col items-center justify-center gap-24 py-28'>
          <h1 className='text-center text-5xl font-bold text-mtitlecolor'>
            Browse The Range
          </h1>
          <CardCategory />
        </section>

        <section className='flex flex-col items-center justify-center gap-8 pb-10'>
          <h1 className='text-center text-5xl font-bold text-mtitlecolor'>
            Our Products
          </h1>
          <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
              {products.map(product => (
                <CardProduct key={product.id} {...product} />
              ))}
            </div>
          </div>
          <Link
            to={'/shop'}
            className='border-2 px-10 py-2 text-mgold transition-all hover:bg-mgold hover:text-mwhite'
          >
            Show More
          </Link>
        </section>
      </Container>
      <ServiceInfo />
    </main>
  );
}

export default Home;
