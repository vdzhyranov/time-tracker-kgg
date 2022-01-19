import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {NoteType, User, UsersContext} from "../../hooks/useGetUsersContext";
import {Profile, Company} from "../index";


function Details() {
    const {slug} = useParams()
    const {detailsByIdNote, user, notes} = useContext(UsersContext);
    const [note, setNote] = useState<NoteType>()

    useEffect(() => {
        slug && detailsByIdNote(slug)
        setNote(notes.find(note=> note.id === slug))
    },[])
    return (
        <div className='container mx-auto flex items-start h-1/2 bg-amber-100 p-6  '>
            {user !== null && note
                ?
                <div className='w-full'>
                    <div className='flex justify-between '>
                        <div>№{note.id}</div>
                        <p className='text-lg font-bold'>{note.text}</p>
                        <p>spent time: {note.time}</p>
                    </div>
                    <div className='mt-8'>
                      Responsible:  <Profile user={user}/>
                        <Company user={user}/>
                    </div>
                </div>
                :
                    <div>
                        Not founded
                    </div>
                }
        </div>
    );
}

export default Details;