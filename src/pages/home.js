import Popular from "../components/popular/popular";
import Nav from "../components/nav/nav";
import "./home.css"

import  {useState, useEffect } from "react"


function Home(params) {

// peliculas destacadas
 const [pelis, setPelis]=useState([]);

// peliculas populares
 const [populares, setPopulares]=useState([]);

//  console.log(pelis);


 




// peliculas Destacadas

const peliculas=async()=>{
    // llamo a la api de peliculas TMDB
    let dato=await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9218900d22d6ef6707ba1f31407cccbe')
    // lo paso a JSON.
    .then(res=>res.json())
    .catch(err=>console.log('error:' + err))
   
    return dato;
}

const videos=async()=>{
    let video= await fetch('https://api.themoviedb.org/3/movie/movie_id/videos?api_key=9218900d22d6ef6707ba1f31407cccbe&language=en-US')
                     .then(res=>res.json())
                     .then(json=>console.log(json))
                     .catch(err=>console.log('error: ' + err))
                     return video
}

// guardo los datos en const pelis destacadas.
useEffect(()=>{
    let guardarPelis=async()=>{
        let info=await peliculas()
        
        let infoPeli=info.results;
        
        setPelis(infoPeli)
        videos()
       
    }
    guardarPelis()
},[])





  
    return(
        <div className="container-fluid home">
            <Nav />
            <h3>Destacados Hoy</h3>
            <header className="d-flex gap-2 scroller loaded container">
                {pelis.length>0?
                    pelis.map((peli)=>{
                    return <Popular key={peli.id} data={peli} />
                }):""}
            </header>
            
            <main>
                <section className="d-flex">
                   <h3>Películas Populares</h3>
                    
                    
                </section>
            </main>
        </div>
    )
}
export default Home;