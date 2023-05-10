import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages';
import AtomicDesign from '../pages/atomic-design.tsx';
import Layout from '../components/Organisms/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home key="home" />
  },
  {
    path: '/atomic-design',
    element: <AtomicDesign key="atomic" />
  }
]);

export default function RoutesApp() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}
