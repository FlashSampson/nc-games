import { useEffect, useState } from "react"
import { fetchReviewsByCategory } from "../API"


export const ReviewCategories = () => {

const [isLoading, setIsLoading] = useEffect(true)
const [reviews, setReviews] = useState([])

useEffect(()=>{
    setIsLoading(true)
    fetchReviewsByCategory().then((reviews)=>{
setReviews(reviews)
setIsLoading(false)
    })
}, [])

if (isLoading) return <h2>Loading...</h2>

    
return <section>
<h2>Reviews</h2>
<ul className='lists'> 
{reviews.map(review => {             
            return <li key={review.review_id}>  
             <ReviewCard Reviews={review}/>                                               
            </li>                 
        })}
      
</ul>
</section>

}