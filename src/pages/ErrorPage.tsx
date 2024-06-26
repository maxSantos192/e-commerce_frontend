import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <main className='bg-white grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-indigo-600 text-base font-semibold'>404</p>
          <h1 className='text-gray-900 mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
            Page not found
          </h1>
          <p className='text-gray-600 mt-6 text-base leading-7'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to={'/'}
              className='bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
            >
              Go back home
            </Link>
            <a href='#' className='text-gray-900 text-sm font-semibold'>
              Contact support <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
