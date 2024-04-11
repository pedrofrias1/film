import React ,{ Fragment, useEffect,useState } from "react"
import "./home.css"
import Nav from "./components/nav/nav";
import Carusel from "./components/carusel/carusel"
import Cards from "./components/cards/cards";
import InfoCard from "./components/infoCard/infoCard";




  function Home(){
        
    const [pelis, setPelis] = useState([]);

    

const [hidden, setHidden]=useState(false);
    
const mostrarLista=()=>{
    setHidden(true);
}

    const ObtenerPelis=async()=>{

        const apiKey = '9218900d22d6ef6707ba1f31407cccbe';
        let todasLasPeliculas = [];
        let pagina = 1;
        let totalPages =300;

        while(pagina<=totalPages){
           
            try{
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?&include_adult=false&include_video=true&language=en-US&page=${pagina}&sort_by=popularity.desc&api_key=${apiKey}`);
                const data = await response.json();
                todasLasPeliculas = [...todasLasPeliculas, ...data.results];
                pagina++
                // return todasLasPeliculas
                setPelis(todasLasPeliculas)
            }catch(err){
                console.log(err);
            }
        }
     }

          
useEffect(()=>{
        const guardar=async()=>{
                let info = await ObtenerPelis();
                
                // console.log(info);
                // setPelis(infoResult);
     
            }
            guardar()

},[])
//    console.log(pelis);

// useEffect(()=>{
//     
// },[])

            

     
  
    
return(
    <Fragment>
        <Nav/>
        <header className="container carusel">
            <Carusel/>
        </header>
        <main>
          <section className="row pt-4 card-section justify-content-center align-items-center">
           {pelis.length>0?
                pelis.map((peli)=>{
                    return <div className="container card m-2 pl-2 d-flex flex-row justify-content-between align-items-center ">
                    <div className="container-fluid info d-flex flex-column justify-content-between align-items-center"
                        onMouseEnter={mostrarLista}
                        onMouseLeave={()=>setHidden(false)}
                        >
                        {hidden===true ?<InfoCard title={peli.original_title} vote={peli.vote_average} date={peli.release_date}
                        video={peli.video} />:""} 
                        <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} alt="poster"/> 
                    </div>
                </div>
                }):""}
          </section>
          {/* <Page2/>
          <Page3/>
          <Page4/>
          <Page5/> */}
         
                
                
         
           
        </main>


    </Fragment>
)

}



export default Home;