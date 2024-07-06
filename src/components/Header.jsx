import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="flex justify-between items-center w-full">
      <a href="https://liven.love/" rel="noopener noreferrer">
        <img src={logo} alt="Logo" width={"70px"} />
      </a>
      <button
        className={`text-white px-4 py-2 bg-accent-pink rounded-20px border-none box-border cursor-pointer text-sm font-medium`}
        onClick={() => window.open("https://app.liven.com.au/", "_self")}
      >
        Get App
      </button>
    </div>
  );
}

export default Header;
