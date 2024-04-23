import CardCategory from '../components/CardCategory';

function CategorySection() {
  return (
    <>
      <section className='flex items-center justify-center py-20'>
        <h1 className='text-center text-5xl font-bold text-mtitlecolor'>
          Browse The Range
        </h1>
      </section>
      <CardCategory />
    </>
  );
}

export default CategorySection;
