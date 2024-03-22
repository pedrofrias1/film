import { useState } from "react";
import "./series.css"

function Series({datos}) {
    
    
    const [show, setShow]=useState(false);

    const mostrar=()=>{
        setShow(true)
        
    }

    return(
        <div>
        <div className="container-fluid d-flex w-100 align-items-center">
            <div className="column-content scroller loaded" onClick={mostrar}>
            <div className="d-flex flex-column">
                <img src={`https://image.tmdb.org/t/p/w500${datos.poster_path}`} alt="img-portada" className="portada" />
            </div>

            {/* <div>
                {show===true?<Info titulo={data.title}  descripcion={data.overview} />:''}
            </div> */}
                 

            </div>
        </div>
        </div>
    )
}
export default Series;