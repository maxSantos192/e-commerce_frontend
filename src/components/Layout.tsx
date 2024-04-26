import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ReactNode, useEffect } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <ScrollToTop />
      <Header />
      {children ? children : <Outlet />}
      <Footer />
    </>
  );
}

export default Layout;
