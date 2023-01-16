import logo from './logo.svg';
import './App.css';
import HeaderNav from "./components/HeaderNav.js";
import Appointment from './components/Appointment';
import TeamStart from './components/TeamStart';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <>
        {/* Header Start */}
        <HeaderNav/>
        {/* Header End */}
        {/* Carousel Start */}
        <Slider/>
        {/* Carousel End */}
        {/* About Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-5">
                <img className="img-fluid rounded" src="img/about.jpg" alt="" />
              </div>
              <div className="col-lg-7 mt-4 mt-lg-0">
                <h2
                  className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block"
                  style={{ width: 350, marginLeft: "-205px" }}
                >
                  25 Years Experience
                </h2>
                <h6 className="text-uppercase">Learn About Us</h6>
                <h1 className="mb-4">
                  We Provide Reliable And Effective Legal Services
                </h1>
                <p>
                  Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                  dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                  justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                </p>
                <a href="" className="btn btn-primary mt-2">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Services Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-3">
                <h6 className="text-uppercase">Our Practice</h6>
                <h1 className="mb-4">Our Practice Areas</h1>
                <p>
                  Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed
                  sed diam. Ea et erat ut sed diam sea ipsum
                </p>
                <a href="" className="btn btn-primary mt-2">
                  More Services
                </a>
              </div>
              <div className="col-lg-9 pt-5 pt-lg-0">
                <div className="bg-primary rounded" style={{ height: 200 }} />
                <div
                  className="owl-carousel service-carousel position-relative"
                  style={{ marginTop: "-100px", padding: "0 30px" }}
                >
                  <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                    <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                      <i className="fa fa-2x fa-landmark" />
                    </div>
                    <h5 className="mb-4 px-4">Civil Law</h5>
                    <p className="m-0">
                      Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita sit
                      duo dolor stet at at. Tempor dolor sit ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services End */}
        {/* Appointment Start */}
        <Appointment/>
        {/* Appointment End */}
        {/* Features Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6" style={{ minHeight: 500 }}>
                <div className="position-relative h-100 rounded overflow-hidden">
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/feature.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 pt-5 pb-lg-5">
                <div className="feature-text bg-white rounded p-lg-5">
                  <h6 className="text-uppercase">Our Features</h6>
                  <h1 className="mb-4">Why Choose Us</h1>
                  <div className="d-flex mb-4">
                    <div
                      className="btn-primary btn-lg-square px-3"
                      style={{ borderRadius: 50 }}
                    >
                      <h5 className="text-secondary m-0">01</h5>
                    </div>
                    <div className="ml-4">
                      <h5>Best Law Practices</h5>
                      <p className="m-0">
                        Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                        ipsum ipsum stet ipsum
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div
                      className="btn-primary btn-lg-square px-3"
                      style={{ borderRadius: 50 }}
                    >
                      <h5 className="text-secondary m-0">02</h5>
                    </div>
                    <div className="ml-4">
                      <h5>Efficiency &amp; Trust</h5>
                      <p className="m-0">
                        Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                        ipsum ipsum stet ipsum
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div
                      className="btn-primary btn-lg-square px-3"
                      style={{ borderRadius: 50 }}
                    >
                      <h5 className="text-secondary m-0">03</h5>
                    </div>
                    <div className="ml-4">
                      <h5>Results You Deserve</h5>
                      <p className="m-0">
                        Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                        ipsum ipsum stet ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features End */}
        {/* Action Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="bg-action rounded" style={{ height: 500 }}>
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-lg-7 text-center">
                  <h1 className="text-white mb-4">
                    Let's get started. Call us now for a Free Consultation
                  </h1>
                  <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Action End */}
        {/* Team Start */}
        <TeamStart/>
        {/* Team End */}
        {/* Testimonial Start */}
        <Testimonial/>
        {/* Testimonial End */}
        {/* Footer Start */}
        <Footer/>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-primary px-3 back-to-top">
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
