
import "./nav.css"

function Nav({pelis, serie}) {

   

    

    return(
        <nav className="container-fluid pt-5">
            <div className="container d-flex justify-content-between align-items-center ">
                <h3 className="fw-bolder fs-1">Cartelera<span className="md-span">MD</span>  </h3>
                    <div className="d-flex gap-2 align-items-center">
                        <form className="d-flex" role="search" id="formBuscar">
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>  
                    </div>
            </div>
        </nav>
    )
}
export default Nav