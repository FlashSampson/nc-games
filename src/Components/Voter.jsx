import { useState } from "react"
import { useParams } from "react-router-dom"
import { patchVoteCount } from "../API"

export const Voter = ({votes}) =>{

  const [voteCount, setVoteCount] = useState(0);
  const [err, setErr] = useState(null);
 
    const {review_id} = useParams()

    const HandleUpVote = () => {
        setErr(null)
        setVoteCount(() => voteCount + 1);
        patchVoteCount(review_id, voteCount).catch((err)=>{
            setVoteCount(() => voteCount - 1);
            setErr('Something went wrong, please try again.');
        });
      }
    
      const HandleDownVote = () => {
        setVoteCount(() => voteCount - 1);
        patchVoteCount(review_id, voteCount).catch((err)=>{
            setVoteCount(() => voteCount + 1);
            setErr('Something went wrong, please try again 😱');
        }); ;
      };
    
      if (err) return <p className="err">{err}</p>;

    return <section className="boxes">
    <button onClick={HandleUpVote} disabled={voteCount === 1} >⬆</button>
    <h4>Votes : {votes + voteCount}</h4>
    <button onClick={HandleDownVote} disabled={voteCount === -1} >⬇</button>
</section>

    }