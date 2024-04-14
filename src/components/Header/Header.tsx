import "./Header.css";
import Menu from "../../assets/Menu.png";
import Cancel from "../../assets/Cancel.png";
import LogoDark from "../../assets/Pixema-dark.png";
import LogoLight from "../../assets/Pixema-light.png";
import SearchInput from "../SearchInput/SearchInput";
import {useState, useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import UserSignIn from "../UserSignIn/UserSignIn";
import UserAuth from "../UserAuth/UserAuth";
import Home from "../../assets/Home.png";
import Trend from "../../assets/Trend.png";
import Favorite from "../../assets/Favorite.png";
import Settings from "../../assets/Settings.png";
import Filter from "../../assets/Filter.png";
import Moon from "../../assets/Moon.png";
import Sun from "../../assets/Sun.png";
import { Link } from 'react-router-dom';

export default function Header() {

    const [isVisibleMenu, setIsVisibleMenu] = useState(false);
    const [colorTheme, setColorTheme] = useContext(myContext);

    function changeColorDark () {
        setColorTheme ("dark-theme");
    }

    function changeColorLight () {
        setColorTheme ("light-theme");
    }

    return (
    <header className={`header-${colorTheme}`}>
        <div className="header-container">
            <img src={isVisibleMenu ? Cancel : Menu} alt="Menu" className="header-menu" onClick={() => {setIsVisibleMenu(!isVisibleMenu)}}></img>
            <div className={isVisibleMenu ? `additional-menu-${colorTheme}` : "display-none"}>
                <Link to="/" className="link-decoration additional-menu-point"><div className={`additional-menu-point-${colorTheme}`}>
                    <img src={Home} alt="Home-icon" className="additional-menu-point-icon"></img>
                    <div className="additional-menu-point-name">Home</div>
                </div></Link>
                <div className={`additional-menu-point-${colorTheme}`}>
                    <img src={Trend} alt="Trend-icon" className="additional-menu-point-icon"></img>
                    <div className="additional-menu-point-name">Trends</div>
                </div>
                <Link to="/favorites" className="link-decoration additional-menu-point"><div className={`additional-menu-point-favorite-${colorTheme}`}>
                    <img src={Favorite} alt="Favorite-icon" className="additional-menu-point-icon"></img>
                    <div className="additional-menu-point-name">Favorites</div>
                </div></Link>
                <div className={`additional-menu-point-${colorTheme}`}>
                    <img src={Settings} alt="Favorite-icon" className="additional-menu-point-icon"></img>
                    <div className="additional-menu-point-name">Settings</div>
                </div>
                <div className={`additional-menu-point-${colorTheme}`}>
                    <img src={Filter} alt="Filter-icon" className="additional-menu-point-icon"></img>
                    <div className="additional-menu-point-name">Filters</div>
                </div>
                <div className="additional-menu-point-theme">
                    <div className="additional-menu-point-theme-box" onClick={changeColorDark}>
                        <img src={Moon} alt="darktheme-icon" className="theme-icon"></img>
                    </div>
                    <div className="additional-menu-point-theme-box" onClick={changeColorLight}>
                        <img src={Sun} alt="lightheme-icon" className="theme-icon"></img>
                    </div>
                </div>
            </div>
            <img src={colorTheme === "dark-theme" ? LogoDark : LogoLight} alt="Logo" className="header-logo"></img>
            <SearchInput content="Text" helpText="Search" isDisabled={false}></SearchInput>
            <UserAuth userName="Artem Lapitsky"></UserAuth>
        </div>
    </header>
    );
}
