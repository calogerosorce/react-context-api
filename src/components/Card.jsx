import { Link } from "react-router-dom"


export default function Card(props) {



    return (
        <Link to={`/prodotti/${props.id}`} className="card col-12 col-md-4 col-lg-2 align-items-center m-3">
            <img src={props.image} alt="" />
            {props && <p>{props.title}</p>}
            <p>{props.category}</p>
            <p>{props.price}€</p>
        </Link>
    )
}