import React from 'react';
import {User} from "../../hooks/useGetUsersContext";

type UserInfoProps = {
    user:User
}


function Company({user}:UserInfoProps) {
    return (
        <div className='text-right'>
            <p>Company info:</p>
            <h2 className='text-lg font-bold'>{user.company.name}</h2>
            <p>{user.company.catchPhrase}</p>
            <a href={user.website} className='text-md text-gray hover:text-sky-400 cursor-pointer'>{user.website}</a>
        </div>
    );
}

export default Company;