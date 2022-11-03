import { useContext, useState, useEffect} from "react"
import { fetchReviews } from "../API"
import { UserContext } from "../UserContext"



export const HomePage = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const {user} = useContext(UserContext)
    const [reviews, setReviews] = useContext([])

    useEffect(()=>{
        setIsLoading(true)
        fetchReviews().then((reviews)=>{
            setReviews(reviews)
            setIsLoading(false)
        })
    },[])

    if (isLoading) return <h2>Loading...</h2>
    

return <div>
     <p>{reviews}</p>
    </div>

}

