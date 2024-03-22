
import "./nav.css"

function Nav({pelis, serie}) {

   

   
    // filtro
    

    return(
        <nav className="container pt-5 d-flex justify-content-between align-items-center">
            <h3 className="fw-bolder fs-1">Cartelera<span className="md-span">MD</span>  </h3>
            <div className="d-flex gap-2 align-items-center">
            <form className="d-flex" role="search" id="formBuscar">
                <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>  
            </div>
        </nav>
    )
}
export default Nav