import './MoviesList.css';
import Card from '../../components/Card/Card';
import Spinner from '../Spinner/Spinner';
import {Movie, MovieResponse, MoviesParams, MoviesState} from "../../types/types";
import { useDispatch, useSelector} from "react-redux";
import { fetchMovies } from "../../slice/movies";
import {useEffect, useState} from "react";
import { films } from '../../data';
import NoPhoto from "../../assets/image-not-found.png";
import Button from '../Button/Button';

export default function MoviesList() {

    const dispatch = useDispatch <any>();
    const [page, setPage] = useState<number>(1);
    const handlePage = () => setPage((prevPage) => ++prevPage);

    const films = useSelector ((state:any) => state.movies.films);

    const moviesWords = [
        "pirates",
        "red",
        "fast",
        "man",
        "life",
        "car",
        "dark",
        "train",
    ];
    const filmTitle = moviesWords[Math.floor(Math.random() * moviesWords.length)];

    useEffect(() => {
        dispatch(fetchMovies({ filmTitle, page }))
    },[dispatch, page])

    return (
    <div className="page-layout">
        {films.status === "loading" ? <Spinner></Spinner> : null}
        {films.length === 0 ? null : {films.map((film:Movie) =>
            <Card key={film.imdbID} source={film.Poster === "N/A" || film.Poster === "" ? `${NoPhoto}` : film.Poster} cardTitle={film.Title} cardGenre={film.Genre}></Card>)}}
        {films.length > 10 && <Button clickFunction={handlePage} isDisabled={false} typeButton="secondary">Show more</Button>}
    </div>
    );

    // return (
    //     <div className="page-layout">
    //         {films.map(film =>
    //             <Card key={film.id} source={film.image} cardTitle={film.title} cardGenre={film.date}></Card>
    //         )}
    //     </div>
    // );

}