import { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function PostItem({ post }) {
    const [showText, setShowText] = useState(false);
    return (
        <>
            <Post>
                <Title onClick={() => setShowText(!showText)}>
                    {post.title}
                </Title>
                {showText ? <Text key={post.body}>{post.body}</Text> : null}
            </Post>
        </>
    );
}

const Post = styled.li`
    position: relative;
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: 60px;
        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 1px;
            background: #4c4c6a;
            margin-top: 30px;
        }
    }
`;

const Title = styled.p`
    font-weight: 600;
    color: #fff;
    text-align: center;

    @media screen and (min-width: 1000px) {
        font-size: 18px;
    }
    @media screen and (min-width: 1500px) {
        font-size: auto;
    }
`;

const Text = styled.p`
    color: #fff;
    margin-top: 20px;
    @media screen and (min-width: 1000px) {
        font-size: 14px;
    }
    @media screen and (min-width: 1500px) {
        font-size: 18px;
    }
`;

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
};
