import './MoviesList.css';
import Card from '../../components/Card/Card';
import Spinner from '../Spinner/Spinner';
import {Movie} from "../../types/types";
import { useDispatch, useSelector} from "react-redux";
import { fetchMovies } from "../../slice/movies";
import {useEffect, useState} from "react";
import NoPhoto from "../../assets/image-not-found.png";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function MoviesList() {

    const dispatch = useDispatch <any>();
    const [page, setPage] = useState<number>(1);
    const handlePage = () => setPage((prevPage) => ++prevPage);

    const films = useSelector ((state:any) => state.movies.films);

    const moviesWords = [
        "man",
        "wedding",
        "year",
        "love",
        "night",
        "dark",
        "boy",
        "house",
        "life"
    ];
    const filmTitle = moviesWords[Math.floor(Math.random() * moviesWords.length)];

    useEffect(() => {
        dispatch(fetchMovies({ filmTitle, page }))
    },[dispatch, page])

    return (
        <>
    <div className="page-layout">
        {films.status === "loading" ? <Spinner></Spinner> : null}
        {films.length === 0 ? null : films.map((film:Movie) =>
            <Link className="link-decoration card-container" to={`/movie/${film.imdbID}`}><Card key={film.imdbID} source={film.Poster === "N/A" || film.Poster === "" ? `${NoPhoto}` : film.Poster} cardTitle={film.Title} cardYear={film.Year} imdbID={film.imdbID} ></Card> </Link>)}
    </div>
    {films.length > 9 && 
        <div className="button-container">
            <Button clickFunction={handlePage} isDisabled={false} typeButton="myButton secondary show-more">Show more</Button>
        </div>}
    </>
    );
}