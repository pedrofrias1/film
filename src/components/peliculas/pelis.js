import "./pelis.css"
function Peliculas({data}) {
    return(
        <div className="pelis">
   <p>{data.title}</p>

<img src={`https://image.tmdb.org/t/p/w500${data.poster_path}` } alt="img" /> 
    
    </div>
    )
    
}
export default Peliculas;