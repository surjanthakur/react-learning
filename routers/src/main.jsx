import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './app.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Layout from './layout';

// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/contact', element: <Contact /> },
//     ],
//   },
// ]);

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
