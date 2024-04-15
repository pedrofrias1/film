// import InfoCard from "../infocard/infocard"
import "./cards.css"
import {Fragment, useState, useEffect} from "react";
import InfoCard from "../infoCard/infoCard";


function Cards ({data}){
    const [hidden, setHidden]=useState(false);
    const [pelis, setPelis]=useState([]);
    // console.log("pelis: " + pelis);

const Peliculas=()=>{
   
    const apiKey = '9218900d22d6ef6707ba1f31407cccbe';
        
    let info = fetch(`https://api.themoviedb.org/3/discover/movie?&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`)
                    .then(res=>res.json())
                    .catch(err=>console.log("error: " + err ))
    return info
}

useEffect(()=>{
    let guardar= async()=>{
        let dato = await Peliculas();
        let datoResult= dato.results
        setPelis(datoResult)
    }
    guardar()
},[])


const mostrarLista=()=>{
    setHidden(true);
}




 
return(
    <Fragment>

        
        
            <div className="container card m-2 pl-2 d-flex flex-row justify-content-between align-items-center ">
                <div className="container-fluid  d-flex flex-column justify-content-between align-items-center"
                    onMouseEnter={mostrarLista}
                    onMouseLeave={()=>setHidden(false)}
                    >
                    {hidden===true ?<InfoCard title={data.original_title} vote={data.vote_average} date={data.release_date} className="slide-top"/>:""} 
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="poster"/> 
                </div>
            </div>
        


  
          
    
    
    </Fragment>
)
}
export default Cards;