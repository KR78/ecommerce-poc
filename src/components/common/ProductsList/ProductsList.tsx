import React from 'react';
import {
  Currency,
  Products,
} from '@/types';
import ImageHolder from '../ImageHolder';
import Button from '../Button';
import { useCartProvider } from '@/components/providers/cartProvider';
import style from './ProductsList.module.scss';

interface ProductsListProps {
  products: Products
}

const ProductsList = ({
  products,
}: ProductsListProps) => {
  const { addProductToCart } = useCartProvider()
  return (
    <article className={style.wrapper}>
      {
        products
        && products.length > 0
        && products.map((product) => (
          <article
            key={product?.id}
            className={style.productWrapper}
          >
            <ImageHolder
              image={product?.image}
              className={style.productImage}
              bestSeller={product?.bestSeller}
            />
            <Button
              unStyled
              className={style.addToCartBtn}
              onClick={() => addProductToCart(product)}
            >
              Add to Cart
            </Button>
            <section className={style.productDetails}>
              <span className={style.productCategory}>
                {product?.category?.name || ''}
              </span>
              <h1 className={style.productName}>
                {product?.name || ''}
              </h1>
              <h3 className={style.productPrice}>
                {product?.price ? `${Currency.USD} ${product.price.toFixed(2)}` : ''}
              </h3>
            </section>
          </article>
        ))
      }
    </article>
  );
};

export default ProductsList;
