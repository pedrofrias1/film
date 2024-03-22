
import "./infoPeli.css"


function InfoPeli({titulo,descripcion,poster,setShow}){


    return(
        <div className="d-flex flex-column gap-2">
            <h4 className="text-end" onClick={()=>{setShow(false)}}>X</h4>
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" className="poster"/>
            <h3>{titulo} </h3>
            <p>{descripcion} </p>
           
           
        </div>
    )

    
}
export default InfoPeli