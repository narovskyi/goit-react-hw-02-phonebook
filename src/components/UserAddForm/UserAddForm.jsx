import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    number: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number: Yup.string().required('Required').min(4, 'Number is too short!')
});

const UserAddForm = ({addContact }) => (
    <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={addContact}
        >
            <Form>
                <Field
                    placeholder="Name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                <ErrorMessage component='div' name="name" />
                <br/>
                <Field
                    placeholder="Number"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                />
                <ErrorMessage
                    name="number"
                    render={msg => <div>{msg}</div>}
                />
                <br/>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    </>
);

export default UserAddForm;