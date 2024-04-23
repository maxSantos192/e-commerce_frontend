import { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return <div className='mx-auto w-full max-w-7xl px-8'>{children}</div>;
}

export default Container;
