import { Fragment , useEffect, useState} from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carusel.css"

function Carrusel(){

    // Componente del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };

    const [pelis, setPelis]=useState([]);


    // peliculas Destacadas

    const peliculas=async()=>{
    // llamo a la api de peliculas TMDB
    let dato=await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9218900d22d6ef6707ba1f31407cccbe')
    // lo paso a JSON.
    .then(res=>res.json())
    .catch(err=>console.log('error:' + err))
    return dato;
}

// guardar peliculas.
useEffect(()=>{
    let guardarPelis=async()=>{
        let info=await peliculas()
        
        let infoPeli=info.results;
        
        setPelis(infoPeli)
       
    }
    guardarPelis()
},[])







    return(
        <Fragment>
           <Slider {...settings}>
            {pelis.map((peli)=>{
            return<div className="conteiner-fluid contCarusell" key={peli.id}>
                    <div className="list">
                        <div className="item">
                           <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} alt="carusell" id="carusell"  />
                           <div className="content">
                                <h1 className="title">{peli.title}</h1>
                            </div>  
                        </div>
                    </div> 
                  </div>
            
        })}
           </Slider>

    
        </Fragment>
    )
}
export default Carrusel;