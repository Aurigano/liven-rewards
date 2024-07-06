import loyalty from "../assets/loyalty.png";
import PropTypes from "prop-types";

function CouponCard({ buyValue = 300, bonusValue = 30 }) {
  return (
    <div
      className="h-24 bg-white border-2 border-disable-gray rounded-2xl p-4 flex justify-between items-center w-full max-w-420px md:max-w-360px min-w-350px shadow-md hover:shadow-lg cursor-pointer"
      onClick={() => window.open("https://liven.love/", "_self")}
    >
      <div className="flex flex-col text-left text-black font-semibold">
        <span className="text-lg">Buy</span>
        <span className="text-3xl">{`$${buyValue}`}</span>
      </div>
      <img src={loyalty} alt="Loyalty" width={"50px"} />
      <div className="flex flex-col text-right text-accent-green font-semibold">
        <span className="text-lg">Bonus</span>
        <span className="text-3xl">{`$${bonusValue}`}</span>
      </div>
    </div>
  );
}

export default CouponCard;

CouponCard.propTypes = {
  buyValue: PropTypes.number.isRequired,
  bonusValue: PropTypes.number.isRequired,
};
