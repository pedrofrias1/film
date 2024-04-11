import { useState } from "react"
import "./nav.css"

function Nav() {
// llamado a las peliculas
   const [query, setQuery]=useState('');
   const [results, setResults]=useState([]);

   const handleSearch=async()=>{
    try{
        // realizar la llamada 
        const response= await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&api_key=9218900d22d6ef6707ba1f31407cccbe=${query}`);
        const data=await response.json();

        // filtrar los resultados
        const filterResult= data.filter(item=>console.log(item))
        setResults(filterResult)
    }catch(error){
        console.log("error en _: " + error);
    }
   };

   const handleChange=(event)=>{
    setQuery(event.target.value)
   }

    

    return(
        <nav className="container-fluid pt-5">
            <div className="container d-flex justify-content-between align-items-center ">
                <h3 className="fw-bolder fs-1">Cartelera<span className="md-span">MD</span>  </h3>
                    <div className="d-flex gap-2 align-items-center">
                        <form className="d-flex" role="search" id="formBuscar">
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={query} onChange={handleChange} />
                            <button className="btn btn-outline-success" type="submit" onClick={handleSearch} >Search</button>
                        </form>  
                    </div>
            </div>
            {/* */}
        </nav>
    )
}
export default Nav