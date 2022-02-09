import { gql, useQuery } from '@apollo/client';

const FetchProducts = () => {
  const GET_PRODUCTS = gql`
    query GetProducts {
      products {
        id
        name
        image {
          src
          alt
        }
        price
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
