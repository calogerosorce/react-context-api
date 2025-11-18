import { useContext } from "react";
import { NavLink } from "react-router-dom";
import BudgetContext from "../contexts/BudgetContext";
export default function Header() {
    const { maxPrice, setMaxPrice } = useContext(BudgetContext)

    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><strong>Boolzon</strong></NavLink>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/contacts" aria-current="page">Chi Siamo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/prodotti">Prodotti</NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {/*  {budgetMode === false ? <button onClick={() => clickMode()} className="stand">STANDARD MODE</button> : <button onClick={() => clickMode()} className="stand btn btn-primary">BUDGET MODE</button>} */}
                                <input type="number" className="form-control" placeholder="BUDGET" value={maxPrice ? maxPrice : ''} onChange={e => setMaxPrice(e.target.value)} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}