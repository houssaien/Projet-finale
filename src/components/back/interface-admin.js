<div>
  {/*Double navigation*/}
  <header>
    {/* Sidebar navigation */}
    <div id="slide-out" className="side-nav sn-bg-4 fixed" style={{transform: 'translateX(0px)'}}>
      <ul className="custom-scrollbar">
        {/* Logo */}
        <li>
          <div className="logo-wrapper waves-light waves-effect waves-light">
            <a href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" className="img-fluid flex-center" /></a>
          </div>
        </li>
        {/*/. Logo */}
        {/*Social*/}
        <li>
          <ul className="social">
            <li><a href="#" className="icons-sm fb-ic"><i className="fab fa-facebook-f"> </i></a></li>
            <li><a href="#" className="icons-sm pin-ic"><i className="fab fa-pinterest"> </i></a></li>
            <li><a href="#" className="icons-sm gplus-ic"><i className="fab fa-google-plus-g"> </i></a></li>
            <li><a href="#" className="icons-sm tw-ic"><i className="fab fa-twitter"> </i></a></li>
          </ul>
        </li>
        {/*/Social*/}
        {/*Search Form*/}
        <li>
          <form className="search-form" role="search">
            <div className="form-group md-form mt-0 pt-1 waves-light waves-effect waves-light">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </form>
        </li>
        {/*/.Search Form*/}
        {/* Side navigation links */}
        <li>
          <ul className="collapsible collapsible-accordion">
            <li className><a className="collapsible-header waves-effect arrow-r"><i className="fas fa-chevron-right" /> Submit blog<i className="fas fa-angle-down rotate-icon" /></a>
              <div className="collapsible-body" style={{display: 'none'}}>
                <ul className="list-unstyled">
                  <li><a href="#" className="waves-effect">Submit listing</a>
                  </li>
                  <li><a href="#" className="waves-effect">Registration form</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="active"><a className="collapsible-header waves-effect arrow-r active"><i className="far fa-hand-pointer" /> Instruction<i className="fas fa-angle-down rotate-icon" /></a>
              <div className="collapsible-body" style={{display: 'block'}}>
                <ul className="list-unstyled">
                  <li><a href="#" className="waves-effect">For bloggers</a>
                  </li>
                  <li><a href="#" className="waves-effect">For authors</a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a className="collapsible-header waves-effect arrow-r"><i className="fas fa-eye" /> About<i className="fas fa-angle-down rotate-icon" /></a>
              <div className="collapsible-body">
                <ul className="list-unstyled">
                  <li><a href="#" className="waves-effect">Introduction</a>
                  </li>
                  <li><a href="#" className="waves-effect">Monthly meetings</a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a className="collapsible-header waves-effect arrow-r"><i className="far fa-envelope" /> Contact me<i className="fas fa-angle-down rotate-icon" /></a>
              <div className="collapsible-body">
                <ul className="list-unstyled">
                  <li><a href="#" className="waves-effect">FAQ</a>
                  </li>
                  <li><a href="#" className="waves-effect">Write a message</a>
                  </li>
                  <li><a href="#" className="waves-effect">FAQ</a>
                  </li>
                  <li><a href="#" className="waves-effect">Write a message</a>
                  </li>
                  <li><a href="#" className="waves-effect">FAQ</a>
                  </li>
                  <li><a href="#" className="waves-effect">Write a message</a>
                  </li>
                  <li><a href="#" className="waves-effect">FAQ</a>
                  </li>
                  <li><a href="#" className="waves-effect">Write a message</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        {/*/. Side navigation links */}
      </ul>
      <div className="sidenav-bg mask-strong" />
    </div>
    {/*/. Sidebar navigation */}
    {/* Navbar */}
    <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav top-nav-collapse">
      {/* SideNav slide-out button */}
      <div className="float-left">
        <a href="#" data-activates="slide-out" className="button-collapse black-text"><i className="fas fa-bars" /></a>
      </div>
      {/* Breadcrumb*/}
      <div className="breadcrumb-dn mr-auto">
        <p>Material Design for Bootstrap</p>
      </div>
      <ul className="nav navbar-nav nav-flex-icons ml-auto">
        <li className="nav-item">
          <a className="nav-link waves-effect waves-light"><i className="fas fa-envelope" /> <span className="clearfix d-none d-sm-inline-block">Contact</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link waves-effect waves-light"><i className="far fa-comments" /> <span className="clearfix d-none d-sm-inline-block">Support</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link waves-effect waves-light"><i className="fas fa-user" /> <span className="clearfix d-none d-sm-inline-block">Account</span></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle waves-effect waves-light" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item waves-effect waves-light" href="#">Action</a>
            <a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
            <a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </nav>
    {/* /.Navbar */}
  </header>
  {/*/.Double navigation*/}
  {/*Main layout*/}
  <main>
    <div className="container-fluid text-center">
      {/*Card*/}
      <div className="card card-cascade wider reverse my-4 pb-5">
        {/*Card image*/}
        <div className="view view-cascade overlay wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
          <img src="https://mdbootstrap.com/img/Photos/Slides/2.jpg" className="img-fluid" />
          <a href="#!">
            <div className="mask rgba-white-slight waves-effect waves-light" />
          </a>
        </div>
        {/*/Card image*/}
        {/*Card content*/}
        <div className="card-body card-body-cascade text-center wow fadeIn" data-wow-delay="0.2s" style={{visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s'}}>
          {/*Title*/}
          <h4 className="card-title"><strong>My adventure</strong></h4>
          <h5 className="blue-text"><strong>Photography</strong></h5>
          <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <a className="btn btn-primary btn-lg waves-effect waves-light">Primary button</a>
          <a className="btn btn-secondary btn-lg waves-effect waves-light">Secondary button</a>
          <a className="btn btn-default btn-lg waves-effect waves-light">Default button</a>
        </div>
        {/*/.Card content*/}
      </div>
      {/*/.Card*/}
    </div>
  </main>
  {/*/Main layout*/}
  {/*Footer*/}
  <footer className="page-footer text-center text-md-left pt-4">
    {/*Footer Links*/}
    <div className="container-fluid">
      <div className="row">
        {/*First column*/}
        <div className="col-md-3">
          <h5 className="text-uppercase font-weight-bold mb-4">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>
        </div>
        {/*/.First column*/}
        <hr className="w-100 clearfix d-md-none" />
        {/*Second column*/}
        <div className="col-md-2 mx-auto">
          <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
          <ul className="list-unstyled">
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>
        </div>
        {/*/.Second column*/}
        <hr className="w-100 clearfix d-md-none" />
        {/*Third column*/}
        <div className="col-md-2 mx-auto">
          <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
          <ul className="list-unstyled">
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>
        </div>
        {/*/.Third column*/}
        <hr className="w-100 clearfix d-md-none" />
        {/*Fourth column*/}
        <div className="col-md-2 mx-auto">
          <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
          <ul className="list-unstyled">
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>
        </div>
        {/*/.Fourth column*/}
      </div>
    </div>
    {/*/.Footer Links*/}
    <hr />
    {/*Call to action*/}
    <div className="call-to-action text-center my-4">
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item">
          <h5>Register for free</h5>
        </li>
        <li className="list-inline-item"><a href className="btn btn-primary waves-effect waves-light">Sign up!</a></li>
      </ul>
    </div>
    {/*/.Call to action*/}
    <hr />
    {/*Social buttons*/}
    <div className="social-section text-center">
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item"><a className="btn-floating btn-fb waves-effect waves-light"><i className="fab fa-facebook-f"> </i></a></li>
        <li className="list-inline-item"><a className="btn-floating btn-tw waves-effect waves-light"><i className="fab fa-twitter"> </i></a></li>
        <li className="list-inline-item"><a className="btn-floating btn-gplus waves-effect waves-light"><i className="fab fa-google-plus-g"> </i></a></li>
        <li className="list-inline-item"><a className="btn-floating btn-li waves-effect waves-light"><i className="fab fa-linkedin-in"> </i></a></li>
        <li className="list-inline-item"><a className="btn-floating btn-git waves-effect waves-light"><i className="fab fa-github"> </i></a></li>
      </ul>
    </div>
    {/*/.Social buttons*/}
    {/*Copyright*/}
    <div className="footer-copyright py-3 text-center">
      <div className="container-fluid">
        © 2018 Copyright: <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
      </div>
    </div>
    {/*/.Copyright*/}
  </footer>
  {/*/.Footer*/}
  {/* SCRIPTS */}
  {/* JQuery */}
  {/* Tooltips */}
  {/* Bootstrap core JavaScript */}
  {/* MDB core JavaScript */}
  <div className="hiddendiv common" />
  <div className="drag-target" style={{left: '0px'}} />
  <div id="sidenav-overlay" />
</div>