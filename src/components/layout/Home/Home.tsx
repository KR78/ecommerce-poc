import React from 'react';
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
import style from './Home.module.scss';

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState<Products>();
  const [featuredProduct, setFeaturedProduct] = React.useState<Product>();

  const { setisFilterOpen } = useFilterProvider();
  const { loading, error, data } = getProducts();

  React.useEffect(() => {
    if (loading) return setIsLoading(loading);

    if (data && data.products) {
      const {
        products,
      } = data;

      setProducts(products);

      const getFeaturedProduct = products.filter((product) => product?.featured)[0];

      setFeaturedProduct(getFeaturedProduct);
      setIsLoading(false);
    }

  }, [loading, error, data])

  return !isLoading
    && (
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
              <ProductsList
                products={products}
              />
            )
          }
        </section>
      </article>
    );
};

export default Home;
