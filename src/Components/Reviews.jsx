import { BrowserRouter, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchReviews } from '../API'
import ReviewCard from './ReviewCard'


export const Reviews = () =>{

    const [isLoading, setIsLoading] = useState(true)
const [reviews, setReviews] = useState([])

    useEffect(()=>{
        setIsLoading(true)
        fetchReviews().then((reviews)=>{
            setReviews(reviews)
            setIsLoading(false)
        })
    },[])
    
    if (isLoading) return <h2>Loading...</h2>
    
    return <section>
        <h2>Reviews</h2>
        <ul> 
        {reviews.map(review => {             
                    return <li key={review.review_id}>  
                     <ReviewCard Reviews={review}/>                                               
                    </li>                 
                })}
              
        </ul>
    </section>
    
    }

