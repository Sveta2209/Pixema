import './SignIn.css';
import {useContext, useState} from "react";
import {myContext} from "../../providers/ThemeContext";
import LogoDark from "../../assets/Pixema-dark.png";
import Title from '../../components/Title/Title';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function SignInPage() {

    const [colorTheme] = useContext(myContext);
    const [emailName, setEmailName] = useState("");
    const [inputPassword, setInputPassword] = useState("");

        return (
        <div className="page-container">
            <div className="page-header">
                <img src={LogoDark} alt="Logo" className="header-logo"></img>
            </div>
            <div className="page-content">
                <div className={`signin-box-${colorTheme}`}>
                    <Title titleText="Sign In"></Title>
                    <div className="content-container">
                        <Input setInputValue={e => setEmailName(e.target.value)} inputValue={emailName} content="Email" helpText="Your email" labelId="userEmailSignIn" labelText="Email" isDisabled={false}></Input>
                        <Input setInputValue={e => setInputPassword(e.target.value)} inputValue={inputPassword} content="Password" helpText="Your password" labelId="userPasswordSignIn" labelText="Password" isDisabled={false}></Input>
                        <p className="question-forgotPassword">Forgot password?</p>
                        <Button typeButton="myButton primary large" isDisabled={false}>Sign In</Button>
                        <p className="question">Don’t have an account? <span className="question-blue">Sign Up</span></p>
                    </div>
                </div>
            </div>
            <div className="page-footer">
                <p className="footer-text">© All Rights Reserved</p>
            </div>
        </div>
    );
}