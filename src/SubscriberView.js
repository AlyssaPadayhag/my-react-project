function SubscriberView({ subscriber, deleteSubscriber }) {
    return (
      <li>
        <p>Name: {subscriber.name}</p>
        <p>Email: {subscriber.email}</p>
        <button name="delete" onClick={deleteSubscriber}>
          Unsubscribe
        </button>
      </li>
    );
  }
  
  export default SubscriberView;