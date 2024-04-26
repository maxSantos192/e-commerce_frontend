import { SetStateAction, useEffect, useState } from 'react';
import { PiCirclesFourFill } from 'react-icons/pi';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { BsViewList } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import api from '../services/api';
import CardProduct from '../components/CardProduct';
import { ProductProps } from '../types/productTypes';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import FilterPopover from '../components/FilterPopover';

function Shop() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageInfo, setPageInfo] = useState('');
  const [categoryIds, setCategoryIds] = useState<number[]>([]);
  const [limitItem, setLimitItem] = useState<number>(16);
  const [orderBy, setOrderBy] = useState('');
  const [isCol, setIsCol] = useState<boolean>(false);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fecthData() {
      try {
        const response = await api.get('/product/pagination', {
          params: {
            page: page,
            category: categoryIds.join(','),
            limit: limitItem,
            orderBy,
          },
        });
        setProducts(response?.data?.data);
        setTotalPages(response?.data?.totalPages);
        setPageInfo(response?.data?.pageInfo);
      } catch (err) {
        console.error(err);
      }
    }
    fecthData();
  }, [page, categoryIds, limitItem, orderBy]);

  const handleApplyCategories = (selectedCategories: number[]) => {
    setCategoryIds(selectedCategories);
    setFilterOpen(false);
  };

  function handlePageChange(event: any, value: SetStateAction<number>) {
    setPage(value);
  }

  const buttonSx = {
    padding: 2,
    fontSize: '18px',
    border: 'none',
    borderRadius: 3,
    backgroundColor: '#F9F1E7',
    color: 'black', // Cor da fonte para botão não selecionado
    '&.Mui-disabled': {
      backgroundColor: '#f9f9f9', // Cor de fundo quando desabilitado
      color: '#ccc', // Cor da fonte quando desabilitado
    },
    '&:hover': {
      backgroundColor: '#F9F1E7', // Mantém a cor de fundo ao passar o mouse
      color: 'black', // Mantém a cor da fonte ao passar o mouse
    },
  };

  return (
    <>
      <section className='relative h-40 w-full md:h-72'>
        <div className='absolute flex h-full w-full flex-col items-center justify-center'>
          <h1 className='text-5xl font-medium'>Shop</h1>
          <div className='flex items-center justify-center p-2'>
            <Link to={'/'} className='font-medium'>
              Home
            </Link>
            <IoIosArrowForward />
            <p className='text-right'> Shop</p>
          </div>
        </div>
        <img
          className='inset-0 h-full w-full object-cover'
          src='https://i.postimg.cc/wB3KWrZb/ff74c027a1888544144abe4be6e02cbf.jpg'
          alt='shop banner'
        />
      </section>

      <section className='flex h-auto w-full bg-mfilter md:h-20'>
        <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-between p-3 md:flex-row'>
          <div className='flex flex-row items-center justify-center gap-4 '>
            <div className='flex'>
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className='flex items-center justify-center'
              >
                <TbAdjustmentsHorizontal size={24} color='#000' />
                <p className='ml-1'>Filter</p>
              </button>
              {filterOpen && <FilterPopover onApply={handleApplyCategories} />}
            </div>

            <button onClick={() => setIsCol(false)}>
              <PiCirclesFourFill size={24} color='#000' />
            </button>
            <button onClick={() => setIsCol(true)}>
              <BsViewList size={24} color='#000' />
            </button>
            <div className='hidden h-9 w-[2px] bg-mline md:block'></div>
            <p className='text-pretty text-sm md:text-base'>{pageInfo}</p>
          </div>
          <div className='mt-5 flex flex-row items-center justify-center gap-3 md:mt-0'>
            <span className='text-sm md:text-base'>Show</span>
            <select
              onChange={e => setLimitItem(parseInt(e.target.value))}
              className='mr-4 p-1 text-sm md:p-2 md:text-base'
            >
              <option value={16}>16</option>
              <option value={8}>8</option>
            </select>
            <span className='text-sm md:text-base'>Sort by</span>
            <select
              value={orderBy}
              onChange={e => setOrderBy(e.target.value)}
              className='p-1 text-sm md:p-2 md:text-base'
            >
              <option value=''>Default</option>
              <option value='name:asc'>A - Z</option>
              <option value='price:asc'>Price Low to High</option>
              <option value='price:desc'>Price High to low</option>
            </select>
          </div>
        </div>
      </section>

      <section className='my-14 flex items-center justify-center'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
          {products.map(product => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      </section>

      <Box display='flex' alignItems='center' justifyContent='center'>
        <Button
          variant='outlined'
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          sx={buttonSx}
          aria-label='Previous page'
        >
          Prev
        </Button>

        <Pagination
          variant='outlined'
          shape='rounded'
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          renderItem={item =>
            item.type === 'previous' || item.type === 'next' ? null : (
              <PaginationItem {...item} />
            )
          }
          sx={{
            '& .MuiPaginationItem-root': {
              width: 60,
              height: 60,
              margin: '0 10px',
              fontSize: '20px',
              border: 'none',
              borderRadius: 3,
            },
            '& .Mui-selected, & .Mui-selected:hover': {
              backgroundColor: '#B88E2F !important',
              color: 'white !important',
            },
            '& .MuiPaginationItem-page, & .MuiPaginationItem-page:hover': {
              backgroundColor: '#F9F1E7',
              color: 'black',
            },
          }}
        />

        <Button
          variant='outlined'
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          sx={buttonSx}
          aria-label='Next page'
        >
          Next
        </Button>
      </Box>
    </>
  );
}

export default Shop;
