import './Card.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";


export default function Card({source, cardTitle, cardYear, id}: {source:string, cardTitle:string,cardYear:string, id:string}) {

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

