import { useState } from 'react';
import PropTypes from 'prop-types';

import CardItem from './CardItem';
import Post from '../Posts/Post';

import styled from 'styled-components';

export default function Card({ firstIndex, lastIndex, users }) {
    const [show, setShow] = useState(false);
    const [userPost, setUserPost] = useState([]);

    const handleChange = (showPost, userPost) => {
        setShow(showPost);
        setUserPost(userPost);
    };

    return (
        <>
            {users && (
                <UsersWrap>
                    <ListUsers>
                        {users
                            .slice(firstIndex, lastIndex)
                            .map(({ id, name, email, phone, website }) => (
                                <CardItem
                                    key={id}
                                    id={id}
                                    name={name}
                                    email={email}
                                    phone={phone}
                                    website={website}
                                    onChange={handleChange}
                                />
                            ))}
                    </ListUsers>
                    {show && <Post data={userPost} />}
                </UsersWrap>
            )}
        </>
    );
}

const UsersWrap = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-height: 75%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: center;
        min-height: 900px;
        margin-left: 60px;
    }
`;

const ListUsers = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 300px;

    @media screen and (min-width: 0px) {
        margin-top: -50px;
        justify-content: center;
    }

    @media screen and (min-width: 768px) {
        width: 450px;
        margin-top: 0;
        justify-content: space-between;
    }

    @media screen and (min-width: 1500px) {
        width: 570px;
    }
`;

CardItem.propTypes = {
    firstContentIndex: PropTypes.number,
    lastContentIndex: PropTypes.number,
    users: PropTypes.array,
};
