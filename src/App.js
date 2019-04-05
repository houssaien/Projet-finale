import React, { Component } from 'react';

import './App.css';
// insaf
class App extends Component {
  render() {
    return (
     <div>
        
        <div class="wrapper">
            <div class="cssload-loader"></div>
        </div>
    
        {/* ***** Top Search Area Start ***** */}
        <div className="top-search-area">
          {/* Search Modal */}
          <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  {/* Close Button */}
                  <button type="button" className="btn close-btn" data-dismiss="modal"><i className="fa fa-times" /></button>
                  {/* Form */}
                  <form action="https://colorlib.com/preview/theme/uza/index.html" method="post">
                    <input type="search" name="top-search-bar" className="form-control" placeholder="Search and hit enter..." />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Top Search Area End ***** */}
        {/* ***** Header Area Start ***** */}
        <header className="header-area">
          {/* Main Header Start */}
          <div className="main-header-area">
            <div className="classy-nav-container breakpoint-off">
              {/* Classy Menu */}
              <nav className="classy-navbar justify-content-between" id="uzaNav">
                {/* Logo */}
                <a className="nav-brand" href="index.html"><img src="front/img/core-img/logo.png" alt /></a>
                {/* Navbar Toggler */}
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler"><span /><span /><span /></span>
                </div>
                {/* Menu */}
                <div className="classy-menu">
                  {/* Menu Close Button */}
                  <div className="classycloseIcon">
                    <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                  </div>
                  {/* Nav Start */}
                  <div className="classynav">
                    <ul id="nav">
                      <li className="current-item"><a href="index.html">Home</a></li>
                      <li><a href="#">Pages</a>
                        <ul className="dropdown">
                          <li><a href="index.html">- Home</a></li>
                          <li><a href="about.html">- About</a></li>
                          <li><a href="services.html">- Services</a></li>
                          <li><a href="portfolio.html">- Portfolio</a></li>
                          <li><a href="portfolio-single.html">- Single Portfolio</a></li>
                          <li><a href="blog.html">- Blog</a></li>
                          <li><a href="single-blog.html">- Blog Details</a></li>
                          <li><a href="contact.html">- Contact</a></li>
                          <li><a href="#">- Dropdown</a>
                            <ul className="dropdown">
                              <li><a href="#">- Dropdown Item</a></li>
                              <li><a href="#">- Dropdown Item</a>
                                <ul className="dropdown">
                                  <li><a href="#">- Even Dropdown</a></li>
                                  <li><a href="#">- Even Dropdown</a></li>
                                  <li><a href="#">- Even Dropdown</a></li>
                                  <li><a href="#">- Even Dropdown</a></li>
                                </ul>
                              </li>
                              <li><a href="#">- Dropdown Item</a></li>
                              <li><a href="#">- Dropdown Item</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="portfolio.html">Portfolio</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="#">Blog</a>
                        <ul className="dropdown">
                          <li><a href="blog.html">- Blog</a></li>
                          <li><a href="single-blog.html">- Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                    {/* Get A Quote */}
                    <div className="get-a-quote ml-4 mr-3">
                      <a href="#" className="btn uza-btn">Get A Quote</a>
                    </div>
                    {/* Login / Register */}
                    <div className="login-register-btn mx-3">
                      <a href="#">Login <span>/ Register</span></a>
                    </div>
                    {/* Search Icon */}
                    <div className="search-icon" data-toggle="modal" data-target="#searchModal">
                      <i className="icon_search" />
                    </div>
                  </div>
                  {/* Nav End */}
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}
        {/* ***** Welcome Area Start ***** */}
        <section className="welcome-area">
          <div className="welcome-slides owl-carousel">
            {/* Single Welcome Slide */}
            <div className="single-welcome-slide">
              {/* Background Curve */}
              <div className="background-curve">
                <img src="img/core-img/curve-1.png" alt />
              </div>
              {/* Welcome Content */}
              <div className="welcome-content h-100">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    {/* Welcome Text */}
                    <div className="col-12 col-md-6">
                      <div className="welcome-text">
                        <h2 data-animation="fadeInUp" data-delay="100ms">Uza makes your <br /> biz <span>greater</span></h2>
                        <h5 data-animation="fadeInUp" data-delay="400ms">We love to create "cool" things on Digital Platforms</h5>
                        <a href="#" className="btn uza-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Start Exploring</a>
                      </div>
                    </div>
                    {/* Welcome Thumbnail */}
                    <div className="col-12 col-md-6">
                      <div className="welcome-thumbnail">
                        <img src="front/img/bg-img/1.png" alt data-animation="slideInRight" data-delay="400ms" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Welcome Slide */}
            <div className="single-welcome-slide">
              {/* Background Curve */}
              <div className="background-curve">
                <img src="front/img/core-img/curve-1.png" alt />
              </div>
              {/* Welcome Content */}
              <div className="welcome-content h-100">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    {/* Welcome Text */}
                    <div className="col-12 col-md-6">
                      <div className="welcome-text">
                        <h2 data-animation="fadeInUp" data-delay="100ms">Uza makes your <br /> biz <span>greater</span></h2>
                        <h5 data-animation="fadeInUp" data-delay="400ms">We love to create "cool" things on Digital Platforms</h5>
                        <a href="#" className="btn uza-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Start Exploring</a>
                      </div>
                    </div>
                    {/* Welcome Thumbnail */}
                    <div className="col-12 col-md-6">
                      <div className="welcome-thumbnail">
                        <img src="front/img/bg-img/1.png" alt data-animation="slideInRight" data-delay="400ms" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Welcome Slide */}
            <div className="single-welcome-slide">
              {/* Background Curve */}
              <div className="background-curve">
                <img src="front/img/core-img/curve-1.png" alt />
              </div>
              {/* Welcome Content */}
              <div className="welcome-content h-100">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    {/* Welcome Text */}
                    <div className="col-12 col-md-6">
                      <div className="welcome-text">
                        <h2 data-animation="fadeInUp" data-delay="100ms">Uza makes your <br /> biz <span>greater</span></h2>
                        <h5 data-animation="fadeInUp" data-delay="400ms">We love to create "cool" things on Digital Platforms</h5>
                        <a href="#" className="btn uza-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Start Exploring</a>
                      </div>
                    </div>
                    {/* Welcome Thumbnail */}
                    <div className="col-12 col-md-6">
                      <div className="welcome-thumbnail">
                        <img src="front/img/bg-img/1.png" alt data-animation="slideInRight" data-delay="400ms" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Welcome Area End ***** */}
        {/* ***** About Us Area Start ***** */}
        <section className="uza-about-us-area">
          <div className="container">
            <div className="row align-items-center">
              {/* About Thumbnail */}
              <div className="col-12 col-md-6">
                <div className="about-us-thumbnail mb-80">
                  <img src="front/img/bg-img/2.jpg" alt />
                  {/* Video Area */}
                  <div className="uza-video-area hi-icon-effect-8">
                    <a href="https://www.youtube.com/watch?v=sSakBz_eYzQ" className="hi-icon video-play-btn"><i className="fa fa-play" aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
              {/* About Us Content */}
              <div className="col-12 col-md-6">
                <div className="about-us-content mb-80">
                  <h2>We're a Agency Team &amp; Digital Marketing</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet ipsumlor eut consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore et dolore magna
                    liquyam erat.</p>
                  <a href="#" className="btn uza-btn btn-2 mt-4">Start Exploring</a>
                </div>
              </div>
            </div>
          </div>
          {/* About Background Pattern */}
          <div className="about-bg-pattern">
            <img src="front/img/core-img/curve-2.png" alt />
          </div>
        </section>
        {/* ***** About Us Area End ***** */}
        {/* ***** Services Area Start ***** */}
        <section className="uza-services-area section-padding-80-0">
          <div className="container">
            <div className="row">
              {/* Section Heading */}
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Our Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Service Area */}
              <div className="col-12 col-lg-4">
                <div className="single-service-area mb-80">
                  {/* Service Icon */}
                  <div className="service-icon">
                    <i className="icon_cone_alt" />
                  </div>
                  <h5>Business Strategy</h5>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata.</p>
                </div>
              </div>
              {/* Single Service Area */}
              <div className="col-12 col-lg-4">
                <div className="single-service-area mb-80">
                  {/* Service Icon */}
                  <div className="service-icon">
                    <i className="icon_piechart" />
                  </div>
                  <h5>Market Analytics</h5>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata.</p>
                </div>
              </div>
              {/* Single Service Area */}
              <div className="col-12 col-lg-4">
                <div className="single-service-area mb-80">
                  {/* Service Icon */}
                  <div className="service-icon">
                    <i className="icon_easel" />
                  </div>
                  <h5>Marketing Social</h5>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Services Area End ***** */}
        {/* ***** Portfolio Area Start ***** */}
        <section className="uza-portfolio-area section-padding-80">
          <div className="container">
            <div className="row">
              {/* Section Heading */}
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Our Portfolio</h2>
                  <p>We stay on top of our industry by being experts in yours.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {/* Portfolio Slides */}
              <div className="portfolio-sildes owl-carousel">
                {/* Single Portfolio Slide */}
                <div className="single-portfolio-slide">
                  <img src="front/img/bg-img/3.jpg" alt />
                  {/* Overlay Effect */}
                  <div className="overlay-effect">
                    <h4>Digital Marketing</h4>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata sanctus est</p>
                  </div>
                  {/* View More */}
                  <div className="view-more-btn">
                    <a href="#"><i className="arrow_right" /></a>
                  </div>
                </div>
                {/* Single Portfolio Slide */}
                <div className="single-portfolio-slide">
                  <img src="front/img/bg-img/4.jpg" alt />
                  {/* Overlay Effect */}
                  <div className="overlay-effect">
                    <h4>Digital Marketing</h4>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata sanctus est</p>
                  </div>
                  {/* View More */}
                  <div className="view-more-btn">
                    <a href="#"><i className="arrow_right" /></a>
                  </div>
                </div>
                {/* Single Portfolio Slide */}
                <div className="single-portfolio-slide">
                  <img src="front/img/bg-img/5.jpg" alt />
                  {/* Overlay Effect */}
                  <div className="overlay-effect">
                    <h4>Digital Marketing</h4>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata sanctus est</p>
                  </div>
                  {/* View More */}
                  <div className="view-more-btn">
                    <a href="#"><i className="arrow_right" /></a>
                  </div>
                </div>
                {/* Single Portfolio Slide */}
                <div className="single-portfolio-slide">
                  <img src="front/img/bg-img/6.jpg" alt />
                  {/* Overlay Effect */}
                  <div className="overlay-effect">
                    <h4>Digital Marketing</h4>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata sanctus est</p>
                  </div>
                  {/* View More */}
                  <div className="view-more-btn">
                    <a href="#"><i className="arrow_right" /></a>
                  </div>
                </div>
                {/* Single Portfolio Slide */}
                <div className="single-portfolio-slide">
                  <img src="front/img/bg-img/5.jpg" alt />
                  {/* Overlay Effect */}
                  <div className="overlay-effect">
                    <h4>Digital Marketing</h4>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata sanctus est</p>
                  </div>
                  {/* View More */}
                  <div className="view-more-btn">
                    <a href="#"><i className="arrow_right" /></a>
                  </div>
                </div>
                {/* Single Portfolio Slide */}
                <div className="single-portfolio-slide">
                  <img src="front/img/bg-img/6.jpg" alt />
                  {/* Overlay Effect */}
                  <div className="overlay-effect">
                    <h4>Digital Marketing</h4>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea takimata sanctus est</p>
                  </div>
                  {/* View More */}
                  <div className="view-more-btn">
                    <a href="#"><i className="arrow_right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Client Feedback Area Start */}
          <div className="clients-feedback-area mt-80 section-padding-80 clearfix">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Testimonial Slides */}
                  <div className="testimonial-slides owl-carousel">
                    {/* Single Testimonial Slide */}
                    <div className="single-testimonial-slide d-flex align-items-center">
                      {/* Testimonial Thumbnail */}
                      <div className="testimonial-thumbnail">
                        <img src="front/img/bg-img/7.jpg" alt />
                      </div>
                      {/* Testimonial Content */}
                      <div className="testimonial-content">
                        <h4>“Colorlib Ltd’s ranking has gone up so much from the great work that your team has done and our brand get organic sales consistently from your efforts. We are happy that the results of your efforts were lasting and profitable.”</h4>
                        {/* Ratings */}
                        <div className="ratings">
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                        </div>
                        {/* Author Info */}
                        <div className="author-info">
                          <h5>Darrell Goodman <span>- CEO colorlib</span></h5>
                        </div>
                        {/* Quote Icon */}
                        <div className="quote-icon"><img src="front/img/core-img/quote.png" alt /></div>
                      </div>
                    </div>
                    {/* Single Testimonial Slide */}
                    <div className="single-testimonial-slide d-flex align-items-center">
                      {/* Testimonial Thumbnail */}
                      <div className="testimonial-thumbnail">
                        <img src="front/img/bg-img/23.jpg" alt />
                      </div>
                      {/* Testimonial Content */}
                      <div className="testimonial-content">
                        <h4>“Colorlib Ltd’s ranking has gone up so much from the great work that your team has done and our brand get organic sales consistently from your efforts. We are happy that the results of your efforts were lasting and profitable.”</h4>
                        {/* Ratings */}
                        <div className="ratings">
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                        </div>
                        {/* Author Info */}
                        <div className="author-info">
                          <h5>Darrell Goodman <span>- CEO colorlib</span></h5>
                        </div>
                        {/* Quote Icon */}
                        <div className="quote-icon"><img src="img/core-img/quote.png" alt /></div>
                      </div>
                    </div>
                    {/* Single Testimonial Slide */}
                    <div className="single-testimonial-slide d-flex align-items-center">
                      {/* Testimonial Thumbnail */}
                      <div className="testimonial-thumbnail">
                        <img src="front/img/bg-img/24.jpg" alt />
                      </div>
                      {/* Testimonial Content */}
                      <div className="testimonial-content">
                        <h4>“Colorlib Ltd’s ranking has gone up so much from the great work that your team has done and our brand get organic sales consistently from your efforts. We are happy that the results of your efforts were lasting and profitable.”</h4>
                        {/* Ratings */}
                        <div className="ratings">
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                        </div>
                        {/* Author Info */}
                        <div className="author-info">
                          <h5>Darrell Goodman <span>- CEO colorlib</span></h5>
                        </div>
                        {/* Quote Icon */}
                        <div className="quote-icon"><img src="front/img/core-img/quote.png" alt /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Client Feedback Area End */}
          {/* Border */}
          <div className="container">
            <div className="border-line" />
          </div>
          {/* Background Curve */}
          <div className="portfolio-bg-curve">
            <img src="front/img/core-img/curve-3.png" alt />
          </div>
        </section>
        {/* ***** Portfolio Area End ***** */}
        {/* ***** Blog Area Start ***** */}
        <section className="uza-blog-area">
          {/* Background Curve */}
          <div className="blog-bg-curve">
            <img src="front/img/core-img/curve-4.png" alt />
          </div>
          {/* CTA Area Start */}
          <div className="uza-cta-area section-padding-0-80">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-content mb-80">
                    <h2>Interested in working with us?</h2>
                    <h6>Hit the button below or give us a call!</h6>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="cta-content mb-80">
                    <div className="call-now-btn">
                      <a href="#"><span>Call us now:</span> (+65) 1234 5678</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Area End */}
          <div className="container">
            <div className="row">
              {/* Section Heading */}
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Our Latest Blogs</h2>
                  <p>Hit the button below or give us a call!</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Blog Post */}
              <div className="col-12 col-lg-4">
                <div className="single-blog-post bg-img mb-80" style={{backgroundImage: 'url(front/img/bg-img/8.jpg)'}}>
                  {/* Post Content */}
                  <div className="post-content">
                    <span className="post-date"><span>23</span> August, 2018</span>
                    <a href="#" className="post-title">SEO: The Movie By Ignite Visibility</a>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy eirmod tempor invidunt ut</p>
                    <a href="#" className="read-more-btn">Read More <i className="arrow_carrot-2right" /></a>
                  </div>
                </div>
              </div>
              {/* Single Blog Post */}
              <div className="col-12 col-lg-4">
                <div className="single-blog-post bg-img mb-80" style={{backgroundImage: 'url(front/img/bg-img/9.jpg)'}}>
                  {/* Post Content */}
                  <div className="post-content">
                    <span className="post-date"><span>13</span> December, 2018</span>
                    <a href="#" className="post-title">What Curling Irons Are The Best Ones</a>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy eirmod tempor invidunt ut</p>
                    <a href="#" className="read-more-btn">Read More <i className="arrow_carrot-2right" /></a>
                  </div>
                </div>
              </div>
              {/* Single Blog Post */}
              <div className="col-12 col-lg-4">
                <div className="single-blog-post bg-img mb-80" style={{backgroundImage: 'url(front/img/bg-img/10.jpg)'}}>
                  {/* Post Content */}
                  <div className="post-content">
                    <span className="post-date"><span>08</span> July, 2018</span>
                    <a href="#" className="post-title">Amazon REV Workshop: Road to Seattle</a>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy eirmod tempor invidunt ut</p>
                    <a href="#" className="read-more-btn">Read More <i className="arrow_carrot-2right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Blog Area End ***** */}
        {/* ***** Newsletter Area Start ***** */}
        <section className="uza-newsletter-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              {/* Newsletter Content */}
              <div className="col-12 col-md-6 col-lg-6">
                <div className="nl-content mb-80">
                  <h2>Subscribe to our Newsletter</h2>
                  <p>Subscribe our newsletter gor get notification about new updates, etc...</p>
                </div>
              </div>
              {/* Newsletter Form */}
              <div className="col-12 col-md-6 col-lg-5">
                <div className="nl-form mb-80">
                  <form action="#" method="post">
                    <input type="email" name="nl-email" defaultValue placeholder="Your Email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            {/* Border Bottom */}
            <div className="border-line" />
          </div>
        </section>
        {/* ***** Newsletter Area End ***** */}
        {/* ***** Footer Area Start ***** */}
        <footer className="footer-area section-padding-80-0">
          <div className="container">
            <div className="row justify-content-between">
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  {/* Widget Title */}
                  <h4 className="widget-title">Contact Us</h4>
                  {/* Footer Content */}
                  <div className="footer-content mb-15">
                    <h3>(+65) 1234 5678</h3>
                    <p>40 Baria Sreet 13/2 NY City, US <br /> <a href="https://colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7f171a131310511c1013100d13161d3f18121e1613511c1012">[email&nbsp;protected]</a></p>
                  </div>
                  <p className="mb-0">Mon - Fri: 9:00 - 19:00 <br />
                    Closed on Weekends</p>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  {/* Widget Title */}
                  <h4 className="widget-title">Quick Link</h4>
                  {/* Nav */}
                  <nav>
                    <ul className="our-link">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Forum Registeration</a></li>
                      <li><a href="#">Forum Sign In</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  {/* Widget Title */}
                  <h4 className="widget-title">Resources</h4>
                  {/* Nav */}
                  <nav>
                    <ul className="our-link">
                      <li><a href="#">Customer Support</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Media &amp; Press</a></li>
                      <li><a href="#">Our Team</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  {/* Widget Title */}
                  <h4 className="widget-title">About Us</h4>
                  <p>Integer vehicula mauris libero, at molestie eros imperdiet sit amet.</p>
                  {/* Copywrite Text */}
                  <div className="copywrite-text mb-30">
                    <p>© Copyright 2018 <a href="#">Colorlib</a>.</p>
                  </div>
                  {/* Social Info */}
                  <div className="footer-social-info">
                    <a href="#" className="facebook" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" /></a>
                    <a href="#" className="twitter" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" /></a>
                    <a href="#" className="pinterest" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" /></a>
                    <a href="#" className="instagram" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram" /></a>
                    <a href="#" className="youtube" data-toggle="tooltip" data-placement="top" title="YouTube"><i className="fa fa-youtube-play" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{marginBottom: '30px'}}>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
          </div>
        </footer>
     </div>
    );
  }
}

export default App;
