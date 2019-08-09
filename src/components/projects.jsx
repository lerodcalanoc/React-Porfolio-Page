import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/github.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">GitHub Finder</a></h3>
											<span>This app searches Github.com user profiles and displays profile info and the latest repositories.
											<br></br>
											</span>
											<p className="icon text-center">
												<span><a href="https://findergithub.netlify.com/" target="_blank"><i className="icon-monitor"/> LIVE APP</a></span>
												<span><a href="https://github.com/lerodcalanoc/GitHub-Finder" target="_blank"><i className="icon-github" /> SOURCE</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/cook.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">In or Out</a></h3>
											<span>“A nutrition app for deciding how to eat!” This application uses multiple API interactions to query a recipe based on a given ingredient,
											display nutritional values for that recipe - based on its ingredients, query a similar food product - available for purchase at a nearby
											restaurant and display nutritional values for that product for comparison.</span>
											<p className="icon text-center">
												<span><a href="https://kathdoza.github.io/project_1/" target="_blank"><i className="icon-monitor"/> LIVE APP</a></span>
												<span><a href="https://github.com/kathdoza/project_1" target="_blank"><i className="icon-github" /> SOURCE</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/burger.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Eat Da Burger!</a></h3>
											<span>Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. The app utilizes MySQL, Node, Express, Handlebars and a homemade ORM. MVC design pattern implemented. Node and MySQL query and route data in the app, and Handlebars generates the HTML.</span>
											<p className="icon text-center">
												<span><a href="https://eat-da-burger-01.herokuapp.com/" target="_blank"><i className="icon-monitor"/> LIVE APP</a></span>
												<span><a href="https://github.com/lerodcalanoc/burger/" target="_blank"><i className="icon-github" /> SOURCE</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/marvel.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Word-Guess-Game : Marvel Super Heroes</a></h3>
											<span>Marvel fans unite! Let’s put your Marvel knowledge to the test by guessing the name of the super hero!</span>
											<p className="icon text-center">
												<span><a href="https://lerodcalanoc.github.io/Word-Guess-Game/" target="_blank"><i className="icon-monitor"/> LIVE APP</a></span>
												<span><a href="https://github.com/lerodcalanoc/Word-Guess-Game/" target="_blank"><i className="icon-github" /> SOURCE</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/stones.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">
												Get Them Infinity Stones!</a></h3>
											<span>You will be given a random number at the start of the game.
											There are four infinity stones. By clicking on a infinity stone, you will add a specific amount of points to your total score.
											You win the game by matching your total score to random number.
											You lose the game if your total score goes above the random number.
											</span>
											<p className="icon text-center">
												<span><a href="https://lerodcalanoc.github.io/unit-4-game/" target="_blank"><i className="icon-monitor"/> LIVE APP</a></span>
												<span><a href="https://github.com/lerodcalanoc/unit-4-game/" target="_blank"><i className="icon-github" /> SOURCE</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/books.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Google Books Search</a></h3>
											<span>A React-based Google Books Search application.</span>
											<p className="icon text-center">
												<span><a href="https://dry-oasis-63640.herokuapp.com/" target="_blank"><i className="icon-monitor"/> LIVE APP</a></span>
												<span><a href="https://github.com/lerodcalanoc/react-google-books" target="_blank"><i className="icon-github" /> SOURCE</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/lerodcalanoc" className="btn btn-primary btn-lg btn-load-more" target="_blank">More on GitHub <i className="icon-github" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
