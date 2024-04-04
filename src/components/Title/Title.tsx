import './Title.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";

export default function Title({titleText}:{titleText: string}) {

    const [colorTheme] = useContext(myContext);

    return (
        <>
        <h1 className={`mainTitle-${colorTheme}`}>{titleText}</h1>
        </>
    );
}
