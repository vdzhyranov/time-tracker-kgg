import React from 'react';
import {NoteType} from "../../hooks/useGetUsersContext";
import {Link} from 'react-router-dom'

type ListProps = {
    list: NoteType[]
}
function ListNotes({list}:ListProps) {

    return (
            <div className='mt-6 h-full'>
                <h3 className='text-center text-lg font-bold'>List of notes</h3>
                <div className='overflow-y-auto'>
                    {list.length !== 0
                        ? list.map(note => (
                            <Link to={`/details/${note.id}`}  key={note.id}>
                                <div className='flex justify-between w-10/12 mx-auto h-15 border-2  border-solid border-indigo-600 bg-white rounded-lg p-3 mb-3'>
                                    <p>{note.text}</p>
                                    <p>{note.time}</p>
                                </div>
                            </Link>
                    ))
                        : <div className='text-center'>Notes not founded</div>}
                </div>
            </div>
    );
}

export default ListNotes;