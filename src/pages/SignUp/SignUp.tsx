import './SignUp.css';
import {useContext, useState} from "react";
import {myContext} from "../../providers/ThemeContext";
import LogoDark from "../../assets/Pixema-dark.png";
import Title from '../../components/Title/Title';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function SignUpPage() {

    const [colorTheme] = useContext(myContext);
    const [inputName, setInputName] = useState("");
    const [emailName, setEmailName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setConfirmPassword] = useState("")

        return (
        <div className="page-container">
            <div className="page-header">
                <img src={LogoDark} alt="Logo" className="header-logo"></img>
            </div>
            <div className="page-content">
                <div className={`signup-box-${colorTheme}`}>
                    <Title titleText="Sign Up"></Title>
                    <div className="content-container">
                        <Input setInputValue={e => setInputName(e.target.value)} inputValue={inputName} content="Name" helpText="Your name" labelId="userNameSignUp" labelText="Name" isDisabled={false}></Input>
                        <Input setInputValue={e => setEmailName(e.target.value)} inputValue={emailName} content="Email" helpText="Your email" labelId="userEmailSignIn" labelText="Email" isDisabled={false}></Input>
                        <Input setInputValue={e => setInputPassword(e.target.value)} inputValue={inputPassword} content="Password" helpText="Your password" labelId="userPasswordSignIn" labelText="Password" isDisabled={false}></Input>
                        <Input setInputValue={e => setConfirmPassword(e.target.value)} inputValue={inputConfirmPassword} content="Password" helpText="Confirm password" labelId="userPasswordConfirmationSignUp" labelText="Confirm password" isDisabled={false}></Input>
                        <Button typeButton="myButton primary large" isDisabled={false}>Sign Up</Button>
                        <p className="question">Already have an account? <span className="question-blue">Sign In</span></p>
                    </div>
                </div>
            </div>
            <div className="page-footer">
                <p className="footer-text">© All Rights Reserved</p>
            </div>
        </div>
    );
}