import './ResetPasswordConfirm.css';
import {useContext, useState, useEffect} from "react";
import {myContext} from "../../providers/ThemeContext";
import LogoDark from "../../assets/Pixema-dark.png";
import Title from '../../components/Title/Title';
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";


export default function ResetPasswordConfirm() {

    const [colorTheme] = useContext(myContext);
    
        return (
        <div className="page-container">
            <div className="page-header">
            <Link to="/" className="link-decoration"><img src={LogoDark} alt="Logo" className="header-logo"></img></Link>
            </div>
            <div className="page-content">
                <div className={`reset-confirm-box-${colorTheme}`}>
                    <Title titleText="Reset password"></Title>
                    <div className="content-container">
                        <p className={`reset-details-${colorTheme}`}>You will receive an email with a link to reset your password. Change it and sign in with your new password.</p>
                        <Link to="/sign-in" className="link-decoration"><Button typeButton="myButton primary large" isDisabled={false}>Sign In</Button></Link>
                    </div>
                </div>
            </div>
            <div className="page-footer">
                <p className="footer-text">© All Rights Reserved</p>
            </div>
        </div>
    );
}