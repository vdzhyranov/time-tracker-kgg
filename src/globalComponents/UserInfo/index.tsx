import React, {useContext} from 'react';
import {NoteType, User, UsersContext} from "../../hooks/useGetUsersContext";

import moment from 'moment'
import {AddNote, Profile, ListNotes, Company} from "../../components";

type UserInfoProps = {
    user: User
}

const UserInfo = ({user}:UserInfoProps) =>{
    const {getAllUserNotes, addNote} = useContext(UsersContext);
    const [newNote, setNewNote] = React.useState<NoteType>({
        id: moment().format('DDMMYYYYhhmmss'),
        text: null,
        time: null,
        responsible: user.name,
    })
    const saveNewNote = () => {
        if(!Object.values(newNote).includes(null)) {
            addNote(newNote)
            setNewNote({
                id: moment().format('DDMMYYYYhhmmss'),
                text: null,
                time: null,
                responsible: user.name,
            })
        }
    }
    return (
        <div>
            <div className='flex items-center justify-between'>
                <Profile user={user}/>
                <Company user={user}/>
            </div>
            <AddNote newNote={newNote} saveNewNote={saveNewNote} setNewNote={setNewNote}/>
            <ListNotes list={getAllUserNotes(user.name)} />
        </div>
    );
}

export default UserInfo;