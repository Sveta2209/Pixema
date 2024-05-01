import './SearchInput.css';
import {useContext} from "react";
import Search from "../../assets/search.png";
import SearchLignt from "../../assets/search-light.png";
import {myContext} from "../../providers/ThemeContext";

export default function SearchInput({content, helpText, isDisabled, inputValue, searchId, setInputValue, searchOnSubmit}:{content:string, helpText: string, isDisabled: boolean, inputValue?: string, searchId:string, setInputValue?: (e: any) => void, searchOnSubmit?: (e: any) => void}) {

    const [colorTheme] = useContext(myContext);

        return (
        <form className="search-form-container" onSubmit={searchOnSubmit}>
        <input data-test="cypress-searchInput" value = {inputValue} onChange={setInputValue} type={content} className={`search-input-${colorTheme}`} placeholder={helpText} disabled = {isDisabled} id={searchId}></input>
        <img src={colorTheme === "dark-theme" ? Search : SearchLignt} alt="Search" className="search-icon"></img>
        </form>
    );
}