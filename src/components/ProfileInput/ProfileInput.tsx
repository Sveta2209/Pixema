import './ProfileInput.css';
import {useContext} from "react";
import {myContext} from "../../providers/ThemeContext";

export default function ProfileInput({content, helpText, labelText, isDisabled, labelId, inputValue, setInputValue}:{content:string, helpText: string, labelText:string, isDisabled: boolean, labelId: string, inputValue?: string, setInputValue?: (e: any) => void}) {

    const [colorTheme] = useContext(myContext);

        return (
        <form className="form-profile-container">
        <label htmlFor={labelId} className={`label-text-${colorTheme}`}>{labelText}</label>
        <input value = {inputValue} onChange={setInputValue} id={labelId} type={content} className={`input-content-${colorTheme}`} placeholder={helpText} disabled = {isDisabled}></input>
        </form>
    );
}