import './MoviesList.css';
import Card from '../../components/Card/Card';
import {Movie} from "../../types/types";
import { useDispatch, useSelector} from "react-redux";
import { fetchMovies } from "../../slice/movies";
import {useEffect} from "react";

export default function MoviesList() {

    const dispatch = useDispatch <any>();
    const films = useSelector((state:any) => state.movies.films);

    useEffect(() => {
        if (typeof title === "string") {
            dispatch(fetchMovies(title))
        }
    }, [dispatch])

    const moviesWords = [
        "Pirates",
        "red",
        "fast",
        "man",
        "life",
        "car",
        "solider",
        "train",
    ];
      const title = moviesWords[Math.floor(Math.random() * moviesWords.length)];

    console.log(title)
    console.log(films)

        return (
        <div className="page-layout">
            {films.map((film:Movie) => {
                <Card key={film.imdbID} film={films}/>
            })}
        </div>
    );
}