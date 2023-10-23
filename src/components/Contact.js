import React from "react";

function Conatct() {
  return (
    <>
      <div className="contact-content">
        <h2 className="contact-head">Contact Us</h2>
        <div className="contact-body">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </div>
        <div className="form-content">
          <div>
            <img className="left-body" src="contact-image.jpg" alt="img" />
          </div>
          <div className="right-body">
            <form>
              <button className="chat-button btn1">
                <img className="chat-img" src="chat-icon.png" alt="img" />
                <span className="btn-text">VIA SUPPORT CHAT</span>
              </button>
              <button className="call-button btn1">
                <img className="call-img" src="call-icon.png" alt="img" />
                <span className="btn-text">VIA CALL</span>
              </button>
              <button className="email-button">
                <img className="email-img" src="chat-icon.png" alt="img" />

                <span className="btn-text">VIA EMAIL FORM</span>
              </button>
              <div className="input-field">
                <input
                  className="input-box input-name"
                  type="text"
                  placeholder="Name"
                ></input>
                <input
                  className="input-box input-email"
                  type="email"
                  placeholder="Email"
                ></input>
                <textarea
                  className="input-box input-text"
                  type="text"
                  placeholder="Text"
                ></textarea>
                <button className="submit-btn btn1">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conatct;
