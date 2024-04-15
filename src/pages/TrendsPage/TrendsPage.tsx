import './TrendsPage.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useSelector, useDispatch} from "react-redux";
import { Movie } from "../../types/types";
import Card from '../../components/Card/Card';
import NoPhoto from "../../assets/image-not-found.png";
import Path from "../../assets/Path.png";
import {fetchTrends} from "../../slice/trendFilms";
import { Link } from 'react-router-dom';
import {useEffect} from "react";


export default function TrendsPage() {

    const [colorTheme] = useContext(myContext);
    const trendFilms = useSelector ((state:any) => state.trends.trends);
    const dispatch = useDispatch <any>();

    const trendWords = ["black", "woman", "war", "man", "story", "super", "pirates"];
    const randomTrendWord = trendWords[Math.floor(Math.random() * trendWords.length)];
    
    useEffect(() => {
    dispatch(fetchTrends(randomTrendWord));
    }, [dispatch]);
    

        return (
        <>
            <Header></Header>
            <div className={`main-container-${colorTheme}`}>
                <div className="page-layout">
                {trendFilms.length > 0 && trendFilms.map((film:Movie) =>
                    <Link className="link-decoration card-container" to={`/movie/${film.imdbID}`}> <Card key={film.imdbID} source={film.Poster === "N/A" || film.Poster === "" ? `${NoPhoto}` : film.Poster} cardTitle={film.Title} cardYear={film.Year} imdbID={film.imdbID} >
                        <div className="trend-container">
                            <img src={Path} alt="trend-icon" className="trend-icon"></img>
                        </div>
                    </Card> </Link>)}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}