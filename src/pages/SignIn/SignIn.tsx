import './SignIn.css';
import {useContext, useState, useEffect} from "react";
import {myContext} from "../../providers/ThemeContext";
import LogoDark from "../../assets/Pixema-dark.png";
import Title from '../../components/Title/Title';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { fetchSignInUser } from "../../slice/user";
import { useDispatch, useSelector } from "react-redux";
import { AuthForUser} from "../../types/types";
import { userState } from "../../slice/user";
import Spinner from "../../components/Spinner/Spinner";

export default function SignInPage() {

    const [colorTheme] = useContext(myContext);
    const [emailName, setEmailName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch <any>();
    const user = useSelector((state: any) => state.user);

    function authUser():AuthForUser {
        return {
            "email": emailName,
            "password": inputPassword
        }
    }

    function sendDataUser() {
        dispatch(fetchSignInUser(authUser())
    )};

    useEffect(() => {
        if (user.status === "resolved") {
            navigate("/");
        } else if (user.status === "rejected"){
            navigate("/*")
        }
    }, [user.status]);

        return (
        <div className="page-container">
            <div className="page-header">
            <Link to="/" className="link-decoration"><img src={LogoDark} alt="Logo" className="header-logo"></img></Link>
            </div>
            <div className="page-content">
                <div className={`signin-box-${colorTheme}`}>
                    <Title titleText="Sign In"></Title>
                    {user.status === "loading" ? <Spinner></Spinner> : null}
                    {user.status === null ? <>
                    <div className="content-container">
                        <Input setInputValue={e => setEmailName(e.target.value)} inputValue={emailName} content="Email" helpText="Your email" labelId="userEmailSignIn" labelText="Email" isDisabled={false}></Input>
                        <Input setInputValue={e => setInputPassword(e.target.value)} inputValue={inputPassword} content="Password" helpText="Your password" labelId="userPasswordSignIn" labelText="Password" isDisabled={false}></Input>
                        <p className="question-forgotPassword">Forgot password?</p>
                        <Button clickFunction={sendDataUser} typeButton="myButton primary large" isDisabled={false}>Sign In</Button>
                        <p className="question">Don’t have an account? <Link to="/sign-up" className="link-decoration"><span className="question-blue">Sign Up</span></Link></p>
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