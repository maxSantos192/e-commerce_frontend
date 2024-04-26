import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { ProductProps } from '../types/productTypes';
import api from '../services/api';
import Rating from '@mui/material/Rating';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Container from '../components/Container';
import CardProduct from '../components/CardProduct';

function ProductDetail() {
  const [product, setProduct] = useState<ProductProps>();
  const [relatedProducts, setRelatedProducts] = useState<ProductProps[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [limitItems, setLimitItems] = useState<number>(4);
  const [amount, setAmount] = useState<number>(1);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/product/${id}`);
        setProduct(response?.data);

        if (response.data?.category_id) {
          const categoryResponse = await api.get(
            `/category/${response.data.category_id}`
          );
          setCategoryName(categoryResponse.data.name);
        }

        if (response.data?.category_id) {
          const relatedResponse = await api.get(`/product/category`, {
            params: {
              categoryId: response.data.category_id,
              limit: limitItems,
            },
          });
          setRelatedProducts(relatedResponse.data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id, limitItems]);

  function handleShowMore() {
    if (limitItems === 8) {
      return;
    }
    setLimitItems(limitItems * 2);
  }

  function handleAmount() {
    if (amount <= 1) {
      return;
    }
    setAmount(amount - 1);
  }

  return (
    <>
      <div className='flex h-auto w-full bg-mfilter md:h-20'>
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between p-4 px-8'>
          <div className='flex flex-row items-center justify-center gap-4 '>
            <Link to={'/'} className='text-mline hover:text-mblack'>
              Home
            </Link>
            <IoIosArrowForward />
            <Link to={'/shop'} className='text-mline'>
              Shop
            </Link>
            <IoIosArrowForward />
            <div className=' block h-9 w-[2px] bg-mline'></div>
            <p>{product?.name}</p>
          </div>
        </div>
      </div>

      <Container>
        <div className='mt-10 flex flex-col justify-center gap-20 md:flex-row'>
          <div className='md:max-h-[27rem]'>
            <img
              className='h-full w-full object-cover'
              src={product?.image_link}
              alt={`product ${product?.name}`}
            />
          </div>

          <div className='space-y-2'>
            <h1 className='text-[42px] text-mblack'>{product?.name}</h1>
            <span className='text-2xl text-mline'>Rs. {product?.price}</span>

            <div className='my-2 flex items-center gap-4'>
              <Rating name='simple-controlled' value={3} />
              <div className=' block h-9 w-[2px] bg-mline'></div>
              <span className='text-[13px] text-mline'>5 Customer Review</span>
            </div>

            <p className='text-balance text-[13px]'>
              {product?.large_description}
            </p>

            <p className='pt-3 text-sm text-mline'>Size</p>
            <div className='flex gap-5'>
              <button className='h-8 w-8 rounded-md bg-mgold'>L</button>
              <button className='h-8 w-8 rounded-md bg-mgold'>XL</button>
              <button className='h-8 w-8 rounded-md bg-mgold'>XS</button>
            </div>

            <p className='pt-3 text-sm text-mline'>Color</p>
            <div className='space-x-4'>
              <button className='h-7 w-7 rounded-full bg-mpurple'></button>
              <button className='h-7 w-7 rounded-full bg-mblack'></button>
              <button className='h-7 w-7 rounded-full bg-mgold'></button>
            </div>

            <div className='flex flex-col gap-4 pb-9 pt-3 md:flex-row'>
              <div className='flex items-center justify-center gap-4 rounded-xl border border-mline py-4 md:w-32'>
                <button
                  className='h-full w-full'
                  onClick={e => {
                    if (amount > 1) {
                      setAmount(amount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{amount}</span>
                <button
                  className='h-full w-full'
                  onClick={e => setAmount(amount + 1)}
                >
                  +
                </button>
              </div>
              <button className='rounded-xl border border-mblack px-5 py-3 text-xl'>
                Add To Cart
              </button>
              <button className='rounded-xl border border-mblack px-5 py-3 text-xl'>
                + Compare
              </button>
            </div>

            <div className='h-[1px] w-full bg-mline'></div>

            <div className='flex flex-col py-9 text-mline'>
              <div className='mb-1 flex'>
                <div className='w-24'>SKU</div>
                <div>: SS001</div>
              </div>
              <div className='mb-1 flex'>
                <div className='w-24'>Category</div>
                <div>: {categoryName}</div>
              </div>
              <div className='mb-1 flex'>
                <div className='w-24'>Tags</div>
                <div>: Sofa, Chair, Home, Shop</div>
              </div>
              <div className='flex items-center'>
                <div className='w-24'>Share</div>
                <div>
                  :
                  <FaFacebook
                    color='#000'
                    className='ml-2 inline cursor-pointer'
                  />
                  <FaLinkedinIn
                    color='#000'
                    className='ml-2 inline cursor-pointer'
                  />
                  <FaTwitter
                    color='#000'
                    className='ml-2 inline cursor-pointer'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className='h-[1px] w-full bg-mline'></div>

      <Container>
        <div className='my-10 flex flex-col items-center justify-center gap-10'>
          <div className='flex gap-11'>
            <button className='text-2xl font-medium'>Description</button>
            <button className='text-2xl font-medium'>
              Additional Information
            </button>
          </div>
          <p className='text-mline'>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
            <br />
            <br />
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-8 py-10'>
          <h1 className='text-4xl font-medium'>Related Products</h1>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
            {relatedProducts.map(product => (
              <CardProduct key={product.id} {...product} />
            ))}
          </div>

          <button
            className='border-2 px-10 py-2 text-mgold'
            onClick={handleShowMore}
          >
            Show more
          </button>
        </div>
      </Container>
    </>
  );
}

export default ProductDetail;
