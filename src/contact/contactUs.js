import React from "react"; 
import "./contactUs.css"
// import { div, Row, div } from "react-bootstrap";
import { contactConfig } from "../content_option"
export default function ContactUs() {
  

  return (
      <div className="container">
        
        <div className="ctn-hed">
          <div lg="8">
            <h1 className=" ">Contact Us</h1>
            <hr className=" " />
          </div>
        </div>

        <div className="ctn-1-hding">
          <div lg="5" className="">
            <h3 className="ctn-hn-3 ">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </div>
          <div lg="7" className="">
            <form  className="contact__form ">
              <div className="ctn-1-hding-1">
                <div lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </div>
                <div lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </div>
              </div>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                divs="5" 
                required
              ></textarea>
              <br />
              <div>
                <div lg="12" className="">
                  <button className="btn" type="submit"> 
                  Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
