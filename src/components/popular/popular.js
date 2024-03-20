import { useState } from "react";
import "./popular.css"
import Info from "../infoPelis/info";


function Popular({data}) {
    const popular=async()=>{
        let popu=await  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
        return popu;
      }
      popular()


   
    const [show, setShow]=useState(false);

    const mostrar=()=>{
        setShow(true)
        console.log(show);
    }
   

    return(
        <div className="container-fluid d-flex w-100 align-items-center">
            <div className="column-content scroller loaded" onClick={mostrar}>
            <div className="d-flex flex-column">
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="img-portada" className="portada" />
            </div>

            <div>
                {show===true?<Info titulo={data.title}  descripcion={data.overview} />:''}
            </div>
                 

            </div>
        </div>
 
     
    )
}
export default Popular;