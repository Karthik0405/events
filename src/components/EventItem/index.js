// Write your code here
import './index.css'

const EventItem = props => {
  const {eachItem, eventRegistration, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eachItem
  const borderClass = isActive ? 'clicked-border' : ''
  const gettingEventId = () => {
    eventRegistration(registrationStatus, id)
  }
  console.log(isActive)
  return (
    <li className="item-container">
      <button className={`event-item-button ${borderClass} `} type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-item-image"
          onClick={gettingEventId}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
