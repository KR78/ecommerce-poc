import { Dimensions } from '@/types';
import React from 'react';
import convertKBToMB from './helpers/convertKBToMB';
import style from './ProductDetails.module.scss';

interface ProductDetailsProps {
  size: number | undefined,
  dimensions: Dimensions
}

const ProductDetails = ({
  size,
  dimensions,
}: ProductDetailsProps) => {
  return (
    <article className={style.wrapper}>
      <header className={style.header}>
        Details
      </header>
      <section className={style.details}>
        {
          dimensions
          && dimensions?.width
          && dimensions?.height
          && (
            <span>
              {`Size: ${dimensions.width} x ${dimensions.height} pixel`}
            </span>
          )
        }
        {
          size
          && (
            <span>
              {`Size: ${convertKBToMB(size)} mb`}
            </span>
          )
        }
      </section>
    </article>
  );
};

export default ProductDetails;
