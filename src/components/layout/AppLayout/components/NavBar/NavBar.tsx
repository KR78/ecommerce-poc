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
      role="navigation"
      aria-label="main navigation"
    >
      <article
        className={style.wrapper}
      >
        <div className={style.logo}>
          <Link href="/">
            <a>
              <img
                src="/logo.svg"
                alt="Bejamas Logo"
                className={style.logoImage}
              />
            </a>
          </Link>
        </div>
        <div className={style.topRightMenu}>
          <div className={style.cart}>
            <Button onClick={() => setIsCartOpen(!isCartOpen)}>
              <img
                src="/icons/cart.svg"
                alt="Cart Icon"
                className={style.cartIcon}
              />
            </Button>
            <span className={style.cartItemsCount}>{cartItemsCount}</span>
          </div>
        </div>
      </article>
    </nav>
  );
};

export default NavBar;
