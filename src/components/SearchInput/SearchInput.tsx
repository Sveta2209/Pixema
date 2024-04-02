import './SearchInput.css';
import {useContext} from "react";
import Search from "../../assets/search.png";
import SearchLignt from "../../assets/search-light.png";
import {myContext} from "../../providers/ThemeContext";

export default function SearchInput({content, helpText, isDisabled, inputValue, setInputValue}:{content:string, helpText: string, isDisabled: boolean, inputValue?: string, setInputValue?: (e: any) => void}) {

    const [colorTheme] = useContext(myContext);

        return (
        <form className="search-form-container">
        <input value = {inputValue} onChange={setInputValue} type={content} className={`search-input-${colorTheme}`} placeholder={helpText} disabled = {isDisabled}></input>
        <img src={colorTheme === "dark-theme" ? Search : SearchLignt} alt="Search" className="search-icon"></img>
        </form>
    );
}