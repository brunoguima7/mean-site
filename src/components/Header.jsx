import "../styles/header.css"
import "../styles/global.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div id="header">
            <img id="logo" src="mean_logo.png" alt="" />
            <Link id="link2" to="/tickets">Ingressos</Link> <Link id="link1" to="/">Ínicio</Link> 
        </div>
    )
}