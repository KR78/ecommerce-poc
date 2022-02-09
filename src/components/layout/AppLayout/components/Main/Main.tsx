import React from 'react';
import Cart from '@/components/common/Cart';
import getProducts from '@/service/getProducts';
import { useCartProvider } from 'src/components/providers/cartProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Main = ({ children }: LayoutProps) => {
  const { cart } = useCartProvider();

  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState('');

  const { loading, error, data } = getProducts();

  React.useEffect(() => {
    if (loading) setIsLoading(loading);

    if (error) setHasError(`${error}`);

    setIsLoading(false);

  }, [cart, error, loading, data]);

  console.log({
    isLoading,
    hasError,
  })

  return (
    <>
      <div>
        <main>
          <div>
            {children}
          </div>
        </main>
      </div>
      <Cart items={cart} />
    </>
  );
};

export default Main;
