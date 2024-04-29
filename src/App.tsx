import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop/:categoryId?',
        element: <Shop />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
