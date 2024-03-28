import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type User = {
    name: string;
    id: number;
}

function getUser(): User[] {
    return [
        {
            name: 'simo',
            id: 1
        },
        {
            name: 'Ana',
            id: 2
        }
    ]
}

export async function loader() {
    return json(getUser());
}

export default function UsersIndexRoute() {
    const users = useLoaderData<User[]>();

    return (
        <div>
            <p>Here are the users:</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}