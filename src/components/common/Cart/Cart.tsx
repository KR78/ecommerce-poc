import { useCartProvider } from '@/components/providers/cartProvider';
import {
  Currency,
  CartItems,
} from '@/types';
import React from 'react';
import Button from '../Button';
import style from './Cart.module.scss';

interface CartProps {
  items: CartItems;
}

const Cart = ({
  items,
}: CartProps) => {
  const {
    isCartOpen,
    updateCart,
    setIsCartOpen,
  } = useCartProvider();

  if (isCartOpen) {
    return (
      <article className={style.wrapper}>
        <header>
          <Button
            unStyled
            onClick={() => setIsCartOpen(false)}
          >
            <img src="icons/close.svg" alt="Close Icon" />
          </Button>
        </header>
        {
          items
            && items.length > 0
            ? (
              <>
                {
                  items.map(({
                    id,
                    name,
                    image,
                    price,
                  }, index) => (
                    <article
                      key={id || index}
                      className={style.cartItem}
                    >
                      <section className={style.details}>
                        <span className={style.name}>
                          {name || ''}
                        </span>
                        <span className={style.price}>
                          {price ? `${Currency.USD}${price.toFixed(2)}` : ''}
                        </span>
                      </section>
                      <section className={style.image}>
                        <img src={image?.src || ''} alt={image?.alt} />
                      </section>
                    </article>
                  ))
                }
                <Button
                  unStyled
                  onClick={() => updateCart([])}
                  className={style.clearButton}
                >
                  Clear
                </Button>
              </>
            )
            : (
              <span className={style.noItems}>
                There are no items in your cart :(
              </span>
            )
        }
      </article>
    )
  }
  return (<></>);

}
export default Cart;
