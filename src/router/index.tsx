import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/pages/App';

const ProductCreate = lazy(() => import('src/pages/admin/products/create'));
const ProductEdit = lazy(() => import('src/pages/admin/products/edit'));
const AdminProducts = lazy(() => import('src/pages/admin/products'));

export const ROUTES = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/admin',
    children: [
      {
        path: 'products',
        element: <AdminProducts />
      },
      {
        path: 'products/create',
        element: <ProductCreate />
      },
      {
        path: 'products/edit/:id',
        element: <ProductEdit />
      }
    ]
  }
];

export default createBrowserRouter(ROUTES);
