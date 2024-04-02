import './UserSignIn.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import User from "../../assets/User.png";
import ArrowRight from "../../assets/Arrow Right.png";

export default function UserSignIn() {

    const [colorTheme] = useContext(myContext);

        return (
        <div className="user-container">
            <div className="color-box">
                <img src={User} alt="User-icon" className="user-icon"></img>
            </div>
            <div className={`user-details-box-${colorTheme}`}>
                <p className={`user-details-${colorTheme}`}>Sign In</p>
            </div>
            <div className={`navigate-box-${colorTheme}`}>
                <img src={ArrowRight} alt="arrow-right" className="arrow-icon"></img>
            </div>
        </div>
    );
}