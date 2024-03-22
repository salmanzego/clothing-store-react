import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { UserProvider } from './context/UserProvider';
import { CartProvider } from './context/CartProvider';
import Layout from './layouts/Layout';
import router from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);

