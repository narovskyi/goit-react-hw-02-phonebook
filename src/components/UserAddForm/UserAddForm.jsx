import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    number: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number: Yup.string().required('Required')
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
                />
                <ErrorMessage component='div' name="name" />
                <br/>
                <Field
                    placeholder="Number"
                    type="tel"
                    name="number"
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