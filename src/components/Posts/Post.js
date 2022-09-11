import PropTypes from 'prop-types';

import PostItem from './PostItem';

import styled from 'styled-components';

export default function Post({ data, ...props }) {
    return (
        <>
            {data && (
                <Wrap>
                    <PostsList {...props}>
                        {data.map((post) => (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </PostsList>
                </Wrap>
            )}
        </>
    );
}

const Wrap = styled.div`
    background: #333348;
    border-radius: 40px;
    margin-left: 20px;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        width: 300px;
    }

    @media screen and (min-width: 1000px) {
        width: 430px;
    }

    @media screen and (min-width: 1500px) {
        width: 430px;
    }
`;

const PostsList = styled.ul`
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #52519d;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #12122d;
        border-radius: 20px;
        border: 3px solid #52519d;
    }

    @media screen and (min-width: 0px) {
        width: 300px;
        height: 500px;
        overflow: hidden;
        overflow-y: scroll;
    }

    @media screen and (min-width: 768px) {
        padding: 10px;
        width: 300px;
        height: 500px;
        overflow: hidden;
        overflow-y: scroll;
    }

    @media screen and (min-width: 1000px) {
        width: 430px;
        padding: 30px 20px;
    }

    @media screen and (min-width: 1500px) {
        padding: 50px 50px;
        width: 100%;
    }
`;

Post.propTypes = {
    data: PropTypes.array.isRequired,
};
