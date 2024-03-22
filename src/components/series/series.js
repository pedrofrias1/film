import "./series.css"
import SeriesInfo from "./seriesInfo/serieInf";

import { useState } from "react";


function Series({datos}) {
    
    
    const [show, setShow]=useState(false);

    const mostrar=()=>{
        setShow(true)
        
    }

    return(
        <div>
        <div className="container-fluid d-flex w-100 align-items-center">
            <div className="column-content scroller loaded">
            <div className="d-flex flex-column">
                <img src={`https://image.tmdb.org/t/p/w500${datos.poster_path}`} alt="img-portada"  className={`${show?"d-none":"d-block"}`} onClick={mostrar} id="portada"/>
            </div>

            <div className={`${show?"d-flex":"d-none"}`} id="contendor-info">
                {show===true?<SeriesInfo titulo={datos.title}  descripcion={datos.overview} poster={datos.backdrop_path} setShow={setShow}/>:''}
            </div>
                 

            </div>
        </div>
        </div>
    )
}
export default Series;