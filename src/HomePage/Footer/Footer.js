import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import FacebookIcon from '../Images/FacebookIcon.svg';
import TwitterIcon from '../Images/TwitterIcon.svg';
import InstagramIcon from '../Images/InstagramIcon.svg';
import { Figure } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                <MDBFooter color="blue" className="font-small pt-4 mt-4">
                    <MDBContainer fluid="lg" className="text-left text-md-left">
                        <MDBRow>
                            <MDBCol>
                                <h5 className="title">Calvary Church (maybe with logo)</h5>
                                <p>
                                    I'm thinking a list of service times, or a short bio.
                                </p>
                            </MDBCol>

                            <MDBCol>
                                <h5 className="title">Contact Us</h5>
                                <p>(562)592-1800</p>
                                <p>16450 Pacific Coast Highway, Suite 100</p>
                                <p>info@ccoth.com</p>
                            </MDBCol>

                            <MDBCol>
                                <h5 className="title">Follow Us</h5>
                                <Figure>
                                    <a href="https://www.facebook.com">
                                        <Figure.Image
                                            width={50}
                                            height={50}
                                            padding-left={10}
                                            alt="facebook icon"
                                            src={FacebookIcon}
                                            className="hover-zoom"
                                        ></Figure.Image>
                                    </a>

                                    <a href="https://www.twitter.com">
                                        <Figure.Image
                                            width={50}
                                            height={50}
                                            alt="facebook icon"
                                            src={TwitterIcon}
                                            className="hover-zoom"
                                        ></Figure.Image>
                                    </a>

                                    <a href="https://www.instagram.com">
                                        <Figure.Image
                                            width={50}
                                            height={50}
                                            alt="facebook icon"
                                            src={InstagramIcon}
                                            className="hover-zoom"
                                        ></Figure.Image>
                                    </a>
                                </Figure>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    {/* <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Calvary Church of the Harbour </a>
                        </MDBContainer>
                    </div> */}
                </MDBFooter>
            </div>
        );
    }
}

export default Footer;