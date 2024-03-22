import InfoPeli2 from "./infoPelis2/infoPTw";
import { useState } from "react"

function  Pelis2({pageT}) {
    
    


    const [show , setShow]=useState(false)

    const mostrar=()=>{
        setShow(true)
       

    }


//  
// 

    return(
        <div className="container-fluid d-flex w-100 align-items-center">
            <div className="column-content d-flex scroller loaded" >
            <div className="d-flex flex-column">
                <img src={`https://image.tmdb.org/t/p/w500${pageT.poster_path}`} alt="img-portada" id="portada"    className={`${show?"d-none":"d-block"}`}  onClick={mostrar} />
            </div>


            <div className={`${show?"d-flex":"d-none"}`} id="contendor-info">
                {show===true?<InfoPeli2 titulo={pageT.title}  descripcion={pageT.overview} poster={pageT.backdrop_path} setShow={setShow} />:''}
            </div>
                 

            </div>
        </div>
    )
}
export default Pelis2