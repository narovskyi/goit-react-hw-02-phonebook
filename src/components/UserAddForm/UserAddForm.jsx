import { Formik } from 'formik';
import * as Yup from 'yup';

const UserAddForm = ({ name, number, onChange, addingContact }) => (
    <>
        <form onSubmit={addingContact}>
            <label htmlFor="name">Name</label>
            <br/>
            <input
                onChange={onChange}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <br/>
            <label htmlFor="number">Number</label>
            <br/>
            <input
                onChange={onChange}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <br/>
            <button type="submit">Add contact</button>
        </form>
    </>
);

export default UserAddForm;