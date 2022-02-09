import React from 'react';
import LayoutWrapper from './components/LayoutWrapper';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

export default Layout;
