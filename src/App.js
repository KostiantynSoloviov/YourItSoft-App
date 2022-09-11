import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Card from './components/Cards/Card';
import Preloader from './components/Preloader/Preloader';
import Footer from './components/Footer/Footer';

import 'modern-normalize/modern-normalize.css';
import styled from 'styled-components';
import './index.css';

import { getUserData } from './services/api';

export default function App() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const countPage = 4;
    const count = users.length;

    const pageCount = Math.ceil(count / countPage);
    const lastIndex = page * countPage;
    const firstIndex = lastIndex - countPage;

    const changePage = (direction) => {
        setPage((state) => {
            if (direction) {
                if (state === pageCount) {
                    return state;
                }
                return state + 1;
            } else {
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    };

    const setPageCount = (num) => {
        if (num > pageCount) {
            setPage(pageCount);
        } else if (num < 1) {
            setPage(1);
        } else {
            setPage(num);
        }
    };

    useEffect(() => {
        getUserData().then((data) => {
            setUsers(data);
            setLoading(true);
        });
    }, []);

    const changeFilter = (e) => {
        setFilter(e.target.value);
        setPageCount(1);
    };

    const filteredUsers = () => {
        const normalizedFilter = filter.toLowerCase();
        return users.filter((user) =>
            user.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const changeSort = () => {
        setSort(!sort);

        if (!sort) {
            users.sort((a, b) => a.name.localeCompare(b.name));
            return;
        }
        users.sort((a, b) => b.name.localeCompare(a.name));
    };
    const usersFiltered = filteredUsers();

    return (
        <Body>
            <Header
                className="header"
                changeFilter={changeFilter}
                filter={filter}
                changeSort={changeSort}
            />
            {loading ? (
                <Card
                    users={usersFiltered}
                    firstIndex={firstIndex}
                    lastIndex={lastIndex}
                />
            ) : (
                <Preloader />
            )}
            <Footer
                changePageNext={() => changePage(false)}
                changePagePrev={() => changePage(true)}
            />
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    height: 100vh;
    padding-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        width: 750px;
    }

    @media screen and (min-width: 1000px) {
        width: 1000px;
    }

    @media screen and (min-width: 1500px) {
        width: 1470px;
    }

    .header {
        margin-bottom: 20px;
        margin-right: auto;
        margin-left: auto;
    }
`;
