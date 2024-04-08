import { Fragment , useEffect, useState} from "react"
import Cards from "../../components/cards/cards";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./homeCard.css"

function Carrusel(){

    // scroll
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
console.log(pelis);
    // const [img, setImg]=useState([]);

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
        
        // let imagen=infoPeli.map((items)=>{
        //    return items.
        // })
        
        
        // setImg(imagen)
        
        setPelis(infoPeli)
       
    }
    guardarPelis()
},[])

const Slide=()=>{
    
}


// Componente del carrusel


    return(
        <Fragment>
           <Slider {...settings}>
            {pelis.map((peli)=>{
            return<div className="main-container">
                    <div className="slider-container">
                        
                            <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} alt="img" className="container-images"/>
                                <h1>{peli.title}</h1>
                       

                    </div>
                    
                  </div>
            
        })}
           </Slider>

    
        </Fragment>
    )
}
export default Carrusel;