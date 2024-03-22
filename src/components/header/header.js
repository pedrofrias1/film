

function Header ({generos}){


return(
    <div className="container d-flex gap-2 justify-contentent-center align-items-center flex-wrap mt-4">
        {generos.map((gen)=>{
            return <a className="filter">{gen.name} </a>
        })}
    </div>
)
}
export default Header;