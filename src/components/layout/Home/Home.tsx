import React from 'react';
import { Product } from '@/types';
import getProducts from '@/service/getProducts';
import FeaturedProduct from '@/components/common/FeaturedProduct';

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [featuredProduct, setFeaturedProduct] = React.useState<Product>();
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
    <article>
      {
        featuredProduct
        && (
          <FeaturedProduct
            product={featuredProduct}
          />
        )
      }
    </article>
  );
};

export default Home;
