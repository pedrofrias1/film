import React ,{ Fragment, useEffect,useState } from "react"
import "./home.css"
import Nav from "./components/nav/nav";
import Carusel from "./components/carusel/carusel"
import Cards from "./components/cards/cards";




  function Home(){
        
    const [pelis, setPelis] = useState([]);

    const [search, setSearch]=useState('');
    const [result, setResult]=useState([])


    const ObtenerPelis=async()=>{

        const apiKey = '9218900d22d6ef6707ba1f31407cccbe';
        
        let response = fetch(`https://api.themoviedb.org/3/discover/movie?&include_video=true&language=en-US&page=5&sort_by=popularity.desc&api_key=${apiKey}`)
                        .then(res=>res.json())
                        .catch(err=>console.log("error: " + err ))
        return response
          
     }

          
useEffect(()=>{
        const guardar=async()=>{
                let info = await ObtenerPelis();
                let infoResult=info.results;
                setPelis(infoResult);
    
            }
            guardar()

},[])


const searcher=(e)=>{
  const term = e.target.value;
  setSearch(term);

}

let results=[];


if (!results) {
  results=pelis; 
  
}else{
 results= pelis.filter(dato=>
  dato.title.toLowerCase().includes(search)
);
}
       

     
  
    
return(
    <Fragment>
        <Nav datas={pelis} searcher={searcher} search={search} />
        <header className="carusell">
         
             <Carusel/>
         
           
        </header>
        <main>
           
          <section className="row pt-4 card-section justify-content-center align-items-center">
          {pelis.length>0?
            results.map((peli)=>{
                return <Cards data={peli}/>
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