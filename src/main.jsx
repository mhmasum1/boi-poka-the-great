import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('booksData.json')
      },
      {
        path: 'ListedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
