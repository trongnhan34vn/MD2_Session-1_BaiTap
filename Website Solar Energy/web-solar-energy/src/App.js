import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Team from './components/Team';
import Service from './components/Service';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <>
        {/* Navbar Start */}
        <Navbar/>
        {/* Navbar End */}
        {/* Carousel Start */}
        <div className="container-fluid p-0 mb-5 pb-5" id="home">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item position-relative active"
                style={{ height: "100vh", minHeight: 400 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/carousel-1.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4
                      className="text-white text-uppercase mb-4"
                      style={{ letterSpacing: 3 }}
                    >
                      Solar Energy
                    </h4>
                    <h3 className="display-2 font-secondary text-white mb-4">
                      Innovative Solar Solution For Home
                    </h3>
                    <a
                      className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll"
                      href="#contact"
                    >
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item position-relative"
                style={{ height: "100vh", minHeight: 400 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/carousel-2.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4
                      className="text-white text-uppercase mb-4"
                      style={{ letterSpacing: 3 }}
                    >
                      Solar Energy
                    </h4>
                    <h3 className="display-2 font-secondary text-white mb-4">
                      Let The Sun Work For Your Home
                    </h3>
                    <a
                      className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll"
                      href="#contact"
                    >
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev justify-content-start"
              href="#header-carousel"
              data-slide="prev"
            >
              <div className="btn btn-primary px-0" style={{ width: 68, height: 68 }}>
                <span className="carousel-control-prev-icon mt-3" />
              </div>
            </a>
            <a
              className="carousel-control-next justify-content-end"
              href="#header-carousel"
              data-slide="next"
            >
              <div className="btn btn-primary px-0" style={{ width: 68, height: 68 }}>
                <span className="carousel-control-next-icon mt-3" />
              </div>
            </a>
          </div>
        </div>
        {/* Carousel End */}
        {/* About Start */}
        <div className="container-fluid py-5" id="about">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img className="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt="" />
              </div>
              <div className="col-lg-7">
                <h6
                  className="text-uppercase text-primary mb-3"
                  style={{ letterSpacing: 3 }}
                >
                  About Us
                </h6>
                <h1 className="display-4 mb-3">
                  <span className="text-primary">25+ Years Experience</span> In Solar
                  Power Industry
                </h1>
                <p>
                  At sed est eirmod sanctus et amet diam magna. Dolore clita magna sed
                  sed stet et, at magna rebum eirmod sanctus ut sed, stet tempor
                  dolore rebum sit duo, dolore tempor sit est sit sanctus, sit justo
                  sit invidunt clita ut justo diam magna. Erat eos nonumy labore
                  dolor. Dolore kasd no et et et elitr. Erat sea dolor elitr diam sed
                  lorem rebum et vero.
                </p>
                <a
                  className="btn btn-primary font-weight-bold py-3 px-5 mt-2"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Service Start */}
        <Service/>
        {/* Service End */}
        {/* Team Start */}
        <Team/>
        {/* Team End */}
        {/* FAQs Start */}
        <div className="container-fluid py-5" id="faqs">
          <div className="container py-5">
            <div className="section-title position-relative text-center">
              <h6
                className="text-uppercase text-primary mb-3"
                style={{ letterSpacing: 3 }}
              >
                FAQs
              </h6>
              <h1 className="display-4">You Should Know</h1>
            </div>
            <div className="row">
              <div className="col-md-6 border-right border-primary">
                <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                  <h3 className="mb-4">Why Switch to Solar?</h3>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                    Vero dolor amet no eos ipsum erat
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                    Lorem tempor tempor gubergren dolor dolor dolor
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                    Nonumy tempor dolores sadipscing duo
                  </h5>
                  <h5 className="mb-0">
                    <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                    Kasd dolor ea dolores ut nonumy
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center text-md-left ml-md-3">
                  <h3 className="mb-4">Why Choose Us?</h3>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-success mr-2" />
                    Vero dolor amet no eos ipsum erat
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-success mr-2" />
                    Lorem tempor tempor gubergren dolor dolor dolor
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-success mr-2" />
                    Nonumy tempor dolores sadipscing duo
                  </h5>
                  <h5 className="mb-0">
                    <i className="fa fa-check text-success mr-2" />
                    Kasd dolor ea dolores ut nonumy
                  </h5>
                </div>
              </div>
              <div className="col-md-12 text-center pt-3">
                <a
                  className="btn btn-primary font-weight-bold py-3 px-5 mt-4 btn-scroll"
                  href="#contact"
                >
                  Get A Quote
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs End */}
        {/* Contact Start */}
        <Contact/>
        {/* Contact End */}
        {/* Footer Start */}
        <Footer/>
        {/* Footer End */}
        {/* Modal */}
        <Modal/>
        {/* Modal */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
        >
          <i className="fa fa-angle-double-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Contact Javascript File */}
        {/* Template Javascript */}
      </>
    </div>
  );
}

export default App;
