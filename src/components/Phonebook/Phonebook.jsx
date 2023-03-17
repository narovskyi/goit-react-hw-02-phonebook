import React, { Component } from "react";
import { nanoid } from "nanoid";
import Contacts from "components/Contacts";
import Form from "components/Form";

class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
        ],
        name: '',
        number: ''
    }

    inputValueHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addContactHandler = () => {
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
    }

    render() {
        const { name, number } = this.state;
        return (
            <>
                <h2>Phonebook</h2>
                <Form
                    name={name}
                    number={number}
                    onChange={this.inputValueHandler}
                    addingContact={this.addContactHandler}
                />
                <Contacts contacts={this.state.contacts} />
            </>
        );
    };
}

export default Phonebook;