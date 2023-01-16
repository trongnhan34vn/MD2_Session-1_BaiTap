import logo from './logo.svg';
import './App.css';
import LoaderBg from './components/LoaderBg';
import Header from './components/Header';
import Banner from './components/Banner';
import Glasses from './components/Glasses';
import AboutShop from './components/AboutShop';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>
        {/*loader */}
        <LoaderBg/>
        {/* end loader */}
        {/* header */}
        <Header/>
        {/* end header inner */}
        {/* end header */}
        {/* banner */}
        <Banner/>
        {/* end banner */}
        {/* about section */}
        <div className="about">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-5">
                <div className="about_img">
                  <figure>
                    <img src="images/about_img.png" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-7">
                <div className="titlepage">
                  <h2>About Our Shop</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text.
                  </p>
                </div>
                <a className="read_more" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* about section */}
        {/* Our  Glasses section */}
        <Glasses/>
        {/* end Our  Glasses section */}
        {/* Our shop section */}
        <AboutShop/>
        {/* end Our shop section */}
        {/* clients section */}
        <Clients/>
        {/* end clients section */}
        {/* contact section */}
        <Contact/>
        {/* end contact section */}
        {/*  footer */}
        <Footer/>
        {/* end footer */}
        {/* Javascript files*/}
        {/* sidebar */}
        {/* google map js */}
        {/* end google map js */}
      </>

    </div>
  );
}

export default App;
