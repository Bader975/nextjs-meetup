import { MongoClient } from 'mongodb';


// endPoint will be like this 
//  /api/new-meetup

export default async function handler(req, res) {
    try {
        if (req.method == 'POST') {
            let data = req.body;
            const clinet = await MongoClient.connect('mongodb+srv://bader:trtMPEYPpcucDusr@cluster0.7voolcp.mongodb.net/?retryWrites=true&w=majority');
            const db = clinet.db();
            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.insertOne(data)
            console.log(result);
            clinet.close();
            res.status(201).json({ message: "Meetup Was Added successfully" });
            

        }
    } catch (error) {
        console.log(error);
    }

}

