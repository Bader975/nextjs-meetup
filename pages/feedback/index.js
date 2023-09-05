import React, { useEffect, useRef, useState } from "react";
import fs from "fs";
import path from "path";
export default function feedback({ feedbackData }) {
  const [feedBacks, setFeedBacks] = useState([]);
  const [onefeedBack, setOneFeedBack] = useState();
  const emailRef = useRef();
  const feedbackRef = useRef();

  // set date form Props
  function loadFeedBacks() {
    //fetching data and displaying it on the page
    setFeedBacks(feedbackData);
  }

  useEffect(() => {
    loadFeedBacks();
  }, [feedBacks]);
  //
  async function sendFeedBack(e) {
    e.preventDefault();
    const enterdEamil = emailRef.current.value;
    const enterdFeedBack = feedbackRef.current.value;
    const reqBody = { email: enterdEamil, text: enterdFeedBack };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  function loadOneFeedBacks(id) {
    //fetching data and displaying it on the page

    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedBacks((curr)=>[...curr,data.feedback]);
      });
  }

  function deleteOneFeedBacks(id) {
    //fetching data and displaying it on the page

    fetch(`/api/${id}`,{
      method:"DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        setOneFeedBack(data.feedback);
      });
  }

  return (
    <>
      <form
        onSubmit={sendFeedBack}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          width: "400px",
        }}
      >
        <label htmlFor="email">Enter Your Email</label>
        <input type="email" id="email" ref={emailRef} />
        <label htmlFor="feedback">Enter Your FeedBack</label>
        <textarea rows={5} id="feedback" ref={feedbackRef} />
        <br></br>
        <button>Send feedback</button>
      </form>
      <br></br>
      <br></br>

      {/* <button onClick={loadFeedBacks}>Load All FeedBacks</button> */}

      <ul>
        {/* {onefeedBack && <p>{JSON.stringify(onefeedBack)}</p>} */}
        {feedBacks.map((item) => (
          <div key={item.id}>
            <li>{item.feedback}</li>
            <button  style={{margin:"10px"}} onClick={() => deleteOneFeedBacks(item.id)}>Delete </button>
            <button onClick={() => loadOneFeedBacks(item.id)}>
              Show more{" "}
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return {
    props: {
      feedbackData: data,
    },

    revalidate: 10,
  };
}
