import React, { Component } from 'react'; 
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import FacebookIcon from '../Images/FacebookIcon.svg';
import TwitterIcon from '../Images/TwitterIcon.svg'; 
import InstagramIcon from '../Images/InstagramIcon.svg'; 
import { Figure } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <MDBFooter color="blue" className="font-small pt-4 mt-4 bg-primary">
                    <MDBContainer fluid className="text-left text-md-left text-white">
                        <MDBRow className="d-flex justify-content-between">
                            <MDBCol className="text-left">
                                <h3 className="title" style={{ color: "#ffe066"}}>Calvary Church of the Harbour</h3>
                                <h5 className="text-left" style={{ color: "#ffe066"}}>
                                    Service Times: 
                                </h5>
                                <ul className="text-left" style={{ color: "#ffe066"}}>
                                    <li>Sundays at 10:45 A.M.</li>
                                    <li>Tuesdays at 7:00 P.M.</li>
                                    <li>Thursdays at 7:00 P.M.</li>
                                </ul>
                            </MDBCol>

                            <MDBCol className="text-center">
                                <h3 className="title" style={{ color: "#ffe066"}}>Contact Us</h3>
                                <p style={{ color: "#ffe066"}}>(562) 592-1800</p>
                                <p style={{ color: "#ffe066"}}>16450 Pacific Coast Highway, Suite 100</p>
                                <p style={{ color: "#ffe066"}}>info@ccoth.com</p>
                            </MDBCol>

                            <MDBCol className="text-center">
                                <h3 className="title" style={{ color: "#ffe066"}}>Follow Us</h3>
                                <Figure className="d-grid gap-3">
                                    <a href="https://www.facebook.com/CCOTH/">
                                        <Figure.Image
                                            width={60}
                                            height={60}
                                            alt="facebook icon"
                                            src={FacebookIcon}
                                            className="hover-zoom p-2"
                                        ></Figure.Image>
                                    </a>
                                    <a href="https://twitter.com/ccotharbour?lang=en">
                                        <Figure.Image
                                            width={60}
                                            height={60}
                                            alt="twitter icon"
                                            src={TwitterIcon}
                                            className="hover-zoom p-2"
                                        ></Figure.Image>
                                    </a>

                                    <a href="https://www.instagram.com/calvarychapeloftheharbour/?hl=en">
                                        <Figure.Image
                                            width={60}
                                            height={60}
                                            alt="instagram icon"
                                            src={InstagramIcon}
                                            className="hover-zoom p-2"
                                        ></Figure.Image>
                                    </a>
                                </Figure>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
      
                    {/* <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid="lg">
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Calvary Church of the Harbour </a>
                        </MDBContainer>
                    </div> */}
                </MDBFooter>
            </div>
        );
    }
}

export default Footer; 