import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface ILink {
    text: string;
    path: string;
    state?: any;
}

export function Links(props: ILink): ReactElement {
    return (
        <Link 
            to={props.path} 
            state={props.state} 
        >
            {props.text}
        </Link>
    );
}
