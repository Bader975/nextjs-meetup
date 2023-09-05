import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import MeetupList from '../components/meetups/MeetupList'
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import CardPage from './card';
import Game from './game';

// const dummyData = [
//   {
//     id: "1",
//     title: "Hello",
//     image: 'https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/eb/7f/eb7fa02f-e613-486b-98cf-9e034052610e/how_to_run_an_effective_business_meeting_-_a_step-by-step_guide-min.jpg',
//     address: 'NYC',
//     description: 'this is the description of the meeting'
//   },
//   {
//     id: "2",
//     title: "hi there",
//     image: 'https://xeniumhr.com/wp-content/uploads/2019/05/roundtable-discussion-1080x675.jpg',
//     address: 'MIME',
//     description: 'this is the description of the meeting'
//   },
//   {
//     id: "3",
//     title: "hi there",
//     image: 'https://xeniumhr.com/wp-content/uploads/2019/05/roundtable-discussion-1080x675.jpg',
//     address: 'MIME',
//     description: 'this is the description of the meeting'
//   },

// ]


export default function HomePage({ meetups }) {
  return (
    <>

      <MeetupList meetups={meetups} />
      {/* <CardPage data={meetups}/> */}
      {/* <Game numPalyer={10}/> */}
    </>

  )
}




// export const getServerSideProps = async (context) => {

//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       dummyData
//     }
//   };
// }

// Next JS needs this function {getStaticProps}

export const getStaticProps = async () => {
  const clinet = await MongoClient.connect('mongodb+srv://bader:fLZrLcgw4EfgAMBO@cluster0.7voolcp.mongodb.net/?retryWrites=true&w=majority');
  const db = clinet.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  clinet.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },

    revalidate: 2

  }
}

