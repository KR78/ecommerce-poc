import React from 'react';
import pageNumberGenerator from 'src/helpers/pageNumberGenerator';
import Button from 'src/components/common/Button';
import style from './PageNavigation.module.scss';

interface PageNavigationProps {
  prevPage?: number
  nextPage?: number
  numberOfPages: number
  currentPage: number
  className?: string
  onSelectPage: (v: string | number) => void
}

const PageNavigation = (
  {
    prevPage,
    nextPage,
    onSelectPage,
    numberOfPages,
    currentPage,
    className,
  }: PageNavigationProps,
) => {
  const getButtonClassNames = (pageNumber: string | number) => {
    let clsName = style.pageButton;
    if (pageNumber === '...') {
      clsName += ` ${style.pageEllipses}`;
    }
    if (currentPage === pageNumber) {
      clsName += ` ${style.pageButtonActive}`;
    }
    return clsName;
  };

  const pages = pageNumberGenerator({
    currentPage: currentPage,
    numberOfPages: numberOfPages,
  });

  return (
    (numberOfPages && currentPage && numberOfPages > 1)
      ? (
        <ul className={`${style.pageNumbers} ${className}`}>
          {
            pageNumberGenerator({
              numberOfPages,
              currentPage,
            })
              .map((pageNumber, i) => (
                <>
                  {
                    i === 0
                    && (
                      <Button
                        className={`${!prevPage ? style.disabled : ''}`}
                        onClick={() => prevPage ? onSelectPage(prevPage) : null}
                      >
                        <img src="/icons/previous.svg" alt="Previous Icon" />
                      </Button>
                    )
                  }
                  <li key={`${pageNumber}-${i}`}>
                    <Button
                      key={`${pageNumber}-${i}`}
                      unStyled
                      onClick={() => {
                        if (pageNumber !== '...') {
                          onSelectPage(pageNumber);
                        }
                      }}
                      className={getButtonClassNames(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  </li>
                  {
                    i + 1 === pages.length
                    && (
                      <Button
                        className={`${prevPage ? style.disabled : ''}`}
                        onClick={nextPage ? () => onSelectPage(nextPage) : () => null}
                      >
                        <img src="/icons/next.svg" alt="Next Icon" />
                      </Button>
                    )
                  }
                </>
              ))
          }
        </ul>
      )
      : null
  );
};

PageNavigation.defaultProps = {
  className: '',
};

export default PageNavigation;