import "./App.css";
import g1 from "./images/gmail3.png";
import s1 from "./images/slack1.png";
import axios from "axios";
import slacklogo from "./images/slacklogo.png";
// import ReactTooltip from "react-tooltip";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Helmet } from "react-helmet";

import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    //     event.preventDefault();

    //     const xhr = new XMLHttpRequest();
    //     xhr.open("POST", "https://fridayhttp-production.up.railway.app:8000/email");

    //     // Set the Content-Type header to x-www-form-urlencoded
    //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //     // Create the form data and set the email field
    //     const formData = new FormData();
    //     formData.set("email", email);
    // ``
    //     // Encode the form data and send the request
    //     xhr.send(new URLSearchParams(formData).toString());

    event.preventDefault();

    // Set the email data as a JSON object
    const data = { email: email };

    // Convert the data object to x-www-form-urlencoded format
    const formData = new URLSearchParams();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // Make the POST request using axios
    axios
      .post("https://fridayhttp-production.up.railway.app/email", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log(response.data);
        // Redirect the user to the URL
        // window.location.href = "/my-redirect-url";
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    // Redirect the user to the URL
    window.location.href =
      "https://fridayv2-production.up.railway.app/slack/install";
  }

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Friday|Berry</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <div className="topbar">
        <div className="berry">
          <a href="https://useberry.me/">Home</a>
        </div>
        <div>
          <a href="mailto:sam.siddharth10@gmail.com">Contact Us</a>
        </div>
      </div>
      <div className="heading">
        <h1>
          <p className="hover-underline-animation">
            Generative AI for your Slack Workspace 🪄
          </p>
        </h1>
      </div>
      {/* <div className="email">

        <form className="form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="emailInput">
            <input
              className="input"
              placeholder="Your email:"
              type="email"
              id="emailInput"
              name="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </label>
          <button
            className="btn"
            type="submit"
            onClick={handleSubmit}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Hello world!"
            data-for="tool"
          >
            <img alt="Add to Slack" height="25" width="25" src={slacklogo} />
          </button>
        </form>
      </div> */}
      <div className="email">
        <div className="b14">
          <a href="https://fridayv2-production.up.railway.app/slack/install">
            <img
              alt="Add to Slack"
              height="40"
              width="139"
              src="https://platform.slack-edge.com/img/add_to_slack.png"
              srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
            />
          </a>
        </div>
      </div>

      <div className="hero">
        <div className="box1">
          <div className="sec1">
            <div className="b11">friday</div>
            <div className="b12">
              Chat-GPT Slackbot: Streamline Your Business Processes and Boost
              Productivity
            </div>
            <div className="b15">
              Make your Slack workspace smarter and more productive with Friday.
              <br></br>
              AI-powered assistant that can help you with taskslike scheduling
              meetings, organizing information, and answering questions.
            </div>
          </div>
          <div className="b13">
            <img className="img" src={s1} alt="" />
          </div>
        </div>
        {/* <div className="box2">
          <div className="b21">Gmail</div>
          <div className="b22">
            Take your Gmail experience to the next level with our Extension. Use
            the power of AI to write eye-catching emails right inside your gmail
            inbox.
          </div>
          <div className="b24">
            <button className="btn2">
              <a href="https://drive.google.com/drive/folders/1TNTMdsAgAUffJnScOqhF270_P9NpEyGc?usp=sharing">
                Download
              </a>
            </button>
          </div>
          <div className="b23">
            <img src={g1} alt="" height="250" width="400" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
