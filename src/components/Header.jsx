import React from 'react'

const Header = () => {
  return (
    <div style={{
      padding:"0 2%"
    }}>
        {/* <select name="" id="">
            <option value="">Shop By Category</option>
            <option value="">Fiction</option>
            <option value="">Non-Fiction</option>
            <option value="">Children</option>
            <option value="">Text Books</option>
        </select>

        <select name="" id="">
            <option value="">Shop By Store</option>
            <option value="">NCERT & Competition Books</option>
            <option value="">Everyone is talking about stores</option>
            <option value="">Investors Clinic Store</option>
            <option value="">Mind Body and Spirit Best Seller</option>
            <option value="">Manga Store</option>
            <option value="">Hindi Literature</option>
            <option value="">Agatha Christie - Crime Thriller Mystery</option>
            <option value="">Used Books</option>
        </select> */}

        <ul className='couponsList coupons-text1'>
            <li>Used Books</li>
            <li>39 Store</li>
            <li>59 Store</li>
            <li>99 Store</li>
            <li>Hindi Literature</li>
            <li>Children</li>
            <li>Text Books</li>
            <li>Harry Potter Store</li>
            <li>Manga Store</li>
            <li>Lock The Box</li>
            <li>Literature and Fiction</li>
            <li>India Top Read</li>
        </ul>
      
    </div>
  )
}

export default Header
