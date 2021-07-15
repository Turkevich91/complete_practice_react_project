import React, {useState} from 'react'
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
    const USERS = [
        {
            id: 'u1',
            name: 'Axel',
            age: 34
        },
        {
            id: 'u2',
            name: 'Max',
            age: 30
        }
    ]
    const [usersList, setUsersList] = useState(USERS)

    function addUserHandler(uName, uAge) {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, {id:Math.random().toString(),name:uName,age:uAge}]
        })

        console.log(usersList)
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={usersList} />
        </div>
    );
}

export default App;
