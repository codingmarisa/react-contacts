import React from 'react';

class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contact: this.props.contact }
    }

    render() {
        const { contact } = this.props;

        return (
            <div>
                <h2>{contact.name.first} {contact.name.last}</h2>
                <img src={contact.picture.large} alt={`${contact.name.first} ${contact.name.last}`}/>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.location.street.number} {contact.location.street.name}<br />
                {contact.location.city}, {contact.location.state} <br />
                {contact.location.postcode}</p>

            </div>
        );
    }
}

export default ContactCard;