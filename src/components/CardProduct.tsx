import { Link } from 'react-router-dom';
import { RiShareFill, RiArrowLeftRightFill } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import { ProductProps } from '../types/productTypes';

interface ItemProps {
  icon: JSX.Element;
  label: string;
  fclick: () => void;
}

function ActionItem({ icon, label, fclick }: ItemProps) {
  return (
    <button onClick={fclick} className='flex items-center gap-1'>
      {icon}
      <p className='text-base font-semibold text-mwhite'>{label}</p>
    </button>
  );
}

function CardProduct(product: ProductProps) {
  const actions = [
    {
      icon: <RiShareFill size={16} color='#FFF' />,
      label: 'Share',
      fclick: () => {},
    },
    {
      icon: <RiArrowLeftRightFill size={16} color='#FFF' />,
      label: 'Compare',
      fclick: () => {},
    },
    {
      icon: <FaRegHeart size={16} color='#FFF' />,
      label: 'Like',
      fclick: () => {},
    },
  ];

  return (
    <div className='group relative h-fit w-[285px]'>
      <div className='absolute hidden h-full w-full flex-col items-center justify-center transition-all duration-500 hover:bg-mblack/50 group-hover:flex'>
        <Link
          to={`/product/${product.id}`}
          className='bg-mwhite px-12 py-3 text-base font-semibold text-mgold'
        >
          See Details
        </Link>
        <div className='mt-5 flex flex-row gap-4'>
          {actions.map(action => (
            <ActionItem key={action.label} {...action} />
          ))}
        </div>
      </div>

      <div className='h-[284px] w-full'>
        {(product.is_new || product.discount_percent) && (
          <div
            className={`absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full ${product.discount_percent ? 'bg-mred' : 'bg-mgreen'}`}
          >
            <span className='font-medium text-mwhite'>
              {product.discount_percent
                ? `-${product.discount_percent}%`
                : 'New'}
            </span>
          </div>
        )}
        <img
          src={product.image_link}
          alt={`product ${product.name}`}
          className='h-full w-full object-cover'
        />
      </div>

      <div className='flex h-[145px] w-full flex-col justify-between bg-mzinc p-4'>
        <h2 className='text-2xl font-semibold text-msubtitle'>
          {product.name}
        </h2>
        <span className='text-base text-mspan'>{product.description}</span>
        <div className='flex justify-between'>
          <strong className='text-xl text-msubtitle'>Rp {product.price}</strong>
          {product.discount_price && (
            <del className='text-base text-mdiscount'>
              Rp {product.discount_price}
            </del>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
