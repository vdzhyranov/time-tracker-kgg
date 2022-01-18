import React, {useContext, useEffect, useState} from 'react';
import {UsersContext, User} from "../../hooks/useGetUsersContext";


const Trackers = () =>  {
    const { fetchUsers, users} = useContext(UsersContext);
    const [selectedUser, setSelectedUser] = useState<User | {}>({})

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    const handlerSaveUser: (e:React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        const findUser = users.find(user => user.name === e.target.value)
        findUser &&  setSelectedUser(findUser)
    }
    return (
        <div className='w-11/12 flex justify-evenly mx-auto items-start h-full'>
            <div className='w-1/3 mr-10'>
                <input
                    type="text"
                    list='autocomplete'
                    className='border-solid border-b-2 border-indigo-100 h-10 w-full px-6'
                    placeholder='Search User'
                    onChange={handlerSaveUser}
                />
                <datalist id='autocomplete' className='border-solid border-2 border-indigo-100'>
                    {
                        users.map(user => (
                            <option value={user.name} key={user.name}>{user.name}</option>
                        ))
                    }
                </datalist>
            </div>
            <div className='w-9/12'>

            </div>
        </div>
    );
}

export default Trackers;