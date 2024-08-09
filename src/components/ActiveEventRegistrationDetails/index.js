// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  gettingItialStatus = () => (
    <div className="event-intial">
      <p className="event-intial-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  yetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yet-register-button" type="button">
        Register Here
      </button>
    </div>
  )

  registeredSuccessfully = () => (
    <div className="register-sucessful-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="register-success"
      />
      <h1 className="register-success-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  registrationClosed = () => (
    <div className="register-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt=" registrations closed"
        className="register-closed"
      />
      <h1 className="register-closed-heading">Registrations Are Closed Now!</h1>
      <p className="registration-closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {registrationStatus} = this.props

    switch (registrationStatus) {
      case 'INITIAL':
        return this.gettingItialStatus()
      case 'YET_TO_REGISTER':
        return this.yetToRegister()
      case 'REGISTERED':
        return this.registeredSuccessfully()
      case 'REGISTRATIONS_CLOSED':
        return this.registrationClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
