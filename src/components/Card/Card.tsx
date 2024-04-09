import './Card.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";
import NoPhoto from "../../assets/image-not-found.png";
import {Movie} from "../../types/types"


// interface CardItem {
//     film: Movie;
// }

// export default function Card({ film }: CardItem) {

//     const [colorTheme] = useContext(myContext);

//     return (
//         <>
//         <div className="card-container">
//             <img src={film.Poster === "N/A" || film.Poster === "" ? `${NoPhoto}` : film.Poster} alt="Poster" className="poster"></img>
//             <h3 className={`poster-title-${colorTheme}`}>{film.Title}</h3>
//             <p className="poster-details">{film.Genre}</p>
//         </div>
//         </>
//     );
// }

export default function Card({source, cardTitle,cardYear}: {source:string, cardTitle:string,cardYear:string}) {

    const [colorTheme] = useContext(myContext);

    return (
        <>
        <div className="card-container">
            <img src={source} alt="Poster" className="poster"></img>
            <h3 className={`poster-title-${colorTheme}`}>{cardTitle}</h3>
            <p className="poster-details">{cardYear}</p>
        </div>
        </>
    );
}

