import React, { useState, useEffect } from "react";
import "./App.css";
import WelcomeBack from "./WelcomeBack";
import Greetings from "./Greetings";
import Quote from "./Quote";
import Header from "./Header";
import Content from "./Content";
import CoinTossCounter from "./CoinTossCounter";
import SubscriberForm from "./SubscriberForm";
import SubscriberList from "./SubscriberList";
import SubscriberFormTwo from "./SubscriberFormTwo";
import ProfileEdit from "./ProfileEdit";
import ProfileEdit2 from "./ProfileEdit2";

/******* MODULE 25.9 - Styling *******/

const quote = {
  text:
    "I am great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};

/******* MODULE 25.8 - Lists and tables ********/

const todos = [
  "Finish the Lists & Tables checkpoint",
  "Clean my desk",
  "Make lunch",
];

const todos2 = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

/******* MODULE 25.7 - Conditional rendering *******/

function Notifications({ notifications }) {
  /*if (notifications.length > 0) {
    return <p>You have {notifications.length} notifications today!</p>;
  }
  return null;*/
  return (
    notifications.length > 0 && (
      <p>You have {notifications.length} notifications today!</p>
    )
  );
}

/******* MODULE 25.6 - Components and props *******/
function EncouragingWords() {
  return <p>Believe you can and you're halfway there.</p>;
}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
}

function App() {
  const notifications = ["You received a package", "The weather is sunny"];
  const listItems = todos.map((todo, index) => <li key={index}>{todo}</li>); 
  const rows = todos2.map(({ completed, description }, index) => (
    <tr key={index}>
      <td>{description}</td>
      <td>{completed ? "Yes" : "No"}</td>
    </tr>
  ));
  const handleSubscribe = () => { console.log("Subscribing!");};  
  const handleClick = (e) => console.log(e.target);
  const [subscribed, setSubscribed] = useState(false);
  console.log("Subscribed status:", subscribed);
  const [alerts, setAlerts] = useState(false);

  const [subscribedFive, setSubscribedFive] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alertsTwo, setAlertsTwo] = useState(false)

  
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  const [subscribers, setSubscribers] = useState([]);
  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      newSubscriber,
      ...currentSubscribers,
    ]);
  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) =>
      currentSubscribers.filter((post, index) => index !== indexToDelete)
    );
  
  const [count, setCount] = useState(0);
  const [name2, setName2] = useState("");
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);
  function changeHandler(event) {
    setName2(event.target.value);
  }

  const [userId, setUserID] = useState(1);
  const userIds = [1, 2, 3, 4];

  return <>
  <WelcomeBack name="Joe" adjective="funny"/>
  <WelcomeBack name="Anna" adjective="clever"/>
  <WelcomeBack />
  <EncouragingWords />
  <DailyTip />
  <Greetings language="es" />
  <Greetings />
  <Notifications notifications={notifications} />
  <ul>{listItems}</ul>
  <table style={{ border: "1px solid #000", textAlign: "center", borderRadius: "4px" }}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Completed?</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  <WelcomeBack name="Joe" />
  <Quote quote={quote} />
  <section>
    <p>Please click to subscribe to my updates!</p>
    <button onClick={() => console.log("Subscribing!")}>Subscribe</button>
    <button onClick={handleSubscribe}>SubscribeTwo</button>
    <button onClick={handleClick}>SubscribeThree</button>
    <button onClick={() => setSubscribed(!subscribed)}>{subscribed ? "Unsubscribe" : "Subscribe"}</button>
    <button onClick={() => setAlerts(!alerts)}>{alerts ? "Stop Email Alerts" : "Get Email Alerts"}</button>
  </section>

  <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribedFive(!subscribedFive);
          setSubscribedCount(subscribedCount + 1);
          if (!alertsTwo) setAlertsTwo(true);
        }}
      >
        {subscribedFive ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlertsTwo(!alertsTwo)}>
        {alertsTwo ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
    </section>

{/******* MODULE 26.5 - State over multiple componenets *******/}
<div>
  <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
  <Content loggedIn={loggedIn} />
</div>

{/******* MODULE 26.6 - Arrays and objects as state *******/}
  <CoinTossCounter />

{/******* MODULE 26.7 - Forms with input fields *******/}
  <SubscriberForm createSubscriber={createSubscriber} />
  <SubscriberList
    subscribers={subscribers}
    deleteSubscriber={deleteSubscriber}
    />

{/******* MODULE 26.8 - Complex Forms *******/}
  <SubscriberFormTwo />

{/******* MODULE 28.2 - useEffect() *******/}
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count +1)}>Click me</button>
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name2"
          value={name2}
          onChange={changeHandler}
        />
      </label>
    </form>
  </div>


{/*<ProfileEdit /> */}

{/******* MODULE 28.3 Effect hook with cleanup *******/}
<div>
  {userIds.map((id) => (
    <button key={id} onClick={() => setUserID(id)}>
      User ID {id}
    </button>
  ))}
  <h2>User ID {userId}</h2>
  <ProfileEdit2 userId={userId} />
</div>
  </>
}

export default App;

/******* MODULE 25.5 - INTRO TO JSX *******/

/* const name = "Alice";
   const element = <h1>Hello {name}!</h1> */

  /* const url = "https://www.thinkful.com";
  const linkText = "Thinkful";
  const element = <a href={url}>{linkText}</a>;
  return element; */

  /* const item = "apple";
  const price = 2;
  const count = 10;
  const element = (
    <div>
      <h1>Total Purchased:</h1>
      <p>Purchased {count} {item}s for ${price} each. The total is ${count * price}.</p>
    </div>
  )
  return element; */

    /*const name = "Alice";
  const url = "https://www.thinkful.com/";
  const linkText = "Thinkful";
  const element = (
    <p>
      {" "}
      Hey, {name}! Please visit <a href={url}>{linkText}</a>.
    </p>
  );
  
  return element;*/

  /* const purchaseObj = {item:"apple", price:2, count:10};

  const element = (
    <>
      <h1>Total Purchased:</h1>
      <h2>Top Level JSX Element/Parent Elements</h2>
      <p>Purchased {purchaseObj.count} {purchaseObj.items}s for ${purchaseObj.price} each.
      The total is ${purchaseObj.count * purchaseObj.price}.</p>
    </>
  )
  return element; */

  // Self-closing
  /*
    <img />
    <input />
    <link />
    <br />
    <hr />
  */