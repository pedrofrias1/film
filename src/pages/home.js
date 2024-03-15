// import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import Pelis from "../components/peliculas/pelis";
import "./home.css"

import  {useState, useEffect } from "react"


function Home(params) {

 const [pelis, setPelis]=useState([]);
 console.log(pelis);


const peliculas=async()=>{
    // llamo a la api de peliculas TMDB
    let dato=await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9218900d22d6ef6707ba1f31407cccbe')
    // lo paso a JSON.
    .then(res=>res.json())
    .catch(err=>console.log('error:' + err))
   
    return dato;
}


// guardo los datos en const pelis.
useEffect(()=>{
    let guardarPelis=async()=>{
        let info=await peliculas()
        
        let infoPeli=info.results;
        
        setPelis(infoPeli)
       
    }
    guardarPelis()
},[])

  
    return(
        <div className="container-fluid home">
            <Nav />
            {/* <Header /> */}
            
            <main>
                <section className="d-flex">
                    <div className="d-flex flex-column">
                      {
                        pelis.map((peli)=>{
                            return <Pelis key={peli.id} data={peli} />
                        })
                      }
                    </div>
                    
                    
                </section>
            </main>
        </div>
    )
}
export default Home;