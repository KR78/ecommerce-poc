import React from 'react';
import { ProductImage } from '@/types';
import style from './ImageHolder.module.scss';

interface ImageHolderProps {
  image: ProductImage,
  className?: string,
  featured?: boolean
  bestSeller?: boolean
  placeHolderSrc?: string,
}

enum ImageHolderTypeLabel {
  FEATURED = 'Photo of the day',
  BEST_SELLER = 'Best Seller'
}

const ImageHolder = ({
  image,
  featured,
  className,
  bestSeller,
  placeHolderSrc,
}: ImageHolderProps) => {
  return (
    <article
      className={`${style.wrapper} ${className}`}
    >
      <img
        src={image?.src || placeHolderSrc}
        alt={image?.alt || 'Product Image'}
      />
      {
        (
          featured
          || bestSeller
        )
        && (
          <span className={featured ? style.featured : style.bestSeller}>
           {
             featured
              ? ImageHolderTypeLabel.FEATURED
              : ImageHolderTypeLabel.BEST_SELLER
           }
          </span>
        )
      }
    </article>
  );
};

ImageHolder.defaultProps = {
  className: '',
  featured: false,
  bestSeller: false,
  placeHolderSrc: '',
}

export default ImageHolder;
