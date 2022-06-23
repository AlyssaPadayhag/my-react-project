import React, { useState } from "react";

function CoinTossCounter() {
    const [results, setResults] = useState([]);
    const [counts, setCounts] = useState({ H: 0, T: 0 });
    const handleClick = (value) => {
        setResults([...results, value]);
        setCounts({
          ...counts,
          [value]: counts[value] + 1,
        });
      };
  
    const lis = results.map((result, index) => (
      <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
    ));

    
    

    const handleDeleteLast = () => {
        const last = results[results.length - 1];
        const list = results.slice(0, -1);
      
        setResults(list);
        if (last) {
          setCounts({
            ...counts,
            [last]: counts[last] - 1,
          });
        }
      };

    /* If you know the index of the element, you can delete by index
    const deleteToss = (indexToDelete) => {
    setResults((currentResults) =>
    currentResults.filter((ignored, index) => index !== indexToDelete));};


        You can also delete by the value or any property of the element in the object.
        For example, if you have a list of users loaded from a database, it is common to delete by ID, like this:
    const deleteUser = (idToDelete) => {
    setUsers((currentUsers) =>
    currentUsers.filter((user) => user.id !== idToDelete));};
    */

    return (
      <section>
        <div>
          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
          <button onClick={handleDeleteLast}>Delete Last</button>
          <ul>
            <li>Heads: {counts["H"]}</li>
            <li>Tails: {counts["T"]}</li>
          </ul>
        </div>
        <ul>{lis}</ul>
      </section>
    );
  }

export default CoinTossCounter;