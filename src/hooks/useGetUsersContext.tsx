import  {useState, useCallback, createContext} from "react";
import {useLocalStorage} from './useLocaleStorage';

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface UsersContextData {
    users: User[];
    isLoading: boolean;
    fetchUsers: () => void;
    addNote: (obj:NoteType) => void;
    notes: NoteType[];
    getAllUserNotes: (name: string ) => NoteType[],
    detailsByIdNote: (id: string) => void,
    user: User | null
}
export const usersContextValue: UsersContextData = {
    users: [],
    isLoading: false,
    fetchUsers: () => null,
    addNote: () => null,
    notes: [],
    getAllUserNotes:() => [],
    detailsByIdNote: () => {},
    user: null
}
export type NoteType = {
    id: string | null,
    text: string | null,
    time: string | null,
    responsible: string | null
}


 export const useGetUsersContext = (): UsersContextData => {
    const [users, setUsers] = useState<User[]>([]);
     const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const fetchUsers = useCallback(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((fetchedUsers) => {
                setUsers(fetchedUsers);
            })
            .catch((error) => {
                throw new Error(error)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [setUsers]);
    const [notes, setNotes] = useLocalStorage("notes", []);
    const addNote = (obj:NoteType) =>  {
         const newNote = {
             id: obj.id,
             text: obj.text,
             time: obj.time,
             responsible: obj.responsible,
         };
         setNotes([...notes, newNote]);
     };
    const getAllUserNotes = (name:string) => {
        return notes.filter((note:NoteType) => note.responsible === name)
    }

    const detailsByIdNote = (slug:string) => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then((fetchedUser) => {
                const note = notes.find((note:NoteType) => note.id === slug)
                // @ts-ignore
                setUser(fetchedUser.find((user:User)=> user.name === note.responsible));
            })
            .catch((error) => {
                throw new Error(error)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return {
        users,
        isLoading,
        fetchUsers,
        addNote,
        notes,
        getAllUserNotes,
        detailsByIdNote,
        user
    }
}

export const UsersContext = createContext<UsersContextData>(usersContextValue);