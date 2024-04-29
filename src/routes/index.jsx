import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from '../pages/Home'
import CartPage from '../pages/Cart'
import PageHistory from '../pages/OrderHistory'
import PageDetail from '../pages/Detail'
import OrderPage from '../pages/Order'
import Modal from '../components/modal'
import DetailHistory from '../pages/DetailHistory'


const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/riwayat",
      element: <PageHistory />,
    },
    {
      path: "/detail/:id",
      element: <PageDetail />,
    },
    {
      path: "/order",
      element: <OrderPage />,
    },
    {
      path: "/modal",
      element: <Modal />,
    },
    {
      path: "/detailhistory/:index",
      element: <DetailHistory />,
    },
  ]);

  return <RouterProvider router={router} />
};

export default index;