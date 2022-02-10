import { Dimensions } from '@/types';
import React from 'react';
import convertKBToMB from './helpers/convertKbToMB';
import style from './ProductDetails.module.scss';

interface ProductDetailsProps {
  size: number,
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
          && dimensions?.width > 0
          && dimensions?.height > 0
          && (
            <span>
              {`Size: ${dimensions.width} x ${dimensions.height} pixel`}
            </span>
          )
        }
        {
          size
          && size > 0
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
