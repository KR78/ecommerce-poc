import React from 'react';
import Image from 'next/image';
import style from './ImageHolder.module.scss';

interface ImageHolderProps {
  src: string,
  alt: string,
  isFeatured: boolean
  isBestSeller: boolean
}

const ImageHolder = ({
  src,
  alt,
  isFeatured,
  isBestSeller,
}: ImageHolderProps) => {
  return (
    <article
      className={style.wrapper}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
      />
    </article>
  );
};

export default ImageHolder;
