import styles from './styles/eventinfo.module.css';

const eventDetails = {
  Date: 'Sunday, December 14, 2025',
  Time: '6:00 PM WAT',
  Venue: 'The Civic Center, Victoria Island, Lagos',
  Dress_Code: 'African Royalty',
};

function EventInfo() {
  return (
    <div className={styles.eventInfo}>
      <ul>
        {Object.entries(eventDetails).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace('_', ' ')}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventInfo;
