import './OneMovie.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import Poster from "../../assets/Poster.png";
import Button from '../Button/Button';
import Favorite from "../../assets/Favorite.png"
import Share from "../../assets/Share.png"


export default function OneMovie () {

    const [colorTheme] = useContext(myContext);

    return (
        <>
        <div className="one-movie-container">
            <div className="card-box">
                <img src={Poster} alt="Poster" className="one-movie-poster"></img>
                <div className="button-container">
                    <Button  isDisabled={false} typeButton="myButton secondary favorite"></Button>
                    <img src={Favorite} alt="Favorite-icon" className="favorite-icon"></img>
                    <Button  isDisabled={false} typeButton="myButton secondary favorite-two"></Button>
                    <img src={Share} alt="Share-icon" className="share-icon"></img>
                </div>
            </div>
            <div className="details-box">
                <p className="card-genre">Genre</p>
                <h1 className={`card-title-${colorTheme}`}>Заголовок фильма</h1>
                <div className="rating-box">
                    
                </div>
            </div>
        </div>
        </>
    );
}

