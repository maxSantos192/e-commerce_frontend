import CategorySection from '../sections/CategorySection';
import Container from '../components/Container';
import ProductSection from '../sections/ProductSection';
import ServiceInfo from '../components/ServiceInfo';

function Home() {
  return (
    <>
      <div className='relative flex h-[30vh] w-full md:h-[50vh]'>
        <img
          className='left-0 top-0 h-full w-full object-cover'
          src='https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mMPHDgfZvrPt5P1TKIUgGHMBSkCb96lRxl9nusHwvXXh--Zn2haDuqA0f2RmD-ZU1f9cqSI7VxfjfQX3HkZ2f7f-32UwNyC3OSAGbWw7haLRnnOVzgJ3H57aTiOZPgHiO9O-YNFgy624PuIcQzuUWSjUB~9yB2XMWkmAjNjmMXKjI6s1H~oPO6yGLH8Ez5Xb-QdfLDanTIgxIMMJQVQNfh9PEjKTH87SZIvinYGwCYIb3pglr~Ks8-v9AycXze5xElqoyraOtFAH-tJ-~bwqvud1uDQHva8KwR69OOD0Y8OP20JkGSM4Hm8TA9nbUA70~WELHSXCMVs5kgX3T4su6g__'
          alt='banner'
        />
        <div className='absolute bottom-0 right-0 z-10 block w-3/4 bg-mbanner px-8 py-8 md:right-20 md:h-3/5 md:w-1/3 md:py-14'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
      </div>

      <Container>
        <CategorySection />
        <ProductSection />
      </Container>
      <ServiceInfo />
    </>
  );
}

export default Home;
