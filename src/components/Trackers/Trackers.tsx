import React, {useContext, useEffect, useState} from 'react';
import {UsersContext, User} from "../../hooks/useGetUsersContext";
import {DropDown} from "../index";
import UserInfo from "../../globalComponents/UserInfo";


const Trackers = () =>  {
    const { fetchUsers, users} = useContext(UsersContext);
    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    const handlerSaveUser: (e:React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        const findUser = users.find(user => user.name === e.target.value)
        findUser ? setSelectedUser(findUser) : setSelectedUser(null)
    }
    return (
        <div className='w-11/12 flex justify-evenly mx-auto items-start h-full bg-gray'>
                <DropDown onClick={handlerSaveUser} users={users} />
                <div className='w-9/12 bg-slate-200 h-full p-10 border rounded-md'>
                {selectedUser ?  <UserInfo user={selectedUser}/> : 'Please select user'}</div>
        </div>
    );
}

export default Trackers;