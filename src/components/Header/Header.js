import PropTypes from 'prop-types';

import Filter from './Filter';

import styled from 'styled-components';

export default function Header({ changeSort, filter, changeFilter, ...props }) {
    return (
        <HeaderEl {...props}>
            <Text onClick={changeSort}>Sort </Text>
            <Filter search={filter} onChange={changeFilter} />
        </HeaderEl>
    );
}

const HeaderEl = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 75%;
        justify-content: center;
    }

    @media screen and (max-width: 1000px) {
        width: 450px;
    }
`;
const Text = styled.p`
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

Header.propTypes = {
    changeSort: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};
