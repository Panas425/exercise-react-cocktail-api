import { ReactElement } from "react";

interface iButtonProps {
    handleButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    buttonText: string
    disabled: true|false
}

export function Button(props: iButtonProps):ReactElement{
    return(
        <button disabled= {props.disabled} onClick={props.handleButtonClick}>{props.buttonText}</button>
    );
}