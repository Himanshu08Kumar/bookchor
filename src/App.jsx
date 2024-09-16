import React from 'react'
import Header from './components/Header'
import Coupons from './components/Coupons'
import SearchBox from './components/SearchBox'
import Books from './components/Books'
import Caurosel from './components/Caurosel'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBooks from './components/AllBooks'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookDetails from './components/BookDetails'


const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:(
      <>
        <Coupons/>
        <SearchBox/>
        <Header />
        <Caurosel/>
        <Books />
        <AllBooks/>
      </>
      )
    },
    {
      path:'/book/:id',
      element:<BookDetails/>
    }
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
