/*function Content() {
    return <p>CONTENT</p>
}

export default Content;*/

function Content({ loggedIn }) {
    return loggedIn && <p>CONTENT</p>;
}

export default Content;