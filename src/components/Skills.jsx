import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mail1 from '../assets/img/mail.jpg';


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={mail1} alt="" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={mail1} alt="" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={mail1} alt="" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={mail1} alt="" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={mail1} alt="" />
    </section>

        // <section className="skill" id="skills">
        //     <div className='container'>
        //         <h1>Skills</h1>
        //         <div>
        //             <h2>Programming Languages</h2>
        //             <ul>
        //                 <li>C++</li>
        //                 <li>Python</li>
        //                 <li>JavaScript</li>
        //             </ul>
        //         </div>
        //         <div>
        //             <h2>Frontend</h2>
        //             <ul>
        //                 <li>HTML</li>
        //                 <li>CSS</li>
        //                 <li>React</li>
        //             </ul>
        //         </div>
        //         <div>
        //             <h2>Backend</h2>
        //             <ul>
        //                 <li>Node.js</li>
        //                 <li>Express</li>
        //                 <li>Flask</li>
        //             </ul>
        //         </div>
        //         <div>
        //             <h2>Database</h2>
        //             <ul>
        //                 <li>MySQL</li>
        //                 <li>MongoDB</li>
        //             </ul>
        //         </div>
        //     </div>
        // </section>
    )
}