import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>My name is Rodel Calanoc. My friends call me Lerod and I'm a Full Stack Web Developer, currently living in Los Angeles, CA.
                    <br></br>
                    I have completed Full Stack Web Development program from University of California, Los Angeles (UCLA).</p>
                    <p> I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.
                    <br></br>
                    In my free time, I work out in the gym or watch movies. I’m also a cosplayer.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building web apps using JavaScript, React, HTML, CSS, jQuery, Bootstrap & the MERN stack.
                    <br></br>
                    <br></br>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-amazon" />
                </span>
                <div className="desc">
                    <h3>AMBASSADOR</h3>
                    <p>I am currently an Ambassador at Amazon Logistics. I support associates on the production floor. Trains new hires. Weekly QA audits. Fixes package and shipment issues.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
