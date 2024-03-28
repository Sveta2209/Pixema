import './Input.css';

export default function Input({content, helpText, labelText, isDisabled, labelId, inputValue, setInputValue}:{content:string, helpText: string, labelText:string, isDisabled: boolean, labelId: string, inputValue?: string, setInputValue?: (e: any) => void}) {

    return (
        <form className="form-container">
        <label htmlFor={labelId} className="label-text-dark-theme">{labelText}</label>
        <input value = {inputValue} onChange={setInputValue} id={labelId} type={content} className="input-content-dark-theme" placeholder={helpText} disabled = {isDisabled}></input>
        </form>
    );
}