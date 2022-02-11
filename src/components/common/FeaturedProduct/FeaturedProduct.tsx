import React from 'react';
import { Product } from '@/types';
import Button from '../Button';
import ImageHolder from '../ImageHolder';
import Recommendations from '../Recommendations';
import ProductDetails from '../ProductDetails';
import { useCartProvider } from '@/components/providers/cartProvider';
import style from './FeaturedProduct.module.scss';

interface FeaturedProductProps {
  product: Product,
}

const FeaturedProduct = ({
  product,
}: FeaturedProductProps) => {
  const { addProductToCart } = useCartProvider();

  return (
    <article className={style.wrapper}>
      <header className={style.header}>
        {product?.name || ''}
      </header>
      <ImageHolder
        featured
        image={product?.image}
        placeHolderSrc="https://picsum.photos/385/239"
      />
      <Button
        unStyled
        className={style.addToCartBtn}
        onClick={() => addProductToCart(product)}
      >
        Add to Cart
      </Button>
      <article className={style.productOverview}>
        <section className={style.productDescription}>
          <header className={style.header}>
            <span>About the&nbsp;</span>
            <span className={style.productName}>
              {product?.name || ''}
            </span>
          </header>
          <p className={style.description}>
            {product?.details?.description || ''}
          </p>
        </section>
        <section>
          <Recommendations
            products={product?.details?.recommendations || []}
          />
          <ProductDetails
            size={product?.details?.size || undefined}
            dimensions={product?.details?.dimensions || { width: undefined, height: undefined }}
          />
        </section>
      </article>
    </article>
  );
};

export default FeaturedProduct;
