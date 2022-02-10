import { Categories } from '@/types';
import {
  gql,
  useQuery,
  ApolloError,
} from '@apollo/client';

const FetchProducts = (): {
  loading: boolean,
  error: ApolloError | undefined,
  data: {
    categories: Categories
  },
} => {
  const GET_PRODUCTS = gql`
    query GetCategories {
      categories {
        id
        name
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
