import { Fragment, useEffect, useState } from "react"
import Cards from "../components/cards/cards"



function Page3(){

    const Url = `https://api.themoviedb.org/3/discover/movie`
    const include = `include_adult=false&include_video=false`
    const language = `language=en-US`
    const page = `page=3`
    const populary = `sort_by=popularity.desc`
    const apiKey = `api_key=9218900d22d6ef6707ba1f31407cccbe`

    const [pelis, setPelis]=useState([]);

    // pelis-3
    const peliculas3=async()=>{
        let dato=await fetch(`${Url}?${include}&${language}&${page}&${populary}&${apiKey}`)
                        .then(res=>res.json())
                        .catch(err=>console.log("error en: " + err));
        return dato
        // llamo a la api 
    }

    // guardar peliculas.
    useEffect(()=>{
        const guardar= async()=>{
            let info = await peliculas3();
            let infoResult = info.results;
            setPelis(infoResult);
        }
        guardar()
    },[])


    return(
        <Fragment>
            <section className="row pt-4 card-section justify-content-center align-items-center">
                {pelis.length>0?
                pelis.map((peli)=>{
                    return <Cards data={peli} key={peli.id} />
                }):""}
            </section>
        </Fragment>
    )
}
export default Page3