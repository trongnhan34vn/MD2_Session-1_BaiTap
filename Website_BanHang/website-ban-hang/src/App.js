import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Products from './Components/Products';
import Clients from './Components/Clients';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <>
  <div className="hero_area">
    {/* header section strats */}
    <Header/>
    {/* end header section */}
    {/* slider section */}
    <section className="slider_section position-relative">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="offset-md-2 col-md-4">
                      <div className="slider_item-detail">
                        <div>
                          <h2 className="slider_heading">
                            50% OFF <br />
                            First order
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nis
                          </p>
                          <div className="d-flex">
                            <a href="" className="slider_btn">
                              {" "}
                              Order Now{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero_img-box">
                        <img src="images/hero.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="offset-md-2 col-md-4">
                      <div className="slider_item-detail">
                        <div>
                          <h2 className="slider_heading">
                            50% OFF <br />
                            First order
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nis
                          </p>
                          <div className="d-flex">
                            <a href="" className="slider_btn">
                              {" "}
                              Order Now{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero_img-box">
                        <img src="images/hero.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="offset-md-2 col-md-4">
                      <div className="slider_item-detail">
                        <div>
                          <h2 className="slider_heading">
                            50% OFF <br />
                            First order
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nis
                          </p>
                          <div className="d-flex">
                            <a href="" className="slider_btn">
                              {" "}
                              Order Now{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero_img-box">
                        <img src="images/hero.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    {/* end slider section */}
  </div>
  {/* detail section */}
  <section className="detail_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="detail_img-box">
            <img src="images/detail.png" alt="" className="w-100" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="detail_container">
            <div className="detail-box d-box-1">
              <a href="">
                <div className="detail-content">
                  <img src="images/d-1.png" alt="" />
                  <h5>Care kids</h5>
                </div>
              </a>
            </div>
            <div className="detail-box d-box-2">
              <a href="">
                <div className="detail-content">
                  <img src="images/d-2.png" alt="" />
                  <h5>Baby boy</h5>
                </div>
              </a>
            </div>
            <div className="detail-box d-box-3">
              <a href="">
                <div className="detail-content">
                  <img src="images/d-3.png" alt="" />
                  <h5>Baby girl</h5>
                </div>
              </a>
            </div>
            <div className="detail-box d-box-4">
              <a href="">
                <div className="detail-content">
                  <img src="images/d-4.png" alt="" />
                  <h5>Sale</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end detail section */}
  {/* products section */}
  <Products/>
  {/* end products section */}
  {/* find section */}
  <section className="find_section layout_padding-bottom">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-8 offset-md-2">
          <div className="find_container">
            <div className="row">
              <div className="col-sm-6">
                <div className="find_container-img">
                  <img src="images/find-img.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <h3>
                  Find Everything <br />
                  From A to Z
                </h3>
                <p>Shop Back to school</p>
              </div>
            </div>
          </div>
          <div className="shop_container">
            <div className="row">
              <div className="col-sm-6">
                <p>Shoes</p>
                <h3>Shop by catagories</h3>
                <div>
                  <a href=""> View More </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="shoe_img-box">
                  <img src="images/shoes.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="find_img-box">
            <img src="images/find-hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end find section */}
  {/* client section */}
  <Clients/>
  {/* end client section */}
  {/* sign section */}
  <SignUp/>
  {/* end sign section */}
  {/* info section */}
  <section className="info_section layout_padding">
    <div className="container links_container">
      <div className="row">
        <div className="col-md-3">
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>
              <a href=""> International Help </a>
            </li>
            <li>
              <a href=""> Contact Customer Care </a>
            </li>
            <li>
              <a href=""> Return Policy </a>
            </li>
            <li>
              <a href=""> Privacy Policy </a>
            </li>
            <li>
              <a href=""> Shipping Information </a>
            </li>
            <li>
              <a href=""> Promotion Terms </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>LET US HELP YOU</h3>
          <ul>
            <li>
              <a href=""> Your Account </a>
            </li>
            <li>
              <a href=""> Your Orders </a>
            </li>
            <li>
              <a href=""> Shipping Rates &amp; Policies </a>
            </li>
            <li>
              <a href=""> Amazon Prime </a>
            </li>
            <li>
              <a href=""> Returns &amp; Replacements </a>
            </li>
            <li>
              <a href=""> Help </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>INFORMATION</h3>
          <ul>
            <li>
              <a href=""> About Us </a>
            </li>
            <li>
              <a href=""> Careers </a>
            </li>
            <li>
              <a href=""> Sell on shop </a>
            </li>
            <li>
              <a href=""> Press &amp; News </a>
            </li>
            <li>
              <a href=""> Competitions </a>
            </li>
            <li>
              <a href=""> Terms &amp; Conditions </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>OUR SHOP</h3>
          <ul>
            <li>
              <a href=""> Daily Deals </a>
            </li>
            <li>
              <a href=""> App Only Deals </a>
            </li>
            <li>
              <a href=""> Our Hottest Products </a>
            </li>
            <li>
              <a href=""> Gift Vouchers </a>
            </li>
            <li>
              <a href=""> Trending Product </a>
            </li>
            <li>
              <a href=""> Hot Flash Sale </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="follow_container">
        <div className="row">
          <div className="col-md-9">
            <div className="app_container">
              <h3>DOWNLOAD OUR APPS</h3>
              <div>
                <img src="images/google-play.png" alt="" />
                <img src="images/apple-store.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_social">
              <div>
                <a href="">
                  <img src="images/fb.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/linkedin.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="images/instagram.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info section */}
  {/* footer section */}
    <Footer/>
  {/* footer section */}
</>
    </div>
  );
}

export default App;
