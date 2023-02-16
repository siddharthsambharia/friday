import "./App.css";
import g1 from "./images/gmail3.png";
import s1 from "./images/slack1.png";

import { Helmet } from "react-helmet";

function handleSubmit() {
  const emailInput = document.querySelector('input[name="email"]');
  const email = emailInput.value;
  const slackInstallLink = document.getElementById("slack-install-link");
  slackInstallLink.href += `?email=${email}`;
  window.location.href = slackInstallLink.href;
}

function App() {
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
      <div className="email">
        <form
          action="https://formspree.io/f/xlekjwlp"
          method="POST"
          className="form"
        >
          <label className="label">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Your email:"
            ></input>
          </label>
          <button className="btn" type="submit" onClick={handleSubmit}>
            Sign up
          </button>
        </form>
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
