import "./App.css";
import axios from "axios";
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
        <title>Friday</title>
      </Helmet>

      <div className="heading">
        <h1>
          <p className="hover-underline-animation">Get Started, It's Free!</p>
        </h1>
      </div>
      <div className="email">
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
            Submit
          </button>
        </form>
      </div>
      <div className="privacy">
        <h2>
          We respect your privacy and do not collect any of your data without
          your explicit consent. Your information is secure .
        </h2>
      </div>
      <div className="hero"></div>
    </div>
  );
}

export default App;
