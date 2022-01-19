import React, {useContext} from 'react';
import {UsersContext} from "../../hooks/useGetUsersContext";
import ListNotes from "../../globalComponents/ListNotes";


const ListOfNotes = () =>  {
    const {notes} = useContext(UsersContext);

    return (
           <ListNotes list={notes}/>
    );
}

export default ListOfNotes;