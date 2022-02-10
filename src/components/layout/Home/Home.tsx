import React from 'react';
import { Product } from '@/types';
import getProducts from '@/service/getProducts';
import FeaturedProduct from '@/components/common/FeaturedProduct';
import Button from '@/components/common/Button';
import BreadCrumb from '@/components/common/BreadCrumb';
import { useFilterProvider } from '@/components/providers/filterProvider';
import style from './Home.module.scss';

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [featuredProduct, setFeaturedProduct] = React.useState<Product>();

  const { setisFilterOpen } = useFilterProvider();
  const { loading, error, data } = getProducts();

  React.useEffect(() => {
    if (loading) return setIsLoading(loading);

    if (data && data.products) {
      const {
        products,
      } = data;
      const getFeaturedProduct = products.filter((product) => product?.featured)[0];
      console.log({
        data,
        getFeaturedProduct,
      });
      setFeaturedProduct(getFeaturedProduct);
    }

  }, [loading, error, data])

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
    </article>
  );
};

export default Home;
