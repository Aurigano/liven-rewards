import React from "react";
import CouponCard from "./CouponCard";
import PropTypes from "prop-types";

function ListOfCoupons({ values }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full relative flex-wrap justify-center items-center">
      {values &&
        values.map((value, index) => (
          <CouponCard
            key={`${value.buyValue}-${index}`}
            buyValue={value.buyValue}
            bonusValue={value.bonusValue}
          />
        ))}
    </div>
  );
}

export default ListOfCoupons;

ListOfCoupons.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      buyValue: PropTypes.number.isRequired,
      bonusValue: PropTypes.number.isRequired,
    })
  ),
};
