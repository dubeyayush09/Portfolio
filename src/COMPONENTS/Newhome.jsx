import React from 'react'
import './home.css'
import sound from './sound.mp3'
import hash from './frontpage.png';
import kk from './kkMockup.png';
import weather from './weatherMockup.png';
import spelling from './spellMockup.png'
import ank from './resumeimage.png'
import actingthinking from './actingthinking.png'
import bulb from './bulb.png'
import about1 from './about.png'
import contacts from './contacts.png'
import certificates from './certificates.png'
import resume from "./Resume_original.pdf"
// import Api from './Api.png'
import messaging from './messaging.png'
import linkBee from "./linkbeeIMG.png"
import collab from "./COLLABB.png"
import video from "./doodleVideo.mp4";
import video2 from "./linkbee.mp4";

import { useState } from 'react';
import { useRef } from 'react';

export default function Newhome() {
    const about = useRef(null);
    const work = useRef(null);
    const contact = useRef(null);
    const top = useRef(null);

    const scrollSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
        document.getElementById('playing').play();
    };

    const SendtoWhatspp = () => {
        let naam = document.getElementById("newid1").value;
        let email = document.getElementById('newid2').value;
        let text = document.getElementById('newid3').value;
        let Message = `https://wa.me/917248370156?text=" + "Name :: " + ${naam} + " %0a " + "Email :: " + ${email} + " %0a " + " Message :: " + ${text}`
        window.open(Message, '_blank').focus();
    }
    const [greetingstyle, setgreetings] = useState({ color: '#FF5757' });
    const [greetingstyle2, setgreetings2] = useState({})
    const [whitetoblack, setwhitetoblack] = useState({})
    const [blacktowhite, setblacktowhite] = useState({})
    const [backorange, setbackorange] = useState({})
    const [borderGoldToOrange, setborderGoldToOrange] = useState({})
    const [borderblack, setborderblack] = useState({})
    const [sectioncolor, setsectioncolor] = useState({})
    const [yelloToblack, setyelloToblack] = useState({})
    const [yelloToblack2, setyelloToblack2] = useState({})
    const [yelloToblack3, setyelloToblack3] = useState({})
    const [backgroundYellotoorange, setbackgroundYellotoorange] = useState({});
    const [truck, settruck] = useState({})
    const [daynight, setdaynight] = useState(true)
    const [sunmoon, setsunmoon] = useState('🌚');
    const [backblacktowhite, setbackblacktowhite] = useState('');
    const [coloring, setcoloring] = useState({})
    const [reverse, setreverse] = useState({})
    const [borderblue, setborderblue] = useState({})
    let colorOfText = "#FF3B3F";  //orange one
    // let colorOfText = "#FFD700";  //orange one
    const ChangeTheme = () => {
        setcoloring({
            color: 'black',
        })
        setreverse({
            color: 'white'
        })
        document.body.style.background = 'white'
        document.body.style.backgroundPosition = 'center';
        setsunmoon('🌚')
        setbackblacktowhite({
            border: '.2px solid rgb(0, 0, 0)',
        })
        setgreetings({
            color: `${colorOfText}`,
            // textShadow: ".2px .2px 0px black",
        })
        setgreetings2({
            color: `${colorOfText}`,
            textShadow: ".5px .5px 0px black"
        })
        setwhitetoblack({
            color: '#0a192f',
            fontWeight: 500
        })
        setblacktowhite({
            border: `2px solid ${colorOfText}`,
        })
        setbackorange({
            background: colorOfText,
            // opacity: '85%'
        })
        setborderGoldToOrange({
            'borderColor': colorOfText,

        })
        setborderblack({
            'borderColor': '#0a192f',
        })
        setsectioncolor({
            // webkitBackdropFilter: "blur(5px) saturate(200%)",
            backgroundColor: "rgb(251 251 251 / 94%)",
        })
        setyelloToblack({
            color: 'black',
            fontWeight: '900'
        })
        setyelloToblack2({
            color: 'black',
            fontWeight: '900'
        })
        setyelloToblack3({
            background: "black"
        })
        settruck({
            color: '#0a192f',
            'borderColor': '#0a192f',

        })
        setbackgroundYellotoorange({
            background: colorOfText,
        })
        setborderblue({
            borderTop: "2px solid white",
            borderBottom: "2px solid white",
            borderLeft: "2px solid black",
            borderRight: "2px solid black",
        })
        setdaynight(false);
    }
    const DarkMode = () => {
        setborderblue({
            borderTop: "2px solid #fe6235",
            borderBottom: "2px solid #fe6235",
            borderLeft: "2px solid white",
            borderRight: "2px solid white",
        })
        setcoloring({
            color: 'white'
        })
        setreverse({
            color: '#fe6235'
        })
        setsunmoon('🌞');
        document.body.style.background = '#04293a'
        setborderGoldToOrange({
            'borderColor': '#fe6235',
        })
        setbackblacktowhite({
            border: '.2px solid white',
        })
        setgreetings({
            color: '#fe6235'
        })
        setgreetings2({
            color: 'white',
        })
        setwhitetoblack({
            color: 'white',
        })
        setblacktowhite({
            border: "4px solid rgb(43 51 64 / 98%)"
        })
        setbackorange({
            backdropFilter: "blur(4px)",
            webkitBackdropFilter: "blur(4px)",
            background: "#04293a"
        })
        setborderblack({
            'borderColor': 'white',
        })
        setsectioncolor({
            // backgroundColor: "#04293a",
            "background-image": "radial-gradient(#08425d, #04293a, #04293a)",
            // backgroundColor: "rgb(22 35 57 / 94%)",
            // webkitBackdropFilter: "blur(5px) saturate(200%)",
        })
        setyelloToblack({
            color: '#fe6235',
        })
        setyelloToblack2({
            color: 'white',
        })
        setyelloToblack3({
            background: "white"
        })
        setbackgroundYellotoorange({
            // background: 'rgb(43 51 64 / 98%)',
        })
        settruck({
            color: 'rgb(254, 98, 53)',
            'borderColor': 'white'
        })
        setdaynight(true);
    }
    const DayNight = () => {
        if (daynight) {
            console.log("one")
            ChangeTheme(colorOfText);
        }
        else {
            DarkMode();
            console.log("two")
        }
    }
    const [check, setcheck] = useState(true);
    if (check) {
        DarkMode();
        setcheck(false)
    }

    return (
      <>
        {/* making dots */}

        <div className="first" style={blacktowhite} ref={top}>
          {/* Navbar */}
          <nav className="navbar" style={backorange}>
            <div className="letter" style={borderblue}>
              <div className="logotext">A</div>
              <audio src={sound} id="playing"></audio>
            </div>
            <div className="about_section">
              <ul className="list">
                <div className="info about">
                  <div className="number" style={reverse}>
                    01.
                  </div>
                  <div
                    style={coloring}
                    id="one1"
                    className="infoindex align2 "
                    onClick={() => scrollSection(about)}
                  >
                    About
                  </div>
                </div>
                <div className="info">
                  <div className="number" style={reverse}>
                    02.
                  </div>
                  <div
                    style={coloring}
                    id="one2"
                    className="infoindex "
                    onClick={() => scrollSection(work)}
                  >
                    Projects
                  </div>
                </div>
                <div className="info">
                  <div className="number" style={reverse}>
                    03.
                  </div>
                  <div
                    style={coloring}
                    id="one3"
                    className="infoindex"
                    onClick={() => scrollSection(contact)}
                  >
                    Contact
                  </div>
                </div>
                <div className="info">
                  <div className="sun" onClick={() => DayNight("#8636cc")}>
                    {sunmoon}
                  </div>
                </div>
              </ul>
            </div>
          </nav>

          {/* Nav bar end */}

          {/* first page */}
          <div className="section align check" style={sectioncolor}>
            <div className="intro">
              <div className="donts"></div>
              <div className="greetings  display2" style={greetingstyle2}>
                Hello there I am,
              </div>
              <div className="align">
                <div className="align spacing">
                  <div className="name" style={yelloToblack2}>
                    A
                  </div>
                  <div className="name" style={yelloToblack2}>
                    y
                  </div>
                  <div className="name" style={yelloToblack2}>
                    u
                  </div>
                  <div className="name" style={yelloToblack2}>
                    s
                  </div>
                  <div className="name" style={yelloToblack2}>
                    h
                  </div>
                </div>
              </div>
              <div className="align">
                <div className="surname" style={yelloToblack}>
                  D
                </div>
                <div className="surname" style={yelloToblack}>
                  U
                </div>
                <div className="surname" style={yelloToblack}>
                  B
                </div>
                <div className="surname" style={yelloToblack}>
                  E
                </div>
                <div className="surname" style={yelloToblack}>
                  Y
                </div>
              </div>
              <div className="dot" style={greetingstyle}>
                ..................................
                ..................................
              </div>
              <div className="greetings2 newpreeting" style={greetingstyle2}>
                looking for internships
              </div>
              <div className="resume align2">
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  RESUME
                </a>
              </div>
              <div className="margin"></div>
            </div>
          </div>
        </div>

        <div className="first first1" style={blacktowhite} ref={about}>
          <div className="section section2" style={sectioncolor}>
            <div className="info1 align2">
              <br />
              <div className="number1" style={whitetoblack}>
                01.
              </div>
              <div className="align">
                <div className="round1"></div>
                <h1 className="inner_heading" style={greetingstyle}>
                  About Me
                </h1>
                <div className="round2"></div>
              </div>
              <hr style={backblacktowhite} className="line1" />
              <img
                loading="lazy"
                style={{ height: "70px" }}
                src={about1}
                alt=""
              />
              <p className="info_para" style={whitetoblack}>
                Hi, I am Ayush Dubey, a 23 years old self-taught Web developer
                in love with developing websites and learning new ways to
                improve myself.
                <br />
                <br />
                <br></br>I have completed my Bachelor of Science, (B.Sc) from
                Veer Kunwar Singh University, Ara. Currently, a student of{" "}
                <strong className="Mca" style={greetingstyle}>
                  {" "}
                  NIT Bhopal{" "}
                </strong>{" "}
                enrolled in MCA program through NIMCET (AIR - 415).
              </p>
            </div>

            <br />

            <div className="languages" style={greetingstyle}>
              I know the following languages and library -
            </div>

            <ul className="lost2">
              <li style={whitetoblack} className="lik">
                C++
              </li>

              <li style={whitetoblack} className="like">
                HTML5 &nbsp;{" "}
                <i style={greetingstyle} class="fa-brands fa-html5"></i>
              </li>

              <li style={whitetoblack} className="like">
                CSS3&nbsp;&nbsp;
                <i style={greetingstyle} class="fa-brands fa-css3-alt"></i>
              </li>

              <li style={whitetoblack} className="like">
                Javascript &nbsp;
                <i style={greetingstyle} class="fa-brands fa-square-js"></i>
              </li>

              <li style={whitetoblack} className="like">
                React Js&nbsp;&nbsp;
                <i style={greetingstyle} class="fa-brands fa-react"></i>
              </li>

              <li style={whitetoblack} className="like">
                Express Js&nbsp;&nbsp;
                <i style={greetingstyle} class="fa-brands fa-react"></i>
              </li>

              <li style={whitetoblack} className="like">
                Node Js&nbsp;&nbsp;
                <i style={greetingstyle} class="fa-brands fa-react"></i>
              </li>

              <li style={whitetoblack} className="like">
                Mongo DB&nbsp;&nbsp;
                <i style={greetingstyle} class="fa-brands fa-react"></i>
              </li>
            </ul>
            <br />

            <br />
            <br />

            {/* <div className="competitive" style={whitetoblack}>
                        I also do competitive programming using <strong className='Mca' style={greetingstyle}> C++ </strong>
                        I am active on Codechef, Codeforces, Leetcode
                        and have Highest the Rating of 1828 (4 <i style={greetingstyle} class="fa-solid fa-star"></i>) on CODECHEF
                    </div>
                    <br></br> */}
          </div>
        </div>
        {/* First page end */}

        {/* Second page */}
        <div className="first" style={blacktowhite} ref={work}>
          <div className="section section2" style={sectioncolor}>
            <div className="info1 align2 ">
              <br />
              <div className="number1" style={whitetoblack}>
                02.
              </div>
              <div className="align">
                <div className="round1"></div>
                <div className="inner_heading" style={greetingstyle}>
                  Projects
                </div>
                <div className="round2"></div>
              </div>
              <hr style={backblacktowhite} className="line1" />
              <img
                loading="lazy"
                style={{ height: "70px" }}
                src={bulb}
                alt=""
              />
            </div>
            <div className="" style={{ flexDirection: "column" }}>
              <p className="info_para" style={whitetoblack}>
                The following are the projects I have completed so far.
              </p>
              <ul className="lost">
                <li style={whitetoblack} className="like">
                  <a href="https://github.com/dubeyayush09/FoodDeliveryApp">
                    Food Delivery App
                  </a>
                </li>

                <li style={whitetoblack} className="like">
                  <a href="https://github.com/dubeyayush09/Weathrerapp">
                    Real Time Weather Web App
                  </a>
                </li>

                <li style={whitetoblack} className="like">
                  <a href="https://github.com/dubeyayush09/Portfolio">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="align2">
              <div style={greetingstyle}>working link to all below</div>
              <img
                style={{ marginBottom: "15px" }}
                loading="lazy"
                className="actingthinking align2 "
                src={actingthinking}
                alt=""
              />
            </div>
          </div>
        </div>

        {/*  first one */}
        <div className="first" style={blacktowhite}>
          <div className="section" style={sectioncolor}>
            <div className="languages">
              <div className="number1" style={whitetoblack}>
                001.
              </div>
              <div className="bakery" style={greetingstyle}>
                Food Delibery App
              </div>
            </div>
            <p className="info_para" style={whitetoblack}>
              <li style={whitetoblack} className="lik">
                Created a Food Delivery web app using MERN stack
              </li>

              <li style={whitetoblack} className="lik">
                Utilized React-Router-Dom to switch between pages faster.
              </li>

              <li style={whitetoblack} className="lik">
                Utilized Context API as the state manager for global data
              </li>

              <li style={whitetoblack} className="lik">
                Used JWT for authentication
              </li>
            </p>
            <p className="info_para" style={whitetoblack}>
              <div>
                <li>
                  <strong className="string" style={greetingstyle}>
                    React-Router-Dom
                  </strong>
                </li>
                <li>
                  <strong className="string" style={greetingstyle}>
                    Context API
                  </strong>
                </li>
                <li>
                  <strong className="string" style={greetingstyle}>
                    MERN
                  </strong>
                </li>
                <li>
                  <strong className="string" style={greetingstyle}>
                    Local Storage
                  </strong>
                </li>
                <li>
                  <strong className="string" style={greetingstyle}>
                    JWT Tokens
                  </strong>
                </li>
              </div>
            </p>
            <div className="img-display">
              <img
                loading="lazy"
                style={borderGoldToOrange}
                src={hash}
                alt="nikaljao"
                className="hash_images"
              />
            </div>
            <br />
          </div>
        </div>

        {/* third project */}

        <div className="first first1" style={blacktowhite}>
          <div className="section" style={sectioncolor}>
            <div></div>
            <div className="languages">
              <div className="number1" style={whitetoblack}>
                003.
              </div>
              <div className="bakery" style={greetingstyle}>
                Portfolio Website
              </div>
            </div>
            <p className="info_para" style={whitetoblack}>
              I created my{" "}
              <strong style={greetingstyle} className="string">
                Portfolio Website{" "}
              </strong>{" "}
              using React JS to showcase the work I have completed so far.
              <br />
            </p>
            <div className="img-display">
              <img
                loading="lazy"
                style={borderGoldToOrange}
                src={ank}
                alt="nikaljao"
                className="hash_images"
              />
            </div>

            <br />
          </div>
        </div>

        <div className="first first1" style={blacktowhite}>
          <div className="section" style={sectioncolor}>
            <div></div>
            <div className="languages">
              <div className="number1" style={whitetoblack}>
                003.
              </div>
              <div className="bakery" style={greetingstyle}>
                Weather Web App{" "}
              </div>
            </div>
            <p className="info_para" style={whitetoblack}>
              <li style={whitetoblack} className="lik">
                Created a project to display real-time weather reports of
                different cities.
              </li>

              <li style={whitetoblack} className="lik">
                Utilized async await to handle asynchronous API data fetching
                and showing a loader while the data is being fetched{" "}
              </li>

              <li style={whitetoblack} className="lik">
                Used Local Storage to save previous search records and Session
                Storage for refreshed data for every session.
              </li>

              <li style={whitetoblack} className="lik">
                Implemented Speech Synthesis API for voice-based place search.
              </li>

              <li style={whitetoblack} className="lik">
                Also used CSS Flex Box and Grid .
              </li>
            </p>
            <p className="info_para" style={whitetoblack}>
              <div>
                <li>
                  <strong className="string" style={greetingstyle}>
                    Async Await{" "}
                  </strong>
                </li>
                <li>
                  <strong className="string" style={greetingstyle}>
                    Local Storage
                  </strong>
                </li>
                <li>
                  <strong className="string" style={greetingstyle}>
                    Speech Synthesis
                  </strong>
                </li>
                <li>
                  <strong className="string" style={greetingstyle}>
                    Flex Box & Grid
                  </strong>
                </li>
                <li>
                  <strong className="string" style={greetingstyle}>
                    Vanilla JS
                  </strong>
                </li>
              </div>
            </p>
            <div className="img-display">
              <img
                loading="lazy"
                style={borderGoldToOrange}
                src={weather}
                alt="nikaljao"
                className="hash_images"
              />
            </div>
            <div className="links">
              <a
                className="github"
                href="https://weatherappfetchapi.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={greetingstyle}
              >
                WEATHERAPI.NETLIFY.APP
              </a>
            </div>
            <br />
          </div>
        </div>

        {/* Todo : contact form */}
        <div className="first" ref={contact} style={blacktowhite}>
          <div className="section" style={sectioncolor}>
            <div className="info2 align2">
              <div className="number1" style={whitetoblack}>
                03.
              </div>
              <div className="align">
                <div className="round1"></div>
                <div className="inner_heading" style={greetingstyle}>
                  Contact
                </div>
                <div className="round2"></div>
              </div>
              <hr style={backblacktowhite} className="line1" />
              <img
                loading="lazy"
                style={{ height: "70px" }}
                src={contacts}
                alt=""
              />
            </div>

            <div className="contact-info">
              <p className="info_para" style={whitetoblack}>
                I am actively looking for internships. I am also open to code
                along, I believe in sharing knowledge which often yields great
                projects. <br /> <br />
                If you do so, I will be able to add some more worthy projects
                here, so contact me{" "}
                <strong className="string" style={greetingstyle}>
                  ASAP!! 👀
                </strong>
              </p>
              {/* <video autoPlay loop muted src={messaging} type="video/gif" id='video1' /> */}
              {/* <img loading="lazy" className='newGif' src={messaging} alt="loading..." /> */}
            </div>

            {/*  form to contact */}
            <div className="form">
              <form action="" style={borderblack} className="contact_form">
                <div className="heading_contact" style={greetingstyle}>
                  Deliver you message
                </div>
                <input
                  type="text"
                  id="newid1"
                  className="info_contact "
                  placeholder="Your Name"
                  required
                ></input>
                <input
                  type="text"
                  id="newid2"
                  className="info_contact "
                  placeholder="Your Email"
                  required
                ></input>
                <textarea
                  type="text"
                  id="newid3"
                  className="info_contact "
                  name=""
                  cols="27"
                  rows="10"
                  placeholder="Your message"
                  required
                ></textarea>
                <div className="shake">
                  <div
                    type="button"
                    id="delivery"
                    className="submit"
                    onClick={SendtoWhatspp}
                  >
                    <i class="fa-solid fa-truck" style={truck}></i>
                  </div>
                </div>
              </form>
            </div>
            <div className="social">
              <div className="alternates" style={whitetoblack}>
                Or contact me through
              </div>
              <div className="align" style={{ "font-size": "22px" }}>
                <a href="https://github.com/dubeyayush09">
                  {" "}
                  <i
                    style={greetingstyle}
                    class="fa-brands fa-github social_icon"
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-dubey-161841195"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    style={greetingstyle}
                    class="fa-brands fa-linkedin social_icon"
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/_ayushhdubey/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    style={greetingstyle}
                    class="fa-brands fa-instagram social_icon"
                  ></i>
                </a>
                <a href="mailto:dubeyayush09@gmail.com">
                  <i
                    style={greetingstyle}
                    class="fa-solid fa-envelope social_icon"
                  ></i>
                </a>
              </div>
            </div>
            <br />
            <div className="acknoledgement" style={borderGoldToOrange}>
              <br />
              <div className="MyName" style={whitetoblack}>
                Designed By <strong style={greetingstyle}>Ayush Dubey</strong>
              </div>
              <br />
              {/* <div className='year' style={greetingstyle} >
                            2022
                        </div> */}
              <div className="MyName" style={whitetoblack}>
                Deployed on <strong style={greetingstyle}>Github</strong>
              </div>
              <br />
              <div className="year" style={whitetoblack}>
                Domain from <strong style={greetingstyle}>Hostinger</strong>
              </div>
              <div className="year" style={whitetoblack}>
                <br />
                Hosted on <strong style={greetingstyle}>Netlify</strong>
              </div>
              <div style={whitetoblack}>............................</div>
            </div>
            <br />
          </div>
        </div>
        <div></div>
        {/* Third page end */}

        <div
          className="movetotop"
          onClick={() => scrollSection(top)}
          style={backgroundYellotoorange}
        >
          <i class="fa-solid fa-arrow-up"></i>
        </div>

        <div className="align2 socialMedia">
          <div className="verticalLine6" style={yelloToblack3}>
            {" "}
          </div>
          <div className="circle1" style={{ yelloToblack2 }}>
            {" "}
          </div>
          <a
            aria-label="Link to GitHub"
            href="https://github.com/dubeyayush09"
            target="_blank"
            without
            rel="noreferrer"
          >
            <i class="socail2 fa-brands fa-github social_icon socialIcon2 "></i>
          </a>

          <div className="verticalLine2" style={yelloToblack3}>
            {" "}
          </div>
          <a
            aria-label="Link to LinkedIn"
            href="https://www.linkedin.com/in/ayush-dubey-161841195"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands socail3 fa-linkedin social_icon socialIcon2"></i>
          </a>

          <div className="verticalLine3" style={yelloToblack3}>
            {" "}
          </div>
          <a
            aria-label="Link to Instagram"
            href="https://www.instagram.com/_ayushhdubey/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands socail4 fa-instagram social_icon socialIcon2"></i>
          </a>

          <div className="verticalLine4" style={yelloToblack3}>
            {" "}
          </div>
          <a
            aria-label="Link to Gmail"
            href="mailto:dubeyayush09@gmail.com"
            target="_blank"
            without
            rel="noreferrer"
          >
            <i class="fa-solid socail5 fa-envelope social_icon socialIcon2"></i>
          </a>

          <div className="verticalLine5" style={yelloToblack3}>
            {" "}
          </div>
          <div className="circle2"> </div>
        </div>
      </>
    );
}