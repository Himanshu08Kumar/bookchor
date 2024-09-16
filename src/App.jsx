import React from 'react'
import Header from './components/Header'
import Coupons from './components/Coupons'
import SearchBox from './components/SearchBox'
import Books from './components/Books'
import Caurosel from './components/Caurosel'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBooks from './components/AllBooks'


const App = () => {
  return (
    <>
      <Coupons/>
      <SearchBox/>
      <Header />
      <Caurosel/>
      <Books />
      <AllBooks/>
    </>
  )
}

export default App
