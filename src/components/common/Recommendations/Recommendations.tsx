import { Products } from '@/types';
import React from 'react';
import style from './Recommendations.module.scss';

interface RecommendationsProps {
  products: Products
}

const Recommendations = ({
  products,
}: RecommendationsProps) => {
  return (
    <article>
      People also buy
    </article>
  );
};

export default Recommendations;
