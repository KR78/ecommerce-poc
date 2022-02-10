import { Dimensions } from '@/types';
import React from 'react';
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
    <article>
      Details
    </article>
  );
};

export default ProductDetails;
