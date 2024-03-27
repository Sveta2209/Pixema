import './Button.css';

interface IButton {
    isDisabled: boolean,
    clickFunction?: () => void,
    typeButton: string,
    children?: string
}

export default function Button({children, isDisabled, clickFunction, typeButton}: IButton) {
    return (
        <>
        <button className={typeButton} onClick={clickFunction} disabled = {isDisabled}>{children}</button>
        </>
    );
}