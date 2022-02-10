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
      <span className={style.page}>{page}</span>
      <img src="/icons/seperator.svg" alt="Seperator Icon" />
      <span className={style.subPage}>&nbsp;{subPage}</span>
    </div>
  )
}

export default BreadCrumb;