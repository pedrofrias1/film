

function Header ({generos}){
console.log(generos);

return(
    <div>
        {generos.map((gen)=>{
            return <a>{gen.name} </a>
        })}
    </div>
)
}
export default Header;