import './MoviePage.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from "../../components/Button/Button";
import Favorite from "../../assets/Favorite.png";
import Share from "../../assets/Share.png";
import { useDispatch, useSelector} from "react-redux";
import { fetchOneMovie } from "../../slice/selectedFilm";
import {useEffect} from "react";
import {useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import NoPhoto from "../../assets/image-not-found.png";


export default function MoviePage() {

    const [colorTheme] = useContext(myContext);
    const {imdbID} = useParams();
    const dispatch = useDispatch <any>();
    const movie = useSelector ((state:any) => state.film);

    useEffect(() => {
        if (typeof imdbID === "string"){
            dispatch(fetchOneMovie(imdbID))
        }
    }, [dispatch, imdbID])

    console.log(movie)

        return (
        <>
            <Header></Header>
            <div className={`main-container-${colorTheme}`}>
                <div className="one-movie-container">
                {movie.status === "loading" ? <Spinner></Spinner> : null}
                {movie.selectedFilm !== null ?
                    <><div className="card-box">
                        <img src={movie.selectedFilm.Poster === "N/A" || movie.selectedFilm.Poster === "" ? `${NoPhoto}` : movie.selectedFilm.Poster} alt="Poster" className="one-movie-poster"></img>
                        <div className="button-container">
                            <Button  isDisabled={false} typeButton="myButton secondary favorite"></Button>
                            <img src={Favorite} alt="Favorite-icon" className="favorite-icon"></img>
                            <Button  isDisabled={false} typeButton="myButton secondary favorite-two"></Button>
                            <img src={Share} alt="Share-icon" className="share-icon"></img>
                        </div>
                    </div>
                    <div className="details-box">
                        <p className="card-genre">{movie.selectedFilm.Genre}</p>
                        <h1 className={`card-title-${colorTheme}`}>{movie.selectedFilm.Title}</h1>
                        <div className="rating-box">
                            <div className="rating">{movie.selectedFilm.imdbRating}</div>
                            <div className="imdb-box">
                                <p className="imdb-rating">IMDb</p>
                                <p className="imdb-rating">{movie.selectedFilm.imdbRating}</p>
                            </div>
                            <div className="imdb-box">
                                <p className="imdb-rating">{movie.selectedFilm.Runtime}</p>
                            </div>
                        </div>
                        <p className={`film-description-${colorTheme}`}>{movie.selectedFilm.Plot}</p>
                        <div className="card-details-box">
                            <p className="details-title">Year</p>
                            <p className={`details-description-${colorTheme}`}>{movie.selectedFilm.Year}</p>
                        </div>
                        <div className="card-details-box">
                            <p className="details-title">Released</p>
                            <p className={`details-description-${colorTheme}`}>{movie.selectedFilm.Released}</p>
                        </div>
                        <div className="card-details-box">
                            <p className="details-title">BoxOffice</p>
                            <p className={`details-description-${colorTheme}`}>{movie.selectedFilm.BoxOffice}</p>
                        </div>
                        <div className="card-details-box">
                            <p className="details-title">Country</p>
                            <p className={`details-description-${colorTheme}`}>{movie.selectedFilm.Country}</p>
                        </div>
                        <div className="card-details-box">
                            <p className="details-title">Production</p>
                            <p className={`details-description-${colorTheme}`}>{movie.selectedFilm.Production}</p>
                        </div>
                        <div className="card-details-box">
                            <p className="details-title">Actors</p>
                            <p className={`details-description-${colorTheme}`}>{movie.selectedFilm.Actors}</p>
                        </div>
                        <div className="card-details-box">
                            <p className="details-title">Director</p>
                            <p className={`details-description-${colorTheme}`}>{movie.selectedFilm.Director}</p>
                        </div>
                        <div className="card-details-box">
                            <p className="details-title">Writers</p>
                            <p className={`details-description-${colorTheme}`}>{movie.selectedFilm.Writer}</p>
                        </div>
                        {/* <div className="recomendations-box">
                            <h3 className={`recommendations-title-${colorTheme}`}>Recommendations</h3>
                            <div className="recomendation-cards">
                                <Card key={film.imdbID} source={film.Poster === "N/A" || film.Poster === "" ? `${NoPhoto}` : film.Poster} cardTitle={film.Title} cardYear={film.Year} id={film.imdbID}></Card>
                            </div>
                        </div>  */}
                    </div> </> : null}
                </div> 
            </div>
            <Footer></Footer>
        </>
    );
}  