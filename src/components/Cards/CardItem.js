import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { getUserPost } from '../../services/api';

export default function CardItem({
    id,
    name,
    email,
    phone,
    website,
    onChange,
}) {
    const [userPost, setUserPost] = useState([]);
    const [showPost, setShowPost] = useState(false);

    useEffect(() => {
        getUserPost(id).then((data) => setUserPost(data));
    }, [id]);

    const handleClick = () => {
        setShowPost(!showPost);
    };

    return (
        <>
            <Card>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone.split(' ')[0]}</p>
                <p>{website}</p>
                <Button
                    type="button"
                    onClick={() => {
                        handleClick();
                        onChange(!showPost, userPost);
                    }}
                >
                    {showPost ? 'Hide posts' : 'Show all posts '}
                </Button>
            </Card>
        </>
    );
}

const Card = styled.li`
    width: 250px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #333348;
    border-radius: 40px;
    margin-top: 30px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        width: 220px;
        height: 220px;
    }
    @media screen and (min-width: 1000px) {
        width: 220px;
        height: 240px;
    }

    @media screen and (min-width: 1500px) {
        width: 270px;
        height: 220px;
        font-size: 18px;
    }
`;

const Button = styled.button`
    display: block;
    background: #52519d;
    border-radius: 40px;
    padding: 16px 38px;
    border: none;
    color: inherit;
    margin: 0 auto;
    margin-top: 30px;
    cursor: pointer;

    @media screen and (min-width: 1000px) {
        padding: 16px 15px;
    }
`;

CardItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};
