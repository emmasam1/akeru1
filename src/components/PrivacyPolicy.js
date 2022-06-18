import React from "react";
import google from "../image/appStore.png";
import apple from "../image/apple.png";
import home from "../image/home.png";
import ic_download from "../image/ic_download.png";
import ic_list from "../image/ic_list.png";
import user from "../image/hiw_user.png";
import truck from "../image/hiw-truck.png";
import Ongoing from "../image/ongoingtrip.png";
import incoming from "../image/incoming.png";
import Ellipse from "../image/Ellipse.png";
import second from "../image/second.png";
import home2 from "../image/home2.png";
import support from "../image/Group.png";
import arrow2 from "../image/arrow2.png";
import notification from "../image/notification.png";
import pencil from "../image/pencil.png";
import hand from "../image/hand.png";
import lprice from "../image/low-price.png";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <div className="  mt-3 mobile-sm-width">
                <div className="algin-width">
                    <div className="container px-3 py-3">
                        <br />
                        <br />
                        <h1 className="text-left how_it_works_title fs-1">Privacy Policy</h1>

                        <br />

                        <p>Protecting your private information is our priority. This Statement of Privacy applies to the Akeru.ng and Akeru Technologies Limited and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Akeru.ng and Akeru Technologies Limited <br /> <br />

                            The Akeru website is an information and haulage request site. By using the Akeru.ng (the website), you consent to the data practices described in this statement.</p>
                        <br />
                        <h5 className="w900 ">Collection of Personal Information</h5>
                        <p>Akeru.ng may collect personally identifiable information, such as your name, address, telephone number, email address. If you purchase Akeru’s products and services, we collect bank information, billing and credit card information. This information is used to complete the purchase transaction. Akeru.ng may also collect anonymous demographic information which is not unique to you, such as your age, gender, associated addresses, company name, preferred routes, and commuting frequency. We may gather additional personal or non-personal information in the future.
                            <br /> <br />
                            Information about your computer hardware and software may be automatically collected by Akeru.ng. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Akeru’s website.
                            <br /> <br />
                            Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Akeru.ng public message boards, for example social medias, this information may be collected and used by others.
                            <br /> <br />
                            Akeru.ng encourages you to review the privacy statements of websites you choose to link to from Akeru.ng (incase there is any) so that you can understand how those websites collect, use and share your information. Akeru.ng is not responsible for the privacy statements or other content on websites outside of the Akeru’s website.</p>

                        <br /><br /> 
                        <h5 className="w900 ">Use of Personal Information</h5>
                        <p>Akeru.ng collects and uses your personal information to operate and provide the services you have requested on its website(s).<br /> <br />

                            Akeru.ng may also use personally identifiable information to notify you of other products or services available from Akeru.ng and its affiliates. Akeru may also contact you via surveys to gather information about your thoughts on current services or potential new services.
                            <br /> <br />
                            Akeru.ng may contact you on behalf of external business partners from time to time about a specific offering that may be of interest to you. In certain circumstances, the third party does not receive your unique personally identifying information (email, name, address, phone number). Akeru.ng may share your information with trusted partners to assist with statistical analysis, send you email or postal mail, provide customer service, or arrange for deliveries. All such third parties are restricted from using your personal information for any purpose other than providing these services to Akeru.ng, and they are expected to keep your information confidential.
                            <br /> <br />
                            Akeru.ng may keep track of which websites and pages our users visit to see which Akeru.ng services are the most popular. This information is used to provide tailored content and advertising on Akeru.ng to customers whose behaviour suggests that they are interested in a certain subject area, as well as to improve Akeru's user experience.
                            <br /> <br />
                            Akeru.ng will only disclose your personal information without notice if compelled by law or if we have a good faith belief that it is necessary to</p>

                            <br /> <br />
                        <h5 className="w900 ">Security of Personal Information</h5>
                        <p>Akeru.ng uses modern encryption methods to secure your personal information from unauthorized access, use or disclosure.<br />

                            When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
                        </p>
                        <br /> <br />
                        <h5 className="w900 ">Opt-Out or Unsubscribe</h5>
                        <p>We value your privacy and provide you with the option to opt-out of getting certain notifications. By emailing us at Akeru.ng, users can opt out of receiving any or all messages from Akeru.
                        </p>
                        <br /> <br />
                        <h5 className="w900 ">Changes to this Statement</h5>
                        <p>Akeru.ng may change this Statement of Privacy from time to time to reflect company and consumer input. Akeru.ng invites you to review this Statement on a regular basis to stay up to speed on how Akeru.ng is protecting your information.
                        </p>
                        <br /> <br />
                        <h5 className="w900">Contact Information</h5>
                        <p>Your questions or comments about our Privacy Policy are welcome at Akeru.ng. If you believe Akeru Technologies Limited has violated this Statement, please contact Akeru at the following address:
                        </p>
                        <br />
                        <small>Block 5, 41 Road, Festac, Lagos<br />
                            Help: support@akeru.ng<br />
                            Phone: +234(0)836032215<br /><br />

                            Last updated June 16th, 2022.</small><br /><br />

                        <small><b className="w900">Akeru.ng will never share your personal info with third parties.</b></small>
                    </div>

                </div>
            </div>


            <Footer />
        </>
    );
}

export default PrivacyPolicy;
