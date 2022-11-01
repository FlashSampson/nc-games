
// import { UserContext } from "../UserContext";
// import { useEffect, useContext } from "react";

// export const Header = () => {

//     const { user, setUser } = useContext(UserContext);

//     useEffect(() => {
//         fetchUserByUsername(user)
//         .then(({user}) => {
//             setUser(user);
//         })
//     },[])
//     const {username, avatar_url} = user;

//     return (
//     <section>
//         <h1>NC Games</h1>
//         <div className="login-user-avatar">
//             <p>{username}</p>
//             <img className="current-user-image" src={avatar_url}/>
//         </div>
//     </section>
    
//     );
// }