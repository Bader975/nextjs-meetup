import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Layout from '../../components/layout/Layout';
import { useRouter } from 'next/router';
import Head from 'next/head';



export default function NewMeetupPage() {
    const router = useRouter();
    async function addNewMeetup(enterdData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enterdData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        router.push('/')
    }

    return (
        <>
            <Head>
                <title>Add New Meet UP</title>
            </Head>
            <NewMeetupForm onAddMeetup={addNewMeetup} />

        </>




    )
}
