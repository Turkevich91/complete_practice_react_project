import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"

function AddUser(props) {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredUserAge, setEnteredUserAge] = useState('')
    const [error, setError] = useState()

    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value)

    }

    function userAgeChangeHandler(event) {
        setEnteredUserAge(event.target.value)
    }

    function addUserHandler(event) {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name age (non-empty values).'
            })
            return
        }
        if (+enteredUserAge < 0) {
            setEnteredUserAge('')
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age (>0).'
            })
            return
        }

        props.onAddUser(enteredUsername, enteredUserAge)

        setEnteredUsername('')
        setEnteredUserAge('')
    }

    function errorHandler() {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        value={enteredUserAge}
                        onChange={userAgeChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser