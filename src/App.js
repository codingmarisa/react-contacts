import React from 'react';
import './App.css';
import Navbar from './Navbar/navbar.component';
import ContactList from './Contact-list/contact-list.component';
import SearchBox from './Search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = { contacts: [], searchFilter: '' }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=3&inc=picture,name,phone,email,location,id&nat=us')
      .then(response => response.json())
      .then(contacts => this.setState({ contacts: contacts.results }));
  }

  onSearchChange = (event) => {
    this.setState({ searchFilter: event.target.value})
  }

  render() { 
    const { contacts, searchFilter } = this.state;
    const filteredContacts = contacts.filter(contact => 
      contact.name.first.toLowerCase().includes(searchFilter.toLowerCase()) || 
        contact.name.last.toLowerCase().includes(searchFilter.toLowerCase())
    );
    console.log(filteredContacts);

    return (
      <div className="App">
        <Navbar />
        <div>
          <h1>Heading One 1 - Rufina</h1> 
          <p>Paragraph text - Oxygen</p>
          <SearchBox onSearchChange={this.onSearchChange} />
          <ContactList filteredContacts={filteredContacts}/>
        </div>
      </div>
  );}
}

export default App;
