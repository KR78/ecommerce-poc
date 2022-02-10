import React from 'react';
import style from './BreadCrumb.module.scss';

interface BreadCrumbProps {
  page: string,
  subPage: string,
}

const BreadCrumb = ({
  page,
  subPage,
}: BreadCrumbProps) => {
  return (
    <div className={style.wrapper}>
      <span className={style.page}>{`${page} / `}</span>
      <span className={style.subPage}>${subPage}</span>
    </div>
  )
}

export default BreadCrumb;