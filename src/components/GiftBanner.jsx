import Switch from "./Switch";
import PropTypes from "prop-types";
import gift from "../assets/gift.png";

function GiftBanner({ checked, onChange }) {
  return (
    <div className="flex items-center gap-3 py-1 pr-1 pl-3 rounded-full w-fit bg-shaded-gray mb-6 md:mb-0">
      <img src={gift} alt="Gift" width={"14px"} />
      <span className="text-md font-medium">Purchase as gift</span>
      <Switch checked={checked} onChange={onChange} />
    </div>
  );
}

export default GiftBanner;

GiftBanner.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
