import { Link } from "react-router-dom"


const ReviewCard = ({Reviews}) =>{



    const {owner, review_id, 
        title, category, designer, 
        review_body, review_img_url, created_at, votes, comment_count} = Reviews


return (
    <div className="boxes">
        <Link to={`/reviews/${review_id}`} >
        <img className="Review-picture" src={review_img_url}/>
        <h3>Read review : {title}</h3>
        </Link>
        <h4>Username: {owner}</h4>
            <h4>Category: {category}</h4>
        <p className="text-box" >{review_body}</p>
        

    </div>
    )
}

export default ReviewCard