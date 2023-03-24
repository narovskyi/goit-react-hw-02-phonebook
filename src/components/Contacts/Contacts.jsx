const Contacts = ({contacts, onClick}) => (
    <>
        <h2>Contacts</h2>
        <ul>
            {contacts.map(({ name, id, number }) => (
                <li key={id}>
                    {name}: <span>{number}</span>
                    <button onClick={()=>{onClick(id)}}>
                        Delete
                    </button>
                </li>
            ))}   
        </ul>
    </>
);

export default Contacts;