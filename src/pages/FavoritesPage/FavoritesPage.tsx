import './FavoritesPage.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useSelector, useDispatch} from "react-redux";
import { Movie } from "../../types/types";
import Card from '../../components/Card/Card';
import NoPhoto from "../../assets/image-not-found.png";
import DeleteTwo from "../../assets/DeleteTwo.png";
import {removeFavorites} from "../../slice/favorite";
import { Link } from 'react-router-dom';


export default function FavoritesPage() {

    const [colorTheme] = useContext(myContext);
    const favoriteFilm = useSelector ((state:any) => state.favorites.favorites);
    const dispatch = useDispatch <any>();

    function deleteFavorite (item: Movie) {
        dispatch(removeFavorites(item))
    }

        return (
        <>
            <Header></Header>
            <div className={`main-container-${colorTheme}`}>
                <div className="page-layout">
                {favoriteFilm.length > 0 && favoriteFilm.map((film:Movie) =>
                    <Link className="link-decoration card-container" to={`/movie/${film.imdbID}`}> <Card key={film.imdbID} source={film.Poster === "N/A" || film.Poster === "" ? `${NoPhoto}` : film.Poster} cardTitle={film.Title} cardYear={film.Year} imdbID={film.imdbID} >
                        <div className="icon-container" onClick={() => deleteFavorite(film)}>
                            <img src={DeleteTwo} alt="DeleteFavorite-icon" className="delete-icon"></img>
                        </div>
                    </Card> </Link>)}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}