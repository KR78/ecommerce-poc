import React from 'react';
import Cart from '@/components/common/Cart';
import { useCartProvider } from 'src/components/providers/cartProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Main = ({ children }: LayoutProps) => {
  const { cart } = useCartProvider();

  return (
    <>
      <main>
        {children}
      </main>
      <Cart items={cart} />
    </>
  );
};

export default Main;
