
const ReviewCard = ({Reviews}) =>{
    console.log(Reviews)
    const {owner, review_id, 
        title, category, designer, 
        review_body, review_img_url, created_at, votes, comment_count} = Reviews

      


return (
    <div >
        <img className="Review-picture" src={review_img_url}/>
        <p>Username: {owner}</p> 
        <p>{review_body}</p>

    </div>
    )
}

export default ReviewCard