import React, { Component } from "react";
import { nanoid } from "nanoid";
import Contacts from "components/Contacts";
import UserAddForm from "components/UserAddForm";
import Filter from "components/Filter";

class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
        ],
        filter: '',
        name: '',
        number: ''
    }

    inputValueHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addContactHandler = (e) => {
        e.preventDefault();
        const normilizedName = this.state.name.toLowerCase();
        const sameName = this.state.contacts.filter(contact => contact.name.toLowerCase() === normilizedName);
        if (sameName.length > 0) {
            alert(`${sameName[0].name} is already in contacts`);
            return;
        }
        this.setState({
            contacts: [
                ...this.state.contacts,
                {
                    id: nanoid(),
                    name: this.state.name,
                    number: this.state.number
                }
            ]
        });
        this.setState({
            name: '',
            number: ''
        })
    }

    deleteContact = (id) => {
        const updatedContacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({
            contacts: updatedContacts
        });
    }

    render() {
        const { name, number, filter, contacts } = this.state;
        const normilizedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
        return (
            <>
                <h2>Phonebook</h2>
                <UserAddForm
                    name={name}
                    number={number}
                    onChange={this.inputValueHandler}
                    addingContact={this.addContactHandler}
                />
                <Filter filter={filter} onChange={this.inputValueHandler}/>
                <Contacts contacts={visibleContacts} onClick={ this.deleteContact}/>
            </>
        );
    };
}

export default Phonebook;