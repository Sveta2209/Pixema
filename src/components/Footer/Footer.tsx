import './Footer.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";

export default function Footer() {

    const [colorTheme] = useContext(myContext);

        return (
        <footer className={`footer-container-${colorTheme}`}>
            <p className="footer-text">© All Rights Reserved</p>
        </footer>
    );
}