import { useState } from "react"
import Search from "../components/Search"
import { UserProps } from "../types/user"

function Home(){

    const [user, setUser] = useState<UserProps | null>(null)

    return(
        <main className="flex items-center flex-col p-7">
            <div className="">
                <h1 className="text-3xl">GitHub Finder</h1>
                <Search/>
            </div>
        </main>
    )
    
}

export default Home