import React from 'react';
import avatar from "../../img/avatar.svg";
import {User} from "../../hooks/useGetUsersContext";

type UserInfoProps = {
    user:User
}

const  Profile = ({user}:UserInfoProps) => {
    return (
        <div>
            <div className='flex items-center'>
                <img src={avatar} alt="avatar" className='w-20'/>
                <h2 className='text-3xl ml-4'>{user.name}</h2>
            </div>
            <div className='flex flex-col mt-6'>
                <a className='text-md hover:text-sky-400 cursor-pointer' href={'mailto:' + user.email}>{user.email}</a>
                <a className='text-md text-gray hover:text-sky-400 cursor-pointer' href={'tel:' + user.phone }>{user.phone}</a>
            </div>
        </div>
    );
}

export default Profile;