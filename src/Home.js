import React from "react";
import logo from "./components/images/logo.png";
import menu from "./components/images/menu.png";
import mark from "./components/images/mark.png";
import range from "./components/images/range.png";
import band from "./components/images/band.png";
import arch from "./components/images/arch.png";
import durab from "./components/images/durab.png";
import mob from "./components/images/mob.png";
import erg from "./components/images/erg.png";
import ben from "./components/images/ben.png";
import retail from "./components/images/retail.png";
import imp from "./components/images/imp.png";
import find from "./components/images/find.png";
import prod from "./components/images/prod.png";
import exp from "./components/images/exp.png";
import arrow from "./components/images/arrow.png";
import savings from "./components/images/savings.png";
import twit from "./components/images/twit.png";
import ytube from "./components/images/ytube.png";
import insta from "./components/images/insta.png";
import fbook from "./components/images/fbook.png";
import leftarrow from "./components/images/leftarrow.png";
import rightarrow from "./components/images/rightarrow.png";
import "./Home.css";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <a className="menu">
            <img src={menu} alt="men" className="menu" />
          </a>
          <h5 className="cart">Cart</h5>
        </div>
      </nav>

      <div className="container-fluid first">
        <h3 className="heading">
          Partnership
          <br />
          opportunities
        </h3>
        <p className="para">
          Let's make impactful connections that drive
          <br />
          success
        </p>
      </div>
      <div className="second">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h4 className="inno">Innovation at work</h4>
            </div>
            <div className="col-8">
              <p className="text">
                Aletha Health offers pioneering solutions meticulously crafted
                to alleviate pain and enhance overall well-being. Our products
                blend innovation with simplicity, addressing diverse user needs
                while providing effective pain relief.
              </p>
            </div>
          </div>
             
          <div className="boxblack">
            <div className="container">
              <div className="row ">
                <div className="col-3">
                  <div className="cardnew">
                    <div className="card-box">
                      <h5 className="card-head innovative">
                        Innovative design
                      </h5>
                      <p className="card-content sent">
                        Backed by extensive research
                        <br />
                        to effectively target specific
                        <br />
                        pain points.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="cardnew">
                    <div className="card-box">
                      <h5 className="card-head innovative">
                        Quality Selection
                      </h5>
                      <p className="card-content sent">
                        Enhanced durability for
                        <br />
                        minimal footprint and long-
                        <br />
                        lasting use.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="cardnew">
                    <div className="card-box">
                      <h5 className="card-head innovative">
                        Precision craftsman..
                      </h5>
                      <p className="card-content sent">
                        Meeting our highest standards
                        <br />
                        for pain relief through rigorous
                        <br />
                        comprehensive testing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="cardnew">
                    <div className="card-box">
                      <h5 className="card-head innovative">
                        Quality Selection
                      </h5>
                      <p className="card-content sent">
                        Backed by extensive research
                        <br />
                        to effectively target specific
                        <br />
                        pain points.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="arrow mt-5">
            <img src={leftarrow} alt="arrow" className="leftarrow" />
            <img src={rightarrow} alt="arrow" className="leftarrow" />
          </div>
        </div>

        <div className="container mt-5">
          <h4 className="advance">
            Advanced pain relief system for targeted areas
          </h4>
          <div className="row mt-5">
            <div className="col-4 boxheight">
              <div className="card">
                <div className="cardimage">
                  <img src={mark} className="range" />
                </div>
                <div className="card-body color">
                  <h5 className="themark">The Mark</h5>
                  <h6 className="thehip">A new Hip Hook</h6>
                  <p class="card-text">
                    A new Hip Hook. Enhance hip mobility with targeted tension
                    relief for critical flexor muscles.
                  </p>
                  <div class="button1">
                    <button
                      type="button"
                      class="btn btn-outline-danger rounded-pill"
                    >
                      <img src={arrow} /> BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 boxheight">
              <div className="card">
                <div className="cardimage">
                  <img src={range} className="range" />
                </div>
                <div className="card-body color">
                  <h5 className="themark">The Range</h5>
                  <h6 className="thehip">Formerly known as the Nuckle</h6>
                  <p class="card-text">
                    Formerly known as the Nuckle. Instant relief from head,
                    neck, jaw, and shoulder pain by targeting deep-set muscles.
                  </p>
                  <div class="button1">
                    <button
                      type="button"
                      class="btn btn-outline-danger rounded-pill"
                    >
                      <img src={arrow} /> BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 boxheight">
              <div className="card">
                <div className="cardimage">
                  <img src={band} className="range" />
                </div>
                <div className="card-body color">
                  <h5 className="themark">The Band</h5>
                  <h6 className="thehip">A muscle activation too</h6>
                  <p class="card-text">
                    A muscle activation tool. Strengthen hips and improve
                    performance by addressing imbalances from modern life.
                  </p>
                  <div class="button1">
                    <button
                      type="button"
                      class="btn btn-outline-danger rounded-pill"
                    >
                      <img src={arrow} /> BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="arrow">
          <img src={leftarrow} alt="arrow" className="leftarrow" />
          <img src={rightarrow} alt="arrow" className="leftarrow" />
        </div>
        </div>

        

        <div className="container-fluid mt-5 icons">
          <div className="row">
            <div className="col-3">
              <div class="card qwerty">
                  <img src={arch} class="card-img-top son" alt="..."/>
                  <div class="card-body qwerty">
                    <h5 class="card-title ">Precision relief</h5>
                      </div>
                </div>
              </div>
            <div className="col-3">
             <div class="card qwerty">
                  <img src={mob} class="card-img-top mobile" alt="..."/>
                  <div class="card-body qwerty">
                    <h5 class="card-title">Mobility<br/>enchancement</h5>
                    <p className="imp">Improves movement and<br/>flexibility</p>
                      </div>
                </div>
            </div> 
            <div className="col-3">
            <div class="card qwerty">
                  <img src={durab} class="card-img-top son" alt="..."/>
                  <div class="card-body qwerty">
                    <h5 class="card-title">Durable construction</h5>
                      </div>
                </div>
            </div>
            <div className="col-3">
            <div class="card qwerty">
                  <img src={erg} class="card-img-top son" alt="..."/>
                  <div class="card-body qwerty">
                    <h5 class="card-title">Ergonomic and<br/>effective</h5>
                      </div>
                </div>
              </div>
          </div>
        </div>

        <div className="comprehensiveone">
          <div className="container contents ">
            <div className="row">
              <div className="col-6">
                <h4 className="inter">Benefits of integrating our products</h4>
                <img src={ben} alt="card-img" className="ben " />
                <br />
              </div>
              <div className="col-6 pt-5">
                <h5 className="comp">Comprehensive solutions</h5>
                <p className="comptext">
                  Combine multiple products to offer holistic treatment plans
                  tailored
                  <br />
                  to individual client needs.
                </p>
                <h5 className="comp">Customized care</h5>
                <p className="comptext">
                  Create personalized treatment strategies by selecting products
                  that
                  <br />
                  address specific pain points and mobility issues.
                </p>
                <h5 className="comp">Enchanced client experience</h5>
                <p className="comptext">
                  Provide clients with diverse options for pain relief and
                  muscle
                  <br />
                  care, improving overall satisfaction.
                </p>
                <h5 className="comp">Improved outcomes</h5>
                <p className="comptext">
                  Maximize treatment effectiveness by integrating complementary
                  <br />
                  products, leading to better client results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="comprehensive">
          <div className="container contents">
            <h4 className="benefit">Retailing Aletha Health Products</h4>
            <div className="row">
              <div className="col-6">
                <h5 className="comp mt-3">Additional revenue</h5>
                <p className="comptext">
                  Generate income by selling high-quality products alongside
                  <br />
                  standard services..
                </p>
                <h5 className="comp">Value-added service</h5>
                <p className="comptext">
                  Offer clients convenient access to tools that support their
                  health
                  <br />
                  and fitness goals.
                </p>
                <h5 className="comp">Educational opportunities</h5>
                <p className="comptext">
                  Educate clients on the benefits of using specific tools for
                  pain
                  <br />
                  relief and mobility enhancement.
                </p>
                <h5 className="comp">Brand loyalty</h5>
                <p className="comptext">
                  Build client loyalty by providing access to trusted, effective
                  <br />
                  products that align with their needs.
                </p>
                <h5 className="comp">Collaborative partnerships</h5>
                <p className="comptext">
                  Establish partnerships with Aletha Health to access exclusive
                  <br />
                  retailing opportunities and support resources.
                </p>
              </div>
              <div className="col-6">
                <img src={retail} alt="card-img" className="ben" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <img src={imp} alt="card-img" className="ben" />
            </div>
            <div className="col-6">
              <h4 className="our">Our impact</h4>
              <p className="comptext">
                Aletha Health products deliver targeted relief and enhance well-
                <br />
                being with innovative design and scientific research, providing
                <br />
                effective solutions for muscle tension, mobility, and chronic
                pain.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5 insights">
          <div className="row">
            <div className="col-6">
              <img src={find} alt="card-img" className="ben" />
            </div>
            <div className="col-6">
              <h4 className="our">Our findings and insights</h4>
              <p className="comptext">
                Explore comprehensive studies and analyses showcasing the<br/>
                efficacy and benefits of our products.</p>
              <button type="button" class="button rounded-pill">
                <img src={arrow}/> Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="experience mt-5">
          <div className="container contents">
            <h4 className="benefit">How to use our products</h4>
            <div className="row">
              <div className="col-6">
                <p className="comptext">
                  Explore essential techniques for maximizing the effectiveness
                  of
                  <br />
                  each tool. Learn proper usage methods and targeted strategies
                  to
                  <br />
                  alleviate discomfort across various muscle groups.
                </p>
                <button type="button" class="button rounded-pill">
                  <img src={arrow} /> Know more
                </button>
              </div>
              <div className="col-6">
                <img src={prod} alt="card-img" className="ben" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <img src={exp} alt="card-img" className="ben" />
            </div>
            <div className="col-6">
              <h4 className="our">Experience relief today</h4>
              <p className="comptext">
                Transform your well-being with a single click.
              </p>
              <button type="button" class="button rounded-pill">
                <img src={arrow} /> Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="comprehensive mt-5">
          <div className="container contents">
            <div className="row">
              <div className="col-6">
                <h4 className="maximum">Maximize savings</h4>
                <div className="mt-5">
                  <input
                    type="email"
                    class="form-control company"
                    id="email"
                    placeholder="Company name*"
                    name="email"
                  />
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Contact person name*"
                    name="email"
                  />
                </div>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email address*"
                  name="email"
                />
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Phone number*"
                  name="email"
                />
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Company website(optional)*"
                  name="email"
                />
                <button type="button" class="button rounded-pill mt-5">
                  Send message <img src={arrow} />
                </button>
              </div>
              <div className="col-6">
                <img src={savings} alt="card-img" className="ben" />
              </div>
            </div>
          </div>
        </div>
        <div className="lastbox">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <h4 className="learn">LEARN.USE.RELIEF.</h4>
                <img src={logo} alt="logo" className="iconlogo" />
              </div>
              <div className="col-3">
                <h6 className="homebutton">Home</h6>
                <h6 className="homebutton">About us</h6>
                <h6 className="homebutton">How to use</h6>
                <h6 className="homebutton">Learn</h6>
                <h6 className="homebutton">Business enquires</h6>
              </div>
              <div className="col-3">
                <h6 className="products">Products</h6>
                <h6 className="home">The Set</h6>
                <h6 className="home">Mark</h6>
                <h6 className="home">Range</h6>
                <h6 className="home">Orbit</h6>
                <h6 className="home">Band</h6>
              </div>
              <div className="col-3">
                <img src={twit} alt="icon" className="twit" />
                <img src={insta} alt="icon" className="twit" />
                <img src={fbook} alt="icon" className="twit" />
                <img src={ytube} alt="icon" className="twit" />
              </div>
            </div>
            <hr className="line"></hr>
            <p className="rights">&copy; 2024 ALETHA. ALL Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
