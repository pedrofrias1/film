import React ,{ Fragment } from "react"
import "./home.css"
import Nav from "./components/nav/nav";
import HomeCard from "./pages/pelis/homeCard"



  function Home(){


    
return(
    <Fragment>
        <Nav/>
        <main>
            <div className="homeContainer">
                <HomeCard/>
                
            </div>
           
        </main>


    </Fragment>
)

}



export default Home;