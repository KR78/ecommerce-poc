import React,
{
  useState,
  useEffect,
} from 'react';
import {
  ApolloError,
} from '@apollo/client';
import {
  Product,
  Products,
} from '@/types';
import getProducts from '@/service/getProducts';
import FeaturedProduct from '@/components/common/FeaturedProduct';
import Button from '@/components/common/Button';
import BreadCrumb from '@/components/common/BreadCrumb';
import { useFilterProvider } from '@/components/providers/filterProvider';
import ProductsList from '@/components/common/ProductsList';
import PageNavigation from '@/components/common/PageNavigation';
import style from './Home.module.scss';

const Home = () => {
  const itemsPerPage = 6;

  const [hasError, setHasError] = useState<ApolloError>();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Products>();
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredProduct, setFeaturedProduct] = useState<Product>();

  const { setisFilterOpen } = useFilterProvider();

  const { loading, error, data, refetch } = getProducts({ itemsPerPage, offset });

  useEffect(() => {
    if (error) return setHasError(error);
    if (loading) return setIsLoading(loading);

    if (data && data.products && data.products_aggregate.aggregate.count) {
      const {
        products,
      } = data;

      setProducts(products);

      const getFeaturedProduct = products.filter((product) => product?.featured)[0];
      const getNumberOfPages = (data.products_aggregate.aggregate.count / itemsPerPage) || 0;

      setNumberOfPages(getNumberOfPages);
      setFeaturedProduct(getFeaturedProduct);
      setIsLoading(false);
    }

  }, [loading, error, data]);


  const handleOnPageClick = (pageNumber: number) => {
    const getOffset = (pageNumber - 1) * itemsPerPage;

    setCurrentPage(pageNumber);
    setOffset(getOffset);

    refetch();
  };

  if (!hasError) {
    return (
      <article className={style.wrapper}>
        <section>
          {
            featuredProduct
            && (
              <FeaturedProduct
                product={featuredProduct}
              />
            )
          }
        </section>
        <section className={style.breadCrumbAndSortHeader}>
          <BreadCrumb
            page='Photography'
            subPage='Premium Photos'
          />
          <Button
            unStyled
            className={style.sort}
            onClick={() => setisFilterOpen(true)}
          >
            <span>
              <img src="icons/filter.svg" alt="Filter Icon" />
            </span>
          </Button>
        </section>
        <section>
          {
            products
            && products.length > 0
            && (
              <>
                <ProductsList
                  products={products}
                />
                <PageNavigation
                  onSelectPage={(v) => handleOnPageClick(v as number)}
                  numberOfPages={numberOfPages}
                  currentPage={currentPage}
                />
              </>
            )
          }
        </section>
      </article>
    );
  }
  // TODO: check if isLoading and handle page loading by adding Skeleton loaders to components
};

export default Home;
