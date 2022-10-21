import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

// const items = [
//     { label: 'NordBird', key: 'item-1' },
//     { label: 'Profile', key: 'item-2' },
//     { label: 'SignUp', key: 'item-3' },
// ];
// return <Menu items={items} />;

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>NordBird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>SignUp</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile/> : <LoginForm /> }
                </Col>
                <Col xs={24} md={12}>
                    { children }
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/KellyPark96" target="_blank" rel="noreferrer noopener">Made by KellyPark</a>
                </Col>
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
