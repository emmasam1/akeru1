import React from "react";
import { Link, Outlet ,useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Underconstruction from './Underconstruction';
function Proflie() {
  const [image, setImage] = React.useState([]);
  const [imageURL, setImageURL] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(localStorage.getItem('user')==null){
      navigate('/signin');
    }

    if (image.lenght < 1) return;
    const newImageurl = [];
    image.forEach((img) => newImageurl.push(URL.createObjectURL(img)));
    setImageURL(newImageurl);
  }, [image]);

  const [ show, setShow ] = React.useState(false)

  function ImageChange(e) {
    setImage([...e.target.files]);
  }

  const [company, setCompany] = React.useState('XYZ Limited')
  const [email, setEmail] = React.useState('james@xyz.com')
  const [phone, setPhone] = React.useState('0708822939929')

  const [isReadonly, setIsReadonly] = React.useState(true);

// text =()=>{
//     setIsReadonly(prevState => !prevState)}
//   }

  const handleClick = () => {
    setIsReadonly(false)
    setEmail('')
    setCompany('')
    setPhone('')
    setShow(true)
  }

  function handleCompany(e) {
    setCompany(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handlePhone(e){
    setPhone(e.target.value);
  }

  const handleSave = () => {
    setIsReadonly(true)
    setShow(false)
  }

  return (
    <>
    <Navbar />
    <div className="container-fluid background test-height backgroundColor overflow-auto position-relative pro-top">
      <div className="main_width rounded proDivWhite test-height w700">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active border-0"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              My profile
            </button>
            <button
              className="nav-link border-0 position-relative btn-pro200"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Trips
            </button>
            <button
              className="nav-link border-0 position-relative btn-pro400"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Support
            </button>
          </div>
        </nav>
        <div className="tab-content p-4" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="rounded-circle profile-img-holder">
              {imageURL.map((user) => (
                <img
                  src={user}
                  className="rounded-circle image-div m-auto position-relative"
                  alt="user-icon"
                />
              ))}
            </div>
            <label
              htmlFor="exampleInputEmail1"
              className="form-label colored-lable w900"
            >
              Change photo
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={ImageChange}
              className="file-input"
            />
            <div className="mt-4 profile">
              <h2 className="">Company name</h2>
              <div className="profile-text-holder">
                <input className="profile-text-holder border-0 outline-0 input-color" readOnly={isReadonly} value={company} type="text" onChange={handleCompany}/>
                {/* <span className=" p-1">XYZ Limited</span> */}
              </div>
            </div>

            <div className="mt-4 profile">
              <h2 className="">Email address</h2>
              <div className="profile-text-holder">
              <input className="profile-text-holder border-0 outline-0 input-color" readOnly={isReadonly} value={email} type="emmail" onChange={handleEmail}/>
                {/* <span className=" p-1">james@xyz.com</span> */}
              </div>
            </div>

            <div className="mt-4 profile">
              <h2 className="">Phone number</h2>
              <div className="profile-text-holder">
              <input className="profile-text-holder border-0 outline-0 input-color" readOnly={isReadonly} value={phone} type="text" onChange={handlePhone}/>
                {/* <span className=" p-1">0708822939929</span> */}
              </div>
            </div>

            <button className="rounded border-0 pro-btn position-relative" onClick={() => handleClick() }>
              Edit
            </button>

            { show ? <div>
              <button className="btn edit_btn w900" onClick={handleSave}>Save changes</button>
            </div> : null }
          </div>

          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="d-flex flex-sm-column justify-content-between flex-md-row flex-lg-row flex-xl-row">
            <Link to="/profile/pending" className="link-dark text-decoration-none">
              <div className="on-going pt-3">
                <div className="d-flex justify-content-between p-3">
                  <h2 className="w900">0</h2>
                  <div className="line-h">
                    <span>
                      Pending
                      <br /> order
                    </span>
                  </div>
                </div>
              </div>
              </Link>
              <Link to="/profile/ongoing" className="link-dark text-decoration-none">
              <div className="pending pt-3">
                <div className="d-flex justify-content-between p-3">
                  <h2 className="w900">1</h2>
                  <div className="line-h">
                    <span>
                      Ongoing
                      <br /> trip
                    </span>
                  </div>
                </div>
              </div>
              </Link>
              
              <Link to="/profile/complete" className="link-dark text-decoration-none">
              <div className="completed pt-3">
                <div className=" d-flex justify-content-between p-3">
                  <h2 className="w900">320</h2>
                  <div className="line-h">
                    <span>
                      completed
                      <br /> order
                    </span>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="container mt-5">
              
             
              <Outlet />
            </div>
          </div>
          
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="">
                <Underconstruction />
              </div>
             
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Proflie;
