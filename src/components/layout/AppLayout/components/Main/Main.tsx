import React from 'react';
import Cart from '@/components/common/Cart';
import { useCartProvider } from 'src/components/providers/cartProvider';
import { useFilterProvider } from 'src/components/providers/filterProvider';
import FilterComponent from '@/components/common/FilterComponent';
import style from './Main.module.scss';
interface LayoutProps {
  children: React.ReactNode;
}

const Main = ({ children }: LayoutProps) => {
  const { cart } = useCartProvider();
  const { isFilterOpen } = useFilterProvider();

  console.log({
    isFilterOpen,
    useCartProvider: useCartProvider(),
    useFilterProvider: useFilterProvider(),
  })

  return (
    <>
      <main
        className={
          isFilterOpen
            ? style.filterIsOpen
            : ''
          }
      >
        {children}
      </main>
      <Cart items={cart} />
      {
        isFilterOpen
        && (
          <FilterComponent />
        )
      }
    </>
  );
};

export default Main;
