import "./ErrorPage.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useContext } from "react";
import {myContext} from "../../providers/ThemeContext";

export default function ErrorPage() {
    const [colorTheme] = useContext(myContext);

    return ( 
        <>
        <Header></Header>
        <div className={`main-container-${colorTheme}`}>
            <div className={`error-${colorTheme}`}>Произошла ошибка! Попробуйте еще раз.</div>
        </div>
        <Footer></Footer>
        </>
    );
}