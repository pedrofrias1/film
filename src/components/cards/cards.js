// import InfoCard from "../infocard/infocard"
import "./cards.css"
import {Fragment , useState} from "react";
import InfoCard from "../infoCard/infoCard";


function Cards ({dato,key}){

    // console.log(key);


// const [hidden, setHidden]=useState(false);
    
// const mostrarLista=()=>{
//     setHidden(true);
// }




 
return(
    <Fragment>
        
            <div className="container card m-2 pl-2 d-flex flex-row justify-content-between align-items-center ">
                {/* <div className="container-fluid info d-flex flex-column justify-content-between align-items-center"
                    onMouseEnter={mostrarLista}
                    onMouseLeave={()=>setHidden(false)}
                    >
                    {hidden===true ?<InfoCard title={data.original_title} vote={data.vote_average} date={data.release_date}/>:""} 
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="poster"/> 
                </div> */}
            </div>
        


  
          
    
    
    </Fragment>
)
}
export default Cards;