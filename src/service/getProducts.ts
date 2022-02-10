import { Products } from '@/types';
import {
  gql,
  useQuery,
  ApolloError,
} from '@apollo/client';

const FetchProducts = (): {
  loading: boolean,
  error: ApolloError | undefined,
  data: {
    products: Products
  },
} => {
  const GET_PRODUCTS = gql`
    query GetProducts {
      products {
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
