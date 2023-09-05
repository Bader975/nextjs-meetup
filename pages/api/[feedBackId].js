import fs from "fs";
import path from "path";


export default function handler(req, res) {
  if (req.method === "GET") {
    const feedBackId = req.query.feedBackId;
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    const selectedFeedBack = data.find(
      (feedback) => feedback.id === feedBackId
    );
    res.status(200).json({ feedback: selectedFeedBack });
  }




  if (req.method === "DELETE") {
    const feedBackId = req.query.feedBackId;
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
// find selected item
    const selectedFeedBack = data.find(
        (feedback) => feedback.id === feedBackId
      );
// get the index 
    const deletedFeedBack = data.indexOf(selectedFeedBack);
// console.log(deletedFeedBack);
// delete it using splice method
      const itemDeleted =data.splice(deletedFeedBack,1) 
    // console.log(data);  

    res.json({feedback:data})
  }
}
