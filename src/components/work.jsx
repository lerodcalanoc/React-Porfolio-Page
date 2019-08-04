import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">career</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-amazon" />
                      </div>
                      <div className="timeline-label">
                        <h2>Ambassador and Sortation Associate – Amazon Logistics
                        <br></br>
                        <span>2017 - Current</span></h2>
                        <p>Supports associate on the production floor. Trains new hires. Responsible for receiving, sorting and scanning Amazon
                        packages.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-phone" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Support Representative – Sutherland Global Services
                        <br></br>
                        <span>2012 - 2015</span></h2>
                        <p>Provided technical support, troubleshoot and fixed product and service issues for Samsung Electronics and AT&T U-verse.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-phone" />
                      </div>
                      <div className="timeline-label">
                        <h2>Customer Service Representative – TeleTech
                        <br></br>
                        <span>2011-2012</span></h2>
                        <p>Handled high volume of outbound calls to the customer by providing information regarding their bundle order plans. Assisted
                        and processed customers’ orders.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
