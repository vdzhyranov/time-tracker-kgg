import React from 'react';
import {NoteType} from "../../hooks/useGetUsersContext";

type AddNoteType = {
    setNewNote: ({}:NoteType) => void,
    newNote: NoteType,
    saveNewNote: () => void,
}

const AddNote = ({setNewNote,newNote,saveNewNote }:AddNoteType) => {
    return (
        <div className='w-full flex justify-evenly mt-6'>
            <input
                onChange={(e) => setNewNote({...newNote, text: e.target.value})}
                value={newNote.text || ''}
                type="text"
                placeholder='Add new note...'
                className='px-6 border-solid border-b-2  border-indigo-600 h-10 rounded-t-md w-1/2'
            />
            <input
                type="time"
                value={newNote.time || ''}
                className='px-6 border-solid border-b-2  border-indigo-600 h-10 rounded-t-md '
                onChange={(e) => setNewNote({...newNote, time: e.target.value})}
            />
            <button onClick={saveNewNote} className='px-6  text-white   h-10 rounded-t-md bg-indigo-600'> + Add note</button>
        </div>
    );
}

export default AddNote;