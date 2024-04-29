import './MainPage.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import Header from '../../components/Header/Header';
import MoviesList from '../../components/MoviesList/MoviesList';
import Footer from '../../components/Footer/Footer';


export default function MainPage() {

    const [colorTheme] = useContext(myContext);

        return (
        <>
            <Header></Header>
            <div className={`main-container-${colorTheme}`}>
                <MoviesList></MoviesList>
            </div>
            <Footer></Footer>
        </>
    );
}