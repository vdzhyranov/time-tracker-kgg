import React from 'react';
import {User} from "../../hooks/useGetUsersContext";

type DropDownProps = {
    onClick : (e:React.ChangeEvent<HTMLInputElement>) => void,
    users: User[]
}

const  DropDown = ({onClick, users}: DropDownProps) =>  {
    return (
        <div className='w-1/6 mr-10 pt-6'>
            <h2 className='font-bold mb-6'>Select user:</h2>
            <input
                type="text"
                list='autocomplete'
                className='border-solid border-2 border-indigo-100 h-10 w-full px-6'
                placeholder='Search User'
                onChange={onClick}
            />
            <datalist id='autocomplete' className='border-solid border-2 border-indigo-100'>
                {
                    users.map(user => (
                        <option value={user.name} key={user.name}>{user.name}</option>
                    ))
                }
            </datalist>
        </div>
    );
}

export default DropDown;