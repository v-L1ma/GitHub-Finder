type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState } from "react"
import { BsSearch } from "react-icons/bs"

function Search({loadUser}:SearchProps){

    const [userName, setUserName] = useState("")

    return(
        <div className="mt-4">
            <h2>Busque por um usuario:</h2>
            <p>Conheça seus melhores projetos:</p>
            <div className="flex items-center">
                <input className="bg-gray-50 text-black p-1" type="text" placeholder="Digite o nome do usuario" onChange={(e)=> setUserName(e.target.value)}/>
                <button className="bg-gray-50 text-black p-2 cursor-pointer" onClick={()=>loadUser(userName)}><BsSearch/></button>
            </div>
        </div>
    )
}

export default Search