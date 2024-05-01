import './ProfilePage.css';
import { useContext } from "react";
import {myContext} from "../../providers/ThemeContext";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useSelector } from "react-redux";
import On from "../../assets/Switch - on.png";
import Off from "../../assets/Switch - off.png";
import ProfileInput from '../../components/ProfileInput/ProfileInput';


export default function ProfilePage() {

    const [colorTheme, setColorTheme] = useContext(myContext);
    const { name, email, isAuth } = useSelector((state: any) => state.user);

    function changeColorDark () {
        setColorTheme ("dark-theme");
    };
    function changeColorLight () {
        setColorTheme ("light-theme");
    };

    return (
        <>
            <Header></Header>
            <div className={`main-container-${colorTheme}`}>
                <div className="profile-container">
                    {isAuth ? <> 
                    <h1 className={`profile-title-${colorTheme}`}>Profile</h1>
                    <div className={`main-profile-data-${colorTheme}`}>
                        <ProfileInput inputValue={name} content="Name" helpText="Your name" labelId="userName" labelText="Name" isDisabled={true}></ProfileInput>
                        <ProfileInput inputValue={email} content="Email" helpText="Your email" labelId="userEmail" labelText="Email" isDisabled={true}></ProfileInput>
                    </div> </> : null}
                    <h1 className={`profile-title-${colorTheme}`}>Color mode</h1>
                    <div className={`main-profile-theme-${colorTheme}`}>
                        <div className="theme-box">
                            <p className={`theme-${colorTheme}`}>Dark theme</p>
                            <img src={colorTheme ==="light-theme" ? Off : On} alt="Switch-theme" className="switch" onClick={() => {changeColorDark()}}></img>
                        </div>
                        <div className="theme-box">
                            <p className={`theme-${colorTheme}`}>Light theme</p>
                            <img src={colorTheme ==="light-theme" ? On : Off} alt="Switch-theme" className="switch" onClick={() => {changeColorLight()}}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}