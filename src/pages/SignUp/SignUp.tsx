import './SignUp.css';
import {useContext, useState} from "react";
import {myContext} from "../../providers/ThemeContext";
import LogoDark from "../../assets/Pixema-dark.png";
import Title from '../../components/Title/Title';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUpUser } from "../../slice/user";
import { AuthForUser } from "../../types/types";
import Spinner from "../../components/Spinner/Spinner";

export default function SignUpPage() {

    const [colorTheme] = useContext(myContext);
    const [inputName, setInputName] = useState("");
    const [emailName, setEmailName] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch <any>();
    const user = useSelector((state: any) => state.user);

    function authUser():AuthForUser {
        return {
            "name": inputName,
            "email": emailName,
            "password": inputPassword
        }
    }

    function sendData() {
        dispatch(fetchSignUpUser(authUser())
    )}

    if (user.status === "resolved") {
        navigate("/")
    } else if (user.status === "rejected"){
        navigate("/*")
    }

    console.log(user);

        return (
        <div className="page-container">
            <div className="page-header">
                <Link to="/" className="link-decoration"><img src={LogoDark} alt="Logo" className="header-logo"></img></Link>
            </div>
            <div className="page-content">
                <div className={`signup-box-${colorTheme}`}>
                    <Title titleText="Sign Up"></Title>
                    {user.status === "loading" ? <Spinner></Spinner> : null}
                    {user.status === null ? <>
                    <div className="content-container">
                        <Input setInputValue={e => setInputName(e.target.value)} inputValue={inputName} content="Name" helpText="Your name" labelId="userNameSignUp" labelText="Name" isDisabled={false}></Input>
                        <Input setInputValue={e => setEmailName(e.target.value)} inputValue={emailName} content="Email" helpText="Your email" labelId="userEmailSignIn" labelText="Email" isDisabled={false}></Input>
                        <Input setInputValue={e => setInputPassword(e.target.value)} inputValue={inputPassword} content="Password" helpText="Your password" labelId="userPasswordSignIn" labelText="Password" isDisabled={false}></Input>
                        <Button clickFunction={sendData} typeButton="myButton primary large" isDisabled={false}>Sign Up</Button>
                        <p className="question">Already have an account? <Link to="/sign-in" className="link-decoration"><span className="question-blue">Sign In</span></Link></p>
                    </div>
                    </> : null}
                </div>
            </div>
            <div className="page-footer">
                <p className="footer-text">© All Rights Reserved</p>
            </div>
        </div>
    );
}