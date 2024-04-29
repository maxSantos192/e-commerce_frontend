import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CategoryProps } from '../types/categoryTypes';
import api from '../services/api';

function CardCategory() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/category');
        setCategories(response?.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div
      style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
      className='flex items-center justify-center gap-6'
    >
      {categories.map(category => (
        <div
          key={category.id}
          className='relative flex h-full max-h-[515px] min-h-[350px] w-full max-w-[360px] flex-none flex-col items-center justify-center'
        >
          <Link
            to={`/shop/${category.id}`}
            className='block h-full w-full overflow-hidden rounded-lg'
          >
            <img
              src={category.image_link}
              alt={`category ${category.name}`}
              className='h-[480px] w-full rounded-lg object-cover transition-transform duration-300 hover:scale-110'
            />
          </Link>
          <h2 className='mt-6 text-center text-2xl font-semibold text-mtitlecolor'>
            {category.name}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CardCategory;
