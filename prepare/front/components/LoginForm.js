import React, { useState, useCallback } from "react";
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = useCallback((e) => {
    setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    return (
        <Form>
            <div>
                <label htmlFor="user-id">ID</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">Password</label>
                <br/>
                <Input name="user-password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>Login</Button>
            </ButtonWrapper>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </Form>
    );
}

export default LoginForm;