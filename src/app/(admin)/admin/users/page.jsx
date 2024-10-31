import { getUsers } from "@/DAO/users.db";
import AddBtn from "./components/AddBtn/AddBtn"
import SearchBar from "../componets/SearchBar/SearchBar"
import Table from "./components/Table/Table"

async function Users() {
    const usersData = await getUsers();

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Usuarios</h1>
                </div>
            </header>
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <AddBtn />
                    <SearchBar />
                </div>
                <Table users={usersData} />
            </main>
        </>
    );
}

export default Users;