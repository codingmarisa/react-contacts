import React from 'react';
import ContactCard from '../Contact-card/contact-card.component';
import './contact-list.styles.css';

function ContactList({ filteredContacts }) {
    return (
        <div className='contact-list-div'>
            { filteredContacts.map(contact => (
                <ContactCard contact={contact} key={contact.id.value}/>
            ))}
        </div>
    );
}

export default ContactList;