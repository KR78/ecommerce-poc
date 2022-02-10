import { Recommendations } from '@/types';
import Link from 'next/link';
import React from 'react';
import ImageHolder from '../ImageHolder';
import style from './Recommendations.module.scss';

interface RecommendationsProps {
  products: Recommendations
}

const Recommendations = ({
  products,
}: RecommendationsProps) => {
  return (
    <article className={style.wrapper}>
      <header className={style.header}>
        People also buy
      </header>
      <section className={style.imagesWrapper}>
        {
          products
          && products.map((product, index) => (
            <Link
              href="#"
              key={`${product?.src || ''}-${index}`}
            >
              <a>
                <ImageHolder
                  image={product}
                  placeHolderSrc="https://picsum.photos/97/122"
                />
              </a>
            </Link>
          ))
        }
      </section>
    </article>
  );
};

export default Recommendations;
