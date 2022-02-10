import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import CartProvider from 'src/components/providers/cartProvider';
import FilterProvider from 'src/components/providers/filterProvider';
import Main from '../Main';
import NavBar from '../NavBar';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const client = new ApolloClient({
  uri: 'https://mint-moth-74.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret':
      '45rHkPeCPSZUhcpvcpEyPyrFT0mHGbpd6NT8Cv74FVzYScLOqPA5sWeYE9Y2Eqq3',
  },
});

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <ApolloProvider client={client}>
    <CartProvider>
      <NavBar />
      <FilterProvider>
        <Main>
          {children}
        </Main>
      </FilterProvider>
    </CartProvider>
  </ApolloProvider>
);

export default LayoutWrapper;
