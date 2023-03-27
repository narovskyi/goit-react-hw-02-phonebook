const Filter = ({filter, onChange}) => (
    <>
        <input
            type="text"
            name='filter'
            placeholder="Filter"
            onChange={onChange}
            value={filter}
        />
    </>
);

export default Filter;