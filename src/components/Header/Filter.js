import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function Filter({ search, onChange }) {
    return (
        <Input
            type="text"
            name="filter"
            placeholder="Search"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={search}
            onChange={onChange}
        />
    );
}

const Input = styled.input`
    width: 248px;
    height: 70px;
    background: #333348;
    border-radius: 40px;
    padding: 20px 35px;
    font-family: inherit;
    color: #eee;
    border: none;
    cursor: pointer;
    &::placeholder {
        color: #eee;
    }

    @media screen and (max-width: 768px) {
        margin-left: 20px;
    }
`;

Filter.propTypes = {
    search: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
