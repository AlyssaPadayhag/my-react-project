import SubscriberView from "./SubscriberView";

function SubscriberList({ subscribers, deleteSubscriber }) {
  return (
    <>
      <h2>Subscribers</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <SubscriberView
            deleteSubscriber={() => deleteSubscriber(index)}
            key={index}
            subscriber={subscriber}
          />
        ))}
      </ul>
    </>
  );
}

export default SubscriberList;