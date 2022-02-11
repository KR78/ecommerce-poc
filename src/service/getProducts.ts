import {
  ProductsDataState,
} from '@/types';
import {
  gql,
  useQuery,
} from '@apollo/client';

interface FetchProductsProps {
  itemsPerPage: number,
  offset: number
}

const FetchProducts = ({
  itemsPerPage,
  offset,
}: FetchProductsProps): ProductsDataState => {
  const GET_PRODUCTS = gql`
    query GetProducts {
      products_aggregate {
        aggregate {
          count
        }
      }
      products(limit: ${itemsPerPage}, offset: ${offset}) {
        id
        name
        price
        category {
          name
        }
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

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);

  return {
    loading,
    error,
    data,
    refetch,
  };
};

export default FetchProducts;
