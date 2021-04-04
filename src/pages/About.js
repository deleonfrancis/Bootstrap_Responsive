import React from "react";
import HorizontalBarChart from "../components/HorizontalBarChart";
import xavier_picture from "../images/my_picture/xavier_picture.jpeg";
import SocialMedia from "../components/SocialMedia";
import LinkButtons from "../components/LinkButtons";
import FadeIn from "../components/FadeIn";

function About() {
  return (
    <FadeIn>
      <section id="about-section" className="flex-fill p-3 py-5 bg-light shadow-lg">
        <h1 className="mb-0 rale-text">About</h1>
        <hr />
        <LinkButtons />
        <div className="row">
          <div className="col-lg-6">
            <div className="">
              <img
                className="rounded-circle"
                src={xavier_picture}
                alt="Photograph of Xavier"
                height={250}
                width={250}
              />
              <h3 className="text-bg my-3">About Me</h3>
              <div style={{ width: "60%", margin: "auto" }}>
                <p className="about-detail">
                  I'm a detail-oriented, diligent, and self-motivated Full Stack Developer based
                  in Orlando, Florida.
                </p>
                <SocialMedia />
                <h5 className="text-dark m-0">E-mail: <span className="text-bg">dxfrancis.coding@gmail.com</span></h5>
                
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <HorizontalBarChart />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default About;