import './FavoritesPage.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useSelector} from "react-redux";
import { Movie } from "../../types/types";
import Card from '../../components/Card/Card';
import NoPhoto from "../../assets/image-not-found.png";
import Favorite from "../../assets/FavoriteIcon.png";
import { Link } from 'react-router-dom';
import Empty from "../../assets/EmptyFavorites.png";


export default function FavoritesPage() {

    const [colorTheme] = useContext(myContext);
    const favoriteFilm = useSelector ((state:any) => state.favorites.favorites);

        return (
        <>
            <Header></Header>
            <div className={`main-container-${colorTheme}`}>
                {favoriteFilm.length === 0 && <div className="empty-image-box">
                <h3 className="empty-image-title">NOTING!!!</h3>
                <p className="empty-image-description">Your favorite list is empty now.</p>
                <img src={Empty} alt="EmptyFavorite-image" className="empty-image"></img>
                </div>}
                <div className="page-layout">
                {favoriteFilm.length > 0 && favoriteFilm.map((film:Movie) => (
                    <div className="key-container" key={film.imdbID}>
                        <Link className="link-decoration card-container" to={`/movie/${film.imdbID}`}> <Card key={film.imdbID} source={film.Poster === "N/A" || film.Poster === "" ? `${NoPhoto}` : film.Poster} cardTitle={film.Title} cardYear={film.Year} imdbID={film.imdbID} >
                            <div className="icon-container">
                                <img src={Favorite} alt="DeleteFavorite-icon" className="delete-icon"></img>
                            </div>
                        </Card> </Link>
                    </div>))}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}