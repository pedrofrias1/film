

function Header({img}) {
    
    return(
        <>
   {img.map((imagen)=>{
        return <img src={imagen} alt="img"/>
   })}
        </>
    )
}
export default Header;