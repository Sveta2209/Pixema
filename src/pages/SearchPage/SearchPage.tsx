import './SearchPage.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useSelector, useDispatch} from "react-redux";
import { Movie } from "../../types/types";
import Card from '../../components/Card/Card';
import NoPhoto from "../../assets/image-not-found.png";
import { Link } from 'react-router-dom';
import {useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import { fetchSearch } from "../../slice/search";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";


export default function SearchPage() {

    const { title } = useParams();
    const [colorTheme] = useContext(myContext);
    const searchFilm = useSelector ((state:any) => state.search.search);
    const dispatch = useDispatch <any>();
    const [page, setPage] = useState<number>(1);
    const changePage = () => setPage((prevPage) => ++prevPage);

    useEffect(() => {
        if (title) {
            dispatch(fetchSearch({ title, page }));
        }
    }, [dispatch, title, page]);

        return (
        <>
            <Header></Header>
            <div className={`main-container-${colorTheme}`}>
                {searchFilm.status === "loading" ? <Spinner></Spinner> : null}
                <div className="page-layout">
                {searchFilm.length === 0 ? null : searchFilm.map((film:Movie) => (
                    <div className="key-container" key={film.imdbID}>
                    <Link className="link-decoration card-container" to={`/movie/${film.imdbID}`}>
                        <Card key={film.imdbID} source={film.Poster === "N/A" || film.Poster === "" ? `${NoPhoto}` : film.Poster} cardTitle={film.Title} cardYear={film.Year} imdbID={film.imdbID} ></Card> </Link> 
                    </div>))}
                </div>
                {searchFilm.length > 9 && 
                    <div className="button-container">
                        <Button clickFunction={changePage} isDisabled={false} typeButton="myButton secondary show-more">Show next 10</Button>
                    </div>
                }
            </div>
            <Footer></Footer>
        </>
    );
}