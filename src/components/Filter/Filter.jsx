const Filter = ({filter, onChange}) => (
    <>
        <label htmlFor="filter">Filter</label>
        <br />
        <input type="text" name='filter' onChange={onChange} value={filter}/>
    </>
);

export default Filter;