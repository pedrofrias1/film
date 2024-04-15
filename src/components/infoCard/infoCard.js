import "./info.css"



function InfoCard({title, vote, date, video}) {
    
    return(
        <>
        <div className="d-flex flex-column align-items-center cardInfo ">
          <ul className="carctGeneral slide-top">
          <li className="caracteristicas d-flex flex-column"><span className="">{title}</span></li>       
          <li className="caracteristicas d-flex flex-column"><span className="">{date}</span></li>       
          <li className="caracteristicas d-flex flex-column"><span className="">{vote}</span></li> 
          <li className="caracteristicas d-flex flex-column"><span className="">{video}</span></li> 
               
          </ul>

  </div>
        
        </>
    )
}
export default InfoCard;