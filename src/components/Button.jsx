import "../styles/button.css"
import "../styles/global.css"
import { Link } from "react-router-dom"

export default function Button() {
    return (
        <div className="center-div">
            <button><Link id="button-link" to="/tickets">Compre Aqui!</Link></button>
        </div>
    )
}