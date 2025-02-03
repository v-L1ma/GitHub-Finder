import { useState } from "react"
import Search from "../components/Search"
import { UserProps } from "../types/user"
import User from "../components/User"
import Error from "../components/Error"

function Home(){

    const [user, setUser] = useState<UserProps | null>(null)
    const [hasError, setHasError] = useState(false)

    const loadUser = async(userName:string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

        if(res.status === 404){
            setHasError(true)
            return
        }

        const {avatar_url, login, location, followers, following} = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        }

        setUser(userData)
    }



    return(
        <main className="flex items-center flex-col p-7 w-full">
            <div className="">
                <h1 className="text-3xl">GitHub Finder</h1>
                <Search loadUser={loadUser}/>
                {user ? <User {...user}/>: hasError && <Error/>}                
            </div>
        </main>
    )
    
}

export default Home