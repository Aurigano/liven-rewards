import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="flex justify-center items-center mt-auto">
      <a href="https://liven.love/" rel="noopener noreferrer">
        <img src={logo} alt="Logo" width={"70px"} />
      </a>
    </div>
  );
}

export default Footer;
