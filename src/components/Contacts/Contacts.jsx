const Contacts = ({contacts}) => (
    <>
        <h2>Contacts</h2>
        <ul>
            {contacts.map(({ name, id, number }) => (
                <li key={id}>{name}: <span>{number}</span></li>
            ))}   
        </ul>
    </>
);

export default Contacts;