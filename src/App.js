import "./App.css";
import g1 from "./images/gmail3.png";
import s1 from "./images/slack1.png";

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <div className="berry">
          <a href="https://useberry.me/">Berry</a>
        </div>
        <div>
          <a href="mailto:sam.siddharth10@gmail.com">Contact Us</a>
        </div>
      </div>
      <div className="heading">
        <h1>
          <p className="hover-underline-animation">
            Experience the Power of AI in Your Daily Work Life
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
            For More Updates :
            <input className="input" type="email" name="email"></input>
          </label>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="hero">
        <div className="box1">
          <div className="b11">FRIDAY</div>
          <div className="b12">
            Make your Slack workspace smarter and more productive with Friday.
            <br></br>
            AI-powered assistant that can help you with tasks like scheduling
            meetings, organizing information, and answering questions.
          </div>

          <div className="b14">
            <a href="https://slack.com/oauth/v2/authorize?client_id=4166115177239.4742632756229&scope=chat:write,im:history,mpim:history,mpim:read,mpim:write,app_mentions:read,commands,im:read,im:write,channels:history,incoming-webhook&user_scope=">
              <img
                alt="Add to Slack"
                height="40"
                width="139"
                src="https://platform.slack-edge.com/img/add_to_slack.png"
                srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
              />
            </a>
          </div>
          <div className="b13">
            <img src={s1} alt="" height="400" width="560" />
          </div>
        </div>
        <div className="box2">
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
        </div>
      </div>
    </div>
  );
}

export default App;
