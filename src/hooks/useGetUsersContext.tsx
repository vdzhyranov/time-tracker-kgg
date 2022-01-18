import React, {useState, useCallback, createContext} from "react";

export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
}

export interface UsersContextData {
    users: User[];
    isLoading: boolean;
    fetchUsers: () => void;

}
export const usersContextValue: UsersContextData = {
    users: [],
    isLoading: false,
    fetchUsers: () => null,
}


 export const useGetUsersContext = (): UsersContextData => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = useCallback(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((fetchedUsers) => {
                setUsers(fetchedUsers);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [setUsers]);

    return {
        users,
        isLoading,
        fetchUsers,
    }
}

export const UsersContext = createContext<UsersContextData>(usersContextValue);