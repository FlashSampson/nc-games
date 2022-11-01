import { useState, useContext} from 'react'
import {UserContext} from '../UserContext';


const UserCard = ({givenUser}) => {
    const { username, avatar_url} = givenUser;
    const { user ,setUser } = useContext(UserContext);

    const handleChangeUser = (user) => {
        setUser(user)
    }

    return (
    <div onClick={() => handleChangeUser(username)}>
        <img className="login-user-avatar" src={avatar_url}/>
        <h2>{username}</h2>
    </div>
    )

}
export default UserCard;