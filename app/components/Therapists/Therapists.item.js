// Component: Therapists
import React, { Component } from 'react';

// Router
import { Link } from 'react-router';

class Therapist extends Component {

  render() {
    const { id, specialty, name, email, addLink, params: { therapistId } } = this.props;
    const ThankYouMessage = <p className="therapists__thanks"> Thank you for choosing a therapist. <span className="therapists__thanks-name">{name}</span> will be contacted on your behalf. </p>

    return (
        <div id={`therapist-link-${id}`} className="therapists__link">
          { addLink && <Link to={`/therapists/therapist/${id}`} className="therapists__link-contact">Contact</Link>}
          { therapistId && ThankYouMessage }
          <h4 className="therapists__link-name">{name}, MD</h4>
          <span className="therapists__link-email">{email}</span>
          <h5 className="therapists__link-specialty">{specialty}</h5>
        </div>
    );
  }
}

export default Therapist
