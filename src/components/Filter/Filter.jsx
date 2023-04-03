import { Input } from "./Filter.styled";
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => (
    <>
        <Input
            type="text"
            name='filter'
            placeholder="Filter"
            onChange={onChange}
            value={filter}
        />
    </>
);

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;