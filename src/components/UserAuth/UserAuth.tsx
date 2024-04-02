import './UserAuth.css';
import {useContext, useState} from "react";
import {myContext} from "../../providers/ThemeContext";
import User from "../../assets/User.png";
import ArrowDown from "../../assets/Arrow Down.png";
import ArrowRight from "../../assets/Arrow Right.png";

export default function UserAuth({userName}: {userName:string}) {

    const [colorTheme] = useContext(myContext);
    const [isVisible, setIsVisible] = useState(false);

        return (
        <>
        <div className="user-container">
            <div className="color-box">
                <img src={User} alt="User-icon" className="user-icon"></img>
            </div>
            <div className={`user-details-box-${colorTheme}`}>
                <p className={`user-details-${colorTheme}`}>{userName}</p>
            </div>
            <div className={`navigate-box-${colorTheme}`} onClick={() => {setIsVisible(!isVisible)}}>
                <img src={isVisible ? ArrowRight : ArrowDown} alt="arrow-down" className="arrow-icon"></img>
            </div>
            <div className={isVisible ? `user-menu-${colorTheme}` : "display-none"}>
                <div className={`user-menu-pointOne-${colorTheme}`}>Edit Profile</div>
                <div className="user-menu-pointTwo">Log Out</div>
            </div>
        </div>
        </>
    );
}