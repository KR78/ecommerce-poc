import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { useCartProvider } from '@/components/providers/cartProvider';
import style from './NavBar.module.scss';

const NavBar = () => {
  const cartData = useCartProvider();

  const { isCartOpen, setIsCartOpen, cartItemsCount } = cartData;

  return (
    <nav
      className={style.wrapper}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={style.logo}>
        <Link href="/">
          <a>
            <Image
              src="/logo.svg"
              alt="Bejamas Logo"
              height={200}
              width={200}
            />
          </a>
        </Link>
      </div>
      <div className={style.topRightMenu}>
        <div className={style.cart}>
          <Button onClick={() => setIsCartOpen(!isCartOpen)}>
            <Image
              src="/icons/cart.svg"
              alt="Cart Icon"
              height={50}
              width={50}
            />
          </Button>
          <span className={style.cartItemsCount}>{cartItemsCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
