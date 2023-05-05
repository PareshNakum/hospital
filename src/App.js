import logo from './logo.svg';
import './App.css';
import './style.css'
import { CiLocationOn, CiPhone, CiMail, CiLogin } from "react-icons/ci";
import { AiOutlineSearch, AiFillGooglePlusSquare, AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";


function App() {
  return (
    <>
      <header>
        <div className='bgcolor'>
          <div className='top-header container'>
            <div className='top-header-left'>
              <div className='top-header-details'>
                <h2><CiLocationOn></CiLocationOn></h2>
                <span>Address : -512/fonia,canada</span>
              </div>
              <div className='top-header-details'>
                <h2><CiPhone></CiPhone></h2>
                <span>Call us : +61 5001444-122</span>
              </div>
              <div className='top-header-details'>
                <h2><CiMail></CiMail></h2>
                <span>Email : dummy@example.com</span>
              </div>
            </div>
            <div className='top-header-right'>
              <h2><CiLogin></CiLogin></h2>
              <span>Log In / Sign Up</span>
            </div>
          </div>
        </div>
        <div className='navBgcolor'>
          <div className="container navBgcolor flex justify-between">
            <div className="logo_header">
              <div className="main_logo">
                <a>
                  <img src={require('./image/asset 1.png')}></img>
                </a>
              </div>
            </div>
            <nav>
              <ul className="main_menu flex">
                <li><a href="#">Index</a></li>
                <li><a href="#">About Us</a></li>
                <li>
                  <a href="#">Services</a>
                  <ul className='sub_menu'>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Pricing</a></li>
                  </ul>
                </li>
                <li><a href="#">Doctors</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              <div className="search">
                <h2><AiOutlineSearch></AiOutlineSearch></h2>
              </div>
            </nav>
          </div>
        </div>
      </header>


      <main>
        <div className='slider'>
          <img src={require('./image/asset 49.jpeg')}></img>
          <div className='info'>
            <h1>MEDICAL SERVICES</h1>
            <h2>TOTAL HEALTH CARE SOLUTION</h2>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.</p>
            <button className='btn'>READ MORE</button>
            <button className='btn'>PURCHASE</button>
          </div>
        </div>
        <div className='services'>

          <div className='main-service1'>
            <img src={require('./image/asset 2.png')}></img>
            <h2>HEART SURGERY</h2>
            <p>Proin gravida nibh vel velit auctor<br></br> aliquet. Aenean sollicitudin at the<br></br> good health for you.</p>
            <a>Read More </a>
          </div>
          <div className='main-service1'>
            <img src={require('./image/asset 4.png')}></img>
            <h2>EMERGENCY CARE</h2>
            <p>Proin gravida nibh vel velit auctor<br></br> aliquet. Aenean sollicitudin at the<br></br> good health for you.</p>
            <a>Read More </a>
          </div>
          <div className='main-service1'>
            <img src={require('./image/asset 6.png')}></img>
            <h2>DENTAL CARE</h2>
            <p>Proin gravida nibh vel velit auctor<br></br> aliquet. Aenean sollicitudin at the<br></br> good health for you.</p>
            <a>Read More </a>
          </div>
        </div>
      </main>
      <main>
        <div className='spacer container'>
          <div className='about'>
            <img src={require('./image/asset 8.jpeg')}></img>
            <div className='about-info'>
              <h1>ABOUT MEDICAL</h1>
              <img src={require('./image/asset 9.png')}></img>
              <h3>SPECIALTY MEDICINE WITH COMPASSION AND CAR PROIN GRAVIDA NIBH VEL VELIT</h3>
              <p>Proin Gravida Nibh Vel Velit Auctor Aliquet. Aenean Sollicitudin, Aks Lorem Quis Bibendum Auctor, Nisi Elit Consequat Ipsum, Nec Sagittis Sem Nibh Id Elit. Duis Sed Odio Sit Amet Nibh Vulputate..

                Aenean Sollicitudin, Lorem Quis Bibendum Auctor, Nisi Elit Consequat Ipsum, Nec Sagittis Sem Nibh Id Elit. Duis Sed Odio Sit.</p>
              <div className='inputs'>
                <div className='input-box'>
                  <input type="checkbox" checked></input>Health Care For All Types<br></br>
                  <input type="checkbox" checked></input>Emergency Services
                </div>
                <div className='input-box'>
                  <input type="checkbox" checked></input>Dental Care Dentist.<br></br>
                  <input type="checkbox" checked></input>24/7 Services
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container2'>
          <div className='bgBlack spacer'>
            <img src={require('./image/asset 10.png')}></img>
            <div className='appo flex justify-evenly'>
              <div className='appo1-info'>
                <h5>OPENING HOURS</h5>
                <div>
                  <p>Monday – Friday ---------------------------09:00-17:00</p>
                  <p>Saturday --------------------------------------09:30-17:00</p>
                  <p>Sunday ----------------------------------------10:30-18:00</p>
                </div>
              </div>
              <div className='appo2-info'>
                <h5>BOOK AN APPOINTMENT</h5>
                <div>
                  <a>Email:hospital@example.com</a>
                  <br></br>
                  <span>Fax : 1800 1245 1253</span>
                </div>
                <div className='emerg'> Emergency Call +1 800-123-132</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main>

        <div className='bgImg'>
          <div className='container spacer'>
            <div className='whyChoose flex'>
              <div className='whyInfo'>
                <h1>WHY CHOOSE US</h1>
                <img src={require('./image/asset 9.png')}></img>
                <div className='accord'>
                  <div className='whyInfo1 flex justify-between'>
                    <h3>- We are always carefull to our patient and service</h3>
                    <span><BsFillArrowDownCircleFill></BsFillArrowDownCircleFill></span>
                  </div>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate..</p>
                </div>
                <div className='whyInfo1 flex justify-between'>
                  <h3>- We are always carefull to our patient and service</h3>
                  <span><BsFillArrowDownCircleFill></BsFillArrowDownCircleFill></span>
                </div>
                <div className='whyInfo1 flex justify-between'>
                  <h3>- We are always carefull to our patient and service</h3>
                  <span><BsFillArrowDownCircleFill></BsFillArrowDownCircleFill></span>
                </div>
                <div className='whyInfo1 flex justify-between'>
                  <h3>- We are always carefull to our patient and service</h3>
                  <span><BsFillArrowDownCircleFill></BsFillArrowDownCircleFill></span>
                </div>


              </div>
              <div className='accordImg'>
                <img src={require('./image/asset 11.jpeg')}></img>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main>
        <div className='meet container spacer'>
          <h1>MEET OUR SPECIALISTS</h1>
          <img src={require('./image/asset 12.png')}></img>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit<br></br> consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
          <div className='people flex justify-between'>
            <div className='dr1'>
              <img src={require('./image/asset 13.png')} className='meetImage'></img>
              <img src={require('./image/asset 14.jpeg')}></img>
              <div className='dr1-layer'>
                <h4>Dr.Johan Doe</h4>
                <p>(Hepatologist)</p>
                <div className='icons1'>
                  <p><AiFillFacebook></AiFillFacebook>
                    <AiFillTwitterSquare></AiFillTwitterSquare>
                    <AiFillGooglePlusSquare></AiFillGooglePlusSquare></p>
                </div>
              </div>
            </div>
            <div className='dr2'>
              <img src={require('./image/asset 13.png')} className='meetImage'></img>
              <img src={require('./image/asset 15.jpeg')}></img>
              <div className='dr2-layer'>
                <h4>Dr.Johan Doe</h4>
                <p>(Hepatologist)</p>
                <div className='icons2'>
                  <p><AiFillFacebook></AiFillFacebook>
                    <AiFillTwitterSquare></AiFillTwitterSquare>
                    <AiFillGooglePlusSquare></AiFillGooglePlusSquare></p>
                </div>
              </div>
            </div>
            <div className='dr3'>
              <img src={require('./image/asset 13.png')} className='meetImage'></img>
              <img src={require('./image/asset 16.jpeg')}></img>
              <div className='dr3-layer'>
                <h4>Dr.Johan Doe</h4>
                <p>(Hepatologist)</p>
                <div className='icons3'>
                  <p><AiFillFacebook></AiFillFacebook>
                    <AiFillTwitterSquare></AiFillTwitterSquare>
                    <AiFillGooglePlusSquare></AiFillGooglePlusSquare></p>
                </div>
              </div>
            </div>
            <div className='dr4'>
              <img src={require('./image/asset 13.png')} className='meetImage'></img>
              <img src={require('./image/asset 17.jpeg')}></img>
              <div className='dr4-layer'>
                <h4>Dr.Johan Doe</h4>
                <p>(Hepatologist)</p>
                <div className='icons4'>
                  <p><AiFillFacebook></AiFillFacebook>
                    <AiFillTwitterSquare></AiFillTwitterSquare>
                    <AiFillGooglePlusSquare></AiFillGooglePlusSquare></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className='bgWelcome'>
          <h2>WELCOME TO HOSPITAL</h2>
          <img src={require('./image/asset 12.png')}></img>
          <h1>We Care About Everything What You Want</h1>
          <button className='btn'>READ MORE</button>
        </div>
      </main>
      <main className='upcoming container spacer flex justify-between'>
        <div>
          <h1>UPCOMING EVENTS</h1>
          <img src={require('./image/asset 9.png')}></img>
        </div>
        <h1><FaChevronCircleLeft></FaChevronCircleLeft>&nbsp;&nbsp;<FaChevronCircleRight></FaChevronCircleRight></h1>
      </main>
      <main>
        <div className='container greed'>
          <div className='flex upcomingInfo'>
            <div>
              <img src={require('./image/asset 19.jpeg')}></img>
            </div>
            <div className='upInfo'>
              <h3>Together We Can Do So Much</h3>
              <p>California,UK &nbsp;24 Nov,2022</p>
              <p>Proin gravida nibh vel velit auctor<br></br> aliquet. Aenean sollicitudin, lorem quis<br></br> bibendum auctor</p>
            </div>
          </div>
          <div className='flex upcomingInfo'>
            <div>
              <img src={require('./image/asset 21.jpeg')}></img>
            </div>
            <div className='upInfo'>
              <h3>Together We Can Do So Much</h3>
              <p>California,UK &nbsp;24 Nov,2022</p>
              <p>Proin gravida nibh vel velit auctor<br></br> aliquet. Aenean sollicitudin, lorem quis<br></br> bibendum auctor</p>
            </div>
          </div>
          <div className='flex upcomingInfo'>
            <div>
              <img src={require('./image/asset 20.jpeg')}></img>
            </div>
            <div className='upInfo'>
              <h3>Together We Can Do So Much</h3>
              <p>California,UK &nbsp;24 Nov,2022</p>
              <p>Proin gravida nibh vel velit auctor<br></br> aliquet. Aenean sollicitudin, lorem quis<br></br> bibendum auctor</p>
            </div>
          </div>
          <div className='flex upcomingInfo'>
            <div>
              <img src={require('./image/asset 22.jpeg')}></img>
            </div>
            <div className='upInfo'>
              <h3>Together We Can Do So Much</h3>
              <p>California,UK &nbsp;24 Nov,2022</p>
              <p>Proin gravida nibh vel velit auctor<br></br> aliquet. Aenean sollicitudin, lorem quis<br></br> bibendum auctor</p>
            </div>
          </div>
        </div>
      </main>

      <main>
        <div className='bgImgCount flex spacer justify-evenly'>
          <div className='count-info'>
            <img src={require('./image/asset 23.png')}></img>
            <p className='counts'>2337</p>
            <p>Satisfied Patients</p>
          </div>
          <div className='count-info'>
            <img src={require('./image/asset 24.png')}></img>
            <p className='counts'>335</p>
            <p>Doctor's Team</p>
          </div>
          <div className='count-info'>
            <img src={require('./image/asset 25.png')}></img>
            <p className='counts'>1305</p>
            <p>Success Mission</p>
          </div>
          <div className='count-info'>
            <img src={require('./image/asset 26.png')}></img>
            <p className='counts'>1540</p>
            <p>Successfull Surgeries</p>
          </div>
        </div>
      </main>

      <main className='container spacer'>
        <div className='news'>
          <h1>OUR NEWS & BLOG</h1>
          <img src={require('./image/asset 12.png')}></img>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit<br></br> consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
        </div>
        <div className='news-info-detail flex justify-evenly'>
          <div className='news-info'>
            <div className='news-img'>
              <img src={require('./image/asset 27.jpeg')}></img>
            </div>
            <h3>Blog Image Post</h3>
            <span>BY ADMINSEPT | 29,2016</span>
            <p>Sollicitudin, lorem quis bibe u auctor, nisi elit<br></br> conat ipsu, nec sagittis sem ni id elit. Duis sed<br></br> odio sit amet nibh vulpute cursus.</p>
            <span className='newsspan'>Read More</span>
          </div>
          <div className='news-info'>
            <div className='news-img'>
              <img src={require('./image/asset 28.jpeg')}></img>
            </div>
            <h3>Blog Image Post</h3>
            <span>BY ADMINSEPT | 29,2016</span>
            <p>Sollicitudin, lorem quis bibe u auctor, nisi elit<br></br> conat ipsu, nec sagittis sem ni id elit. Duis sed<br></br> odio sit amet nibh vulpute cursus.</p>
            <span className='newsspan'>Read More</span>
          </div>
          <div className='news-info'>
            <div className='news-img'>
              <img src={require('./image/asset 29.jpeg')}></img>
            </div>
            <h3>Blog Image Post</h3>
            <span>BY ADMINSEPT | 29,2016</span>
            <p>Sollicitudin, lorem quis bibe u auctor, nisi elit<br></br> conat ipsu, nec sagittis sem ni id elit. Duis sed<br></br> odio sit amet nibh vulpute cursus.</p>
            <span className='newsspan'>Read More</span>
          </div>

        </div>
      </main>

      <footer>
        <div className='footer flex'>
          <div className='info'>
            <img src={require('./image/asset 40.png')}></img>
            <p>Proin gravida nibh vel velit auctor aliquet.<br></br> Aenean sollicitudin, lorem quis bibendum<br></br> auctor.</p>
            <p className='read'>Read More </p>

            <div className='footer-details flex'>
              <h5><CiLocationOn></CiLocationOn></h5>
              <span>Address : -512/fonia,canada</span>
            </div>
            <div className='footer-details flex'>
              <h5><CiPhone></CiPhone></h5>
              <span>Call us : +61 5001444-122</span>
            </div>
            <div className='footer-details flex'>
              <h5><CiMail></CiMail></h5>
              <span>Email : dummy@example.com</span>
            </div>
          </div>
          <div className='main-footer flex'>
            <div className='startInsta'>
              <h1>INSTAGRAM</h1>
              <img src={require('./image/asset 9.png')}></img>
              <div className='insta'>
                <img src={require('./image/asset 41.jpeg')}></img>
                <img src={require('./image/asset 42.jpeg')}></img>
                <img src={require('./image/asset 43.jpeg')}></img><br></br>
                <img src={require('./image/asset 44.jpeg')}></img>
                <img src={require('./image/asset 45.jpeg')}></img>
                <img src={require('./image/asset 46.jpeg')}></img>
              </div>
            </div>
            <div className='userfull'>
              <h1>USERFUL</h1>
              <img src={require('./image/asset 9.png')}></img>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Doctors</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='open'>
              <h1>OPENING HOURS</h1>
              <img src={require('./image/asset 9.png')}></img>
              <ul>
                <li>Monday – Friday ------09:00-17:00</li>
                <li>Saturday -----------------09:30-17:00</li>
                <li>Sunday -------------------10:30-18:00</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>Copyright © 2022- Life LineDesign by Webstrot.</p>
        </div>
      </footer>
    </>

  );
}

export default App;
