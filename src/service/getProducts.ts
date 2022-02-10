import {
  Products,
  Aggregate,
} from '@/types';
import {
  gql,
  useQuery,
  ApolloError,
} from '@apollo/client';

const FetchProducts = (): {
  loading: boolean,
  error: ApolloError | undefined,
  data: {
    products_aggregate: Aggregate,
    products: Products
  },
} => {
  const GET_PRODUCTS = gql`
    query GetProducts {
      products_aggregate {
        aggregate {
          count
        }
      }
      products(limit: 6, offset: 0) {
        id
        name
        price
        image {
          src
          alt
        }
        featured
        bestSeller: bestseller
        details
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  return {
    loading,
    error,
    data,
  };
};

export default FetchProducts;
