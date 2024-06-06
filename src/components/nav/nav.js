// import { useState, useEffect } from "react"
import { useState } from "react"
// import Cards from "../cards/cards";
import "./nav.css"
import Cards from "../cards/cards";

function Nav({datas, search, searcher}) {
    
    console.log(datas);
   
   
    // const url=`https://api.themoviedb.org/3/discover/movie?&include_video=true&language=en-US&page=5&sort_by=popularity.desc&api_key=9218900d22d6ef6707ba1f31407cccbe`

   


   



    return(
        <nav className="container-fluid pt-5">
            
            <div className="container d-flex justify-content-between align-items-center ">
                <h3 className="fw-bolder fs-1">Cartelera<span className="md-span">MD</span>  </h3>
                    <div className="d-flex gap-2 align-items-center">
                        <form className="d-flex" role="search" id="formBuscar">
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={search} onChange={searcher}/>
                            <button className="btn btn-outline-success" type="submit"  >Search</button>
                        </form>  
                    </div>
            </div>
            
        </nav>
    )
}
export default Nav