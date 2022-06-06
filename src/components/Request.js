import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'
function Request() {
    return ( 
        <>
        <Navbar />
        <div className="container-fliud d-flex justify-content-around backgroundColor hero_style login_div_height">
        <div className="triangle"></div>
        <div className="triangle rotate"></div>
        <div className="triangle"></div>
        <div className="triangle rotate"></div>

        <div className="card_form_holder p-3 position-absolute mt-4">
          <h1 className="text-center">Request a truck</h1>

          <form>
          <input type="text" placeholder="Pick up:" className="input-home"/>
                <input type="text" placeholder="To:" className="input-home"/>
                <input type="text" placeholder="When:" className="input-home"/>

                <select className="select">
                  <option>Type</option>
                </select>
                <select className="select">
                  <option>Weight in Tons</option>
                </select>

                <div className="d-flex justify-content-center btn-helper">
                <Link to="/detail" className="milestone_link w100 link-dark w900">Request quote</Link>
                </div>
                {/* <button className="my_btn">Request quote</button> */}
          </form>
        </div>
      </div>
      <Footer />
        </>
     );
}

export default Request;