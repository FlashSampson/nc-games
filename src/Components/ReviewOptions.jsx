import { useState, useEffect } from "react"
import { fetchReviews } from "../API"
import { Link } from "react-router-dom"



export const ReviewOptions = ()=>{


    const [isLoading, setIsLoading] = useState(true)
    const [category, setCategories] = useState([])
    

    useEffect(()=>{
        setIsLoading(true)
        fetchReviews().then((reviews)=>{
            const uniqueCategory = reviews.map((review)=>{
return review.category
})
let categoryOptions = uniqueCategory;
let uniquecategoryOptions = [...new Set(categoryOptions)];

setCategories(uniquecategoryOptions)

            setIsLoading(false)
        })
    },[])

    
    if (isLoading) return <h2>Loading...</h2>


    return <section className="grid">
    <h2>Review categories</h2>
    <div id="container">
    <ul className='lists'> 
    {category.map(category => {           
                return <li className="boxes" id="link" key={category}>  
                <Link to={`/category/${category}`}>      
                <h2>{category}</h2>           
                </Link>
                </li>                 
            })}
    </ul>
    </div>
</section>
}

