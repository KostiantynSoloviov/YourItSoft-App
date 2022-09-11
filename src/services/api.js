import { API_URL } from './config';

const getUserData = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

const getUserPost = async (userId) => {
    const response = await fetch(`${API_URL}/${userId}/posts`);
    return await response.json();
};

export { getUserData, getUserPost };
