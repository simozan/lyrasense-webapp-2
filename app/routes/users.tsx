import { Outlet, Link } from "@remix-run/react";

export default function UsersRoute() {
    return (
        <div>
            <h1>Users</h1>
            {/* <p><Link to="jokes/new">Write a Joke</Link></p> */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}