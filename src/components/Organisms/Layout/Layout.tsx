import Header from '../Header';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
