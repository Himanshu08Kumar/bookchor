import React from "react";
import { SiCodeblocks } from "react-icons/si";
import { GiBookshelf } from "react-icons/gi";
import { RiPhoneFill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";

const Coupons = () => {
  return (
    <>
      <div className="coupons">
        <div className="coupons-text1">
      <p className="coupon-text">Get Rs50 extra off, Use Code : APP50 GET APP</p>
      <ul className="couponsList">
        <li key="1"><SiCodeblocks className="couponsList1"/>Lock The Box</li>
        <li key="2"><GiBookshelf className="couponsList1"/>Wholesale</li>
        <li key="3"><RiPhoneFill className="couponsList1"/>Call: 7903075829</li>
        <li key="4"><FaTruckFast className="couponsList1"/>Track Order</li>
      </ul>
      </div>
    </div>
    </>
  );
};

export default Coupons;
