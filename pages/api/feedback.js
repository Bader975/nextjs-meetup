import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, text } = req.body;

    const newFeedBack = {
      id: new Date().toISOString(),
      email: email,
      feedback: text,
    };

    // store the date in json file
    const filePath = path.join(process.cwd(), "data", "feedback.json");

    const fileData = fs.readFileSync(filePath);

    const data = JSON.parse(fileData);
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "IT Worked", feedback: newFeedBack });
  } else {
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    res.status(200).json({ feedback: data });
  }
}
