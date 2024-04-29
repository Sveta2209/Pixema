import './ResetPasswordPage.css';
import {useContext, useState} from "react";
import {myContext} from "../../providers/ThemeContext";
import LogoDark from "../../assets/Pixema-dark.png";
import Title from '../../components/Title/Title';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate  } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";


export default function ResetPasswordPage() {

    const [colorTheme] = useContext(myContext);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    function resetPassword () {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Reset password?");
        })
        .then(() => {
            navigate("/reset");
        })
        .catch((error) => {
            alert(error.message);
        });
    }

        return (
        <div className="page-container">
            <div className="page-header">
            <Link to="/" className="link-decoration"><img src={LogoDark} alt="Logo" className="header-logo"></img></Link>
            </div>
            <div className="page-content">
                <div className={`reset-box-${colorTheme}`}>
                    <Title titleText="Reset password"></Title>
                    <div className="content-container">
                        <Input setInputValue={e => setEmail(e.target.value)} inputValue={email} content="Email" helpText="Your email" labelId="userEmailSignIn" labelText="Email" isDisabled={false}></Input>
                        <Button clickFunction={resetPassword} typeButton="myButton primary large" isDisabled={false}>Reset</Button>
                    </div>
                </div>
            </div>
            <div className="page-footer">
                <p className="footer-text">© All Rights Reserved</p>
            </div>
        </div>
    );
}