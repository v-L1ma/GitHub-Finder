import { BsSearch } from "react-icons/bs"

function Search(){
    return(
        <div className="mt-4">
            <h2>Busque por um usuario:</h2>
            <p>Conheça seus melhores projetos:</p>
            <div className="flex items-center">
                <input className="bg-gray-50 text-black p-1" type="text" placeholder="Digite o nome do usuario"/>
                <button className="bg-gray-50 text-black p-2 cursor-pointer"><BsSearch/></button>
            </div>
        </div>
    )
}

export default Search