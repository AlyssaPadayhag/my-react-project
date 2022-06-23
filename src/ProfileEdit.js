import React, { useState, useEffect } from "react";

function ProfileEdit() {
    const [user, setUser] = useState({});

    /* REFACTOR CODE
    const usernameChangeHandler = (event) => {
        setUser({ ...user, username: event.target.value });
    };

    const emailChangeHandler = (event) => {
        setUser({ ...user, email: event.target.value });
    };*/

    const changeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    // console.log("render", user);

    useEffect(() => {
        async function loadUsers() {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
          );
          const userFromAPI = await response.json();
          // console.log("setUser", userFromAPI);
          setUser(userFromAPI);
        }
        loadUsers();
      }, []); // Passing [] so that it only runs the effect once

    useEffect(() => {
        if (user.username) {
            document.title = `${user.username} : Edit Profile`;
        } else {
            document.title = `Edit Profile`;
        }
    }, [user]);

    /**
     Tip: Don't call hooks inside loops, conditions, or nested functions. Instead, always use hooks at the top
     level of your React function. By following this rule, you can ensure that hooks are called in the same order
     each time that a component renders. That's what allows React to correctly preserve the state of hooks between
     multiple useState() and useEffect() calls.
     */


      /** Promise interface, older syntax
       * useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then(setUser);
}, []);
       */

async function submitHandler(event) {
    event.preventDefault();
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}
        `,
        {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }
    );
    const savedData = await response.json();
    console.log('Saved User!', savedData);
}
    
      if (user.id) {
        // `user.id` is truthy after the API call returns
    return (
        <form name='profileEdit' onSubmit={submitHandler}>
            <label htmlFor="username">
                User Name:
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={user.username}
                    onChange={changeHandler}
                />
            </label>

            <label htmlFor="email">
                Email:
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={changeHandler}
                />
            </label>
            <button type='submit'>Save</button>
        </form>
    );
    }
    return "Loading";
}

export default ProfileEdit;