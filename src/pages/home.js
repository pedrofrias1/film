import Popular from "../components/popular/popular";
import Nav from "../components/nav/nav";
import Series from "../components/series/series";
import Header from "../components/header/header";
import Pelis2 from "../components/pelis2/pelis2";
import "./home.css"
import  {useState, useEffect } from "react"





function Home(params) {

// peliculas destacadas.
 const [pelis, setPelis]=useState([]);
 //page-2;
 const [pelisTwo, setPelisTwo]=useState([]);

// ---------------------------------------

//  series.
const [serie, setSerie]=useState([]);
//  page-2



// filtrar-genero ↓=> https://api.themoviedb.org/3/genre/movie/list?api_key=9218900d22d6ef6707ba1f31407cccbe
const genres=[
{"id":28,"name":"Action"},
{"id":12,"name":"Adventure"},
{"id":16,"name":"Animation"},
{"id":35,"name":"Comedy"},
{"id":80,"name":"Crime"},
{"id":99,"name":"Documentary"},
{"id":18,"name":"Drama"},
{"id":10751,"name":"Family"},
{"id":14,"name":"Fantasy"},
{"id":36,"name":"History"},
{"id":27,"name":"Horror"},
{"id":10402,"name":"Music"},
{"id":9648,"name":"Mystery"},
{"id":10749,"name":"Romance"},
{"id":878,"name":"Science Fiction"},
{"id":10770,"name":"TV Movie"},
{"id":53,"name":"Thriller"},
{"id":10752,"name":"War"},
{"id":37,"name":"Western"}
]


// filtrar generos





  




    


// peliculas Destacadas

const peliculas=async()=>{
    // llamo a la api de peliculas TMDB
    let dato=await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9218900d22d6ef6707ba1f31407cccbe')
    // lo paso a JSON.
    .then(res=>res.json())
    .catch(err=>console.log('error:' + err))
   
    
    return dato;
}

// series
const movies=async()=>{
    let series=await  fetch('https://api.themoviedb.org/3/tv/popular?api_key=9218900d22d6ef6707ba1f31407cccbe')
          .then(res => res.json())
          .catch(err => console.error('error:' + err));
    return series;

}

// peliculas page = 2
const pelisPage2 =()=>{
    let info =fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&api_key=9218900d22d6ef6707ba1f31407cccbe')
              .then(res=>res.json())
              .catch(err=>console.log(err))
    return info;
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

// page-2
useEffect(()=>{
    let guardarTwo=async()=>{
        let infoTwo=await pelisPage2()
        let results=infoTwo.results

        setPelisTwo(results)
    }
    guardarTwo()
},[])




// ------------
// guardar series
useEffect(()=>{
let guardarSerie=async()=>{
    let news=await movies()
    let newsSeries=news.results;
  
    setSerie(newsSeries)
}
guardarSerie()
},[])




  
    return(
        <div className="container-fluid home">
            <Nav/>
            <Header generos={genres} />
            {/* <Main /> */}
            <a className="titulo mt-5 p-2 color" href="https://google.com">Destacados Hoy</a>
            <header className="d-flex gap-2 scroller loaded container mt-5">
                {pelis.length>0?
                    pelis.map((peli)=>{
                    return <Popular key={peli.id} data={peli} />
                }):""}
            </header>
            
            <main>
                <article >
                    <section>
                    <h3 className="mt-4 p-2 color">Series Populares</h3>
                        <div className="d-flex gap-2 scroller loaded container mt-5">
                            {serie.map((ser)=>{
                            return <Series key={ser.id} datos={ser} /> 
                            })} 
                        </div>
                    </section>

                    <section>
                    <h3 className="mt-4 p-2 color">De Hollywood a tu pantalla</h3>
                        <div className="d-flex gap-2 scroller loaded container mt-5">
                            {pelisTwo.map((pageTw)=>{
                            return <Pelis2 key={pageTw.id} pageT={pageTw} /> 
                            })} 
                        </div>
                    </section>
                   
                   
                       
                    
                   
                </article>
            </main>
        </div>
    )
}
export default Home;