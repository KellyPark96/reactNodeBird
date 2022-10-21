import React from 'react';
import Head from 'next/head';

import AppLayout from "../components/AppLayout";

const Profile = () => {
    return (
        <>
            <Head>
                <title>Profile | Node</title>
            </Head>
            <AppLayout>Profile</AppLayout>
        </>
    )
}

export default Profile;