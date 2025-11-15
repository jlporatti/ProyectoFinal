import { Link } from "react-router-dom";
import {Nav} from "../Nav/Nav"

export const Header = () =>{
    return (
    <header>
        <Link to="/">Home</Link>
        <Nav />
    </header>
    );
};