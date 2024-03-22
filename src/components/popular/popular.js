import { useState } from "react";
import "./popular.css"
import InfoPeli from "./infoPelis/infoPelis";


function Popular({data}) {

// console.log(data.title);
// console.log(data);
   
    const [show, setShow]=useState(false);


    const mostrar=()=>{
        setShow(true)
       
    }
    
    

    return(
        <div className="container-fluid d-flex w-100 align-items-center">
            <div className="column-content d-flex scroller loaded" >
            <div className="d-flex flex-column">
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="img-portada" className={`${show?"d-none":"d-block"}`} id="portada" onClick={mostrar}/>
            </div>


            <div className={`${show?"d-flex":"d-none"}`} id="contendor-info">
                {show===true?<InfoPeli titulo={data.title}  descripcion={data.overview} poster={data.backdrop_path} setShow={setShow} />:''}
            </div>
                 

            </div>
        </div>
 
     
    )
}
export default Popular;