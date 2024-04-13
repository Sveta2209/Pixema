import "./Spinner.css";
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";

function Spinner() {

    const [colorTheme] = useContext(myContext);

    return ( 
        <div className={`main-container-${colorTheme}`}>
            <div className="loader"></div>
        </div>
    );
}

export default Spinner;
