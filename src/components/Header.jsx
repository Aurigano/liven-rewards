import logo from "../assets/logo.png";
import styles from "./header.module.css";

function Header() {
	return (
		<div className="flex justify-between items-center w-full">
			<img src={logo} alt="Logo" width={"70px"} />
			<button className={`${styles.getButton} text-white px-4 py-2`}>
				Get App
			</button>
		</div>
	);
}

export default Header;
