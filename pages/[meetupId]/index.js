import React from 'react'
import { useRouter } from 'next/router'
import Card from '../../components/ui/Card';
import classes from '../../components/meetups/MeetupItem.module.css';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
export default function MeetupDetailsPage({ meetupData }) {
    const router = useRouter()
    console.log(router.pathname);
    console.log(router.query);
    return (
        <>
            <Head>
                <title>{meetupData.title}</title>
                <meta name='description' content={meetupData.description} />
            </Head>
            <Card>
                {router.pathname}
                <h1>------------</h1>
                {router.query.meetupId}

                <div className={classes.image}>
                    <img src={meetupData.image} alt='' />
                </div>

                <div className={classes.content}>
                    <h3>{meetupData.title}</h3>
                    <address>{meetupData.address}</address>
                    <p>{meetupData.description}</p>
                </div>
            </Card>
        </>
    )
}



export const getStaticPaths = async () => {
    const clinet = await MongoClient.connect('mongodb+srv://bader:trtMPEYPpcucDusr@cluster0.7voolcp.mongodb.net/?retryWrites=true&w=majority');
    const db = clinet.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    clinet.close();
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}
export const getStaticProps = async (context) => {
    //fetch data for one meet up
    const meetUpId = context.params.meetupId
    const clinet = await MongoClient.connect('mongodb+srv://bader:trtMPEYPpcucDusr@cluster0.7voolcp.mongodb.net/?retryWrites=true&w=majority');
    const db = clinet.db();
    const meetupsCollection = db.collection('meetups');

    const selectedMeetUP = await meetupsCollection.findOne({ _id: new ObjectId(meetUpId), });


    clinet.close();


    return {
        props: {
            meetupData: {
                id: selectedMeetUP._id.toString(),
                title: selectedMeetUP.title,
                address: selectedMeetUP.address,
                image: selectedMeetUP.image,
                description: selectedMeetUP.description,


            }
        }
    }
}
