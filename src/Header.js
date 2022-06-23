/* import React, { useState } from "react";

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <button onClick={() => setLoggedIn(!loggedIn)}>
            { loggedIn ? "Log Out" : "Log In" }
        </button>
    );
}

export default Header;*/

function Header({ loggedIn, handleLoggedInClick }) {
    return (
        <button onClick={handleLoggedInClick}>
            {loggedIn ? "Log Out" : "Log In"}
        </button>
    );
}

export default Header;