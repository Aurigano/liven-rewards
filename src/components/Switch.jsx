import PropTypes from "prop-types";

const Switch = ({ checked, onChange }) => {
  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-300 ${
        checked ? "bg-accent-pink" : "bg-disable-gray"
      }`}
      onClick={onChange}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          checked ? "translate-x-6" : ""
        }`}
      />
    </div>
  );
};

export default Switch;

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
