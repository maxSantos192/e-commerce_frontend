import trophy from '../assets/icons/trophy.svg';
import guarantee from '../assets/icons/guarantee.svg';
import shipping from '../assets/icons/shipping.svg';
import support from '../assets/icons/support.svg';

const ServiceInfo = () => {
  const features = [
    {
      icon: trophy,
      title: 'High Quality',
      description: 'crafted from top materials',
    },
    {
      icon: guarantee,
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      icon: shipping,
      title: 'Free Shipping',
      description: 'Order over $150',
    },
    {
      icon: support,
      title: '24/7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <div className='mt-16 flex w-full justify-center bg-minfo py-20'>
      <div className='mx-auto flex w-full max-w-7xl justify-center px-8'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-row items-center space-x-4 text-left'
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className='flex-shrink-0'
              />
              <div>
                <h3 className='text-2xl font-semibold'>{feature.title}</h3>
                <p className='text-xl text-mspan'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
