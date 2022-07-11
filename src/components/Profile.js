import React from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from "axios";
import ROUTE from "../route.json";
import Loading from "./Loading";
import Underconstruction from './Underconstruction';

function Proflie() {
  const [image, setImage] = React.useState([]);
  const [imageURL, setImageURL] = React.useState([]);
  const [selectedImage, setselectedImage] = React.useState("");
  const [company, setCompany] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [fullname, setFullname] = React.useState("")
  const [profileImg, setProfileImg] = React.useState("")
  const [oldPassword, setOldPassword] = React.useState("")
  const [newPassword, setNewPassword] = React.useState("")
  const [confrimPassword, setConfrimPassword] = React.useState("")
  const [passError, setPassError] = React.useState("")
  const [userId, setUserId] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false);
  const [clientSummary, setClientSummary] = React.useState({});
  const [isLoadingPass, setIsLoadingPass] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('user') == null) {
      navigate('/signin');
    }

    if (image.length < 1) return;
    const newImageurl = [];
    image.forEach((img) => newImageurl.push(URL.createObjectURL(img)));
    setImageURL(newImageurl);

  }, [image]);

  React.useEffect(() => {
    const userlocal = JSON.parse(localStorage.getItem('user'))
    axios
      .get(`${ROUTE.CLIENTS}/${userlocal.user_id}`)
      .then((res) => {
        setUserId(res.data.user_id);
        setCompany(res.data.company)
        setEmail(res.data.email)
        setPhone(res.data.phone)
        setFullname(res.data.fullname)
        setProfileImg(res.data.profile)
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .get(`${ROUTE.CLIENTS}/${userlocal.user_id}/summary`)
      .then((res) => {
        setClientSummary(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const [show, setShow] = React.useState(false)

  function ImageChange(e) {
    setImage([...e.target.files]);
    setselectedImage(e.target.files[0])
    
  }


  const [isReadonly, setIsReadonly] = React.useState(true);

  // text =()=>{
  //     setIsReadonly(prevState => !prevState)}
  //   }

  const handleClick = () => {
    setIsReadonly(false)

    setShow(true)
  }

  function handleCompany(e) {
    setCompany(e.target.value);
  }

  function handleFullname(e) {
    setFullname(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleOldPass(e) {
    setOldPassword(e.target.value);
  }

  function handleNewPass(e) {
    setNewPassword(e.target.value);
  }

  function handleConPass(e) {
    setConfrimPassword(e.target.value);

    if(e.target.value!==newPassword){
      setPassError("Password does not match!")
    }else{
      setPassError("")
    }
  }

  const handleLogout = () => {
    if(window.confirm("Are you sure you want to logout??")){
     window.localStorage.removeItem("user");
     if(localStorage.getItem("personate") && localStorage.getItem("admin")){
      navigate('/admin-dashboard/customers');
     }else{
      navigate('/');
     }
     
     window.location.reload(); 
    }
   }

  const handleSave = async() => {


    const userlocal = JSON.parse(localStorage.getItem('user'))
    var bodyFormData = new FormData();
    bodyFormData.append('email', email);
    bodyFormData.append('fullname', fullname);
    bodyFormData.append('company', company);
    bodyFormData.append('phone', phone);
    setIsLoading(true)
     axios
      .putForm(`${ROUTE.CLIENTS}/${userlocal.user_id}`, bodyFormData)
      .then((res) => {
        console.log(res.data);
        
        if(imageURL.length>0){
          uploadProfilePhoto(userlocal.user_id)
        }else{
          alert("Profile Info updated")
          setIsReadonly(true)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });      
  }

 const uploadProfilePhoto=(id)=>{
  var imgFormData = new FormData();
  imgFormData.append('profile', selectedImage);

   axios
      .putForm(`${ROUTE.SITE_URL}/resources/${id}/client`, imgFormData)
      .then((res) => {
        console.log(res.data);
        alert("Profile Info updated")
        setIsReadonly(true)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
 }

  const handleSavePassword = () => {

    if(newPassword!=""&&oldPassword!=""){
      let data={
        "email":email,
        "new_passwd":newPassword,
        "old_passwd":oldPassword
    }
    console.log(data);
    setIsLoadingPass(true)
      axios
        .post(`${ROUTE.CHANGEPASSWORD}`, data)
        .then((res) => {
          alert(res.data.msg)
          setIsLoadingPass(false)
        })
        .catch((err) => {
          setIsLoadingPass(false)
          console.log(err);
        });
    }else{
      setPassError("Please enter your old and new prefered password")
    }
    
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid background test-height backgroundColor overflow-auto position-relative pro-top">
        <div className="main_width rounded proDivWhite test-height w700">
        <div className="p-3 mt-5"><Link to="/new-request" className="btn btn-outline-dark btn-sm profile_btn_request_mobile">New Request <i class="bi bi-truck"></i></Link></div>
          <nav className="d-flex justify-content-between">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active border-0"
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
                className=" nav-link border-0 position-relative btn-pro200"
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
            <div className="p-3"><a href="/new-request" className="btn btn-outline-dark btn-sm profile_btn_request">New Request <i class="bi bi-truck"></i></a></div>
          </nav>
          <div className="tab-content p-4" id="nav-tabContent">

            <div
              className="tab-pane fade active show"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="row">
                <Link to="/profile/pending" className="link-dark text-decoration-none col-md-4">
                  <div className={`pt-3  ${window.location.pathname == "/profile/pending" ? "on-going" : "pending"}`}>
                    <div className="d-flex justify-content-between p-3">
                      <h2 className="w900">{clientSummary.pending}</h2>
                      <div className="line-h">
                        <span>
                          Pending
                          <br /> Orders
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/profile/ongoing" className="link-dark text-decoration-none col-md-4 ">
                  <div className={`pt-3  ${window.location.pathname == "/profile/ongoing" ? "on-going" : "pending"}`}>
                    <div className="d-flex justify-content-between p-3">
                      <h2 className="w900">{clientSummary.ongoing}</h2>
                      <div className="line-h">
                        <span>
                          Ongoing
                          <br /> Trip
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/profile/complete" className="link-dark text-decoration-none col-md-4">
                  <div className={`pt-3  ${window.location.pathname == "/profile/complete" ? "on-going" : "pending"}`}>
                    <div className=" d-flex justify-content-between p-3">
                      <h2 className="w900">{clientSummary.completed}</h2>
                      <div className="line-h">
                        <span>
                          Completed
                          <br /> Order
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
              className="tab-pane fade  "
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                    <h4>Profile Info</h4>
                      <hr />
                    <div className="rounded-circle profile-img-holder">
                    {imageURL.length==0?
                     <img
                     src={profileImg}
                     className="rounded-circle image-div m-auto position-relative"
                     alt="user-icon"
                   />:
                    
                    imageURL.map((user) => (
                      <img
                        src={user}
                        className="rounded-circle image-div m-auto position-relative"
                        alt="user-icon"
                      />
                    )) }
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
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mt-4 profile">
                        <h2 className="">Company name</h2>
                        <div className="profile-text-holder">
                          <input className="profile-text-holder border-0 outline-0 input-color"  value={company} type="text" onChange={handleCompany} />
                          {/* <span className=" p-1">XYZ Limited</span> */}
                        </div>
                      </div>


                    </div>
                    <div className="col-md-6">
                      <div className="mt-4 profile">
                        <h2 className="">Full name</h2>
                        <div className="profile-text-holder">
                          <input className="profile-text-holder border-0 outline-0 input-color" value={fullname} type="text" onChange={handleFullname} />
                          {/* <span className=" p-1">XYZ Limited</span> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mt-4 profile">
                        <h2 className="">Email address</h2>
                        <div className="profile-text-holder">
                          <input className="profile-text-holder border-0 outline-0 input-color" readOnly={true}  value={email} type="email" onChange={handleEmail} />
                          {/* <span className=" p-1">james@xyz.com</span> */}
                        </div>
                      </div>


                    </div>
                    <div className="col-md-6">
                      <div className="mt-4 profile">
                        <h2 className="">Phone number</h2>
                        <div className="profile-text-holder">
                          <input className="profile-text-holder border-0 outline-0 input-color"  value={phone} type="number" onChange={handlePhone} />
                          {/* <span className=" p-1">0708822939929</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                 <br/>
                 <button className="btn btn-akeru w900" onClick={handleSave}> <Loading loading={isLoading} false_text={"Save changes"} /></button>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-body">
                      <h4>Change Password</h4>
                      <hr />
                      
                      <div className="mt-4 profile">
                        <h2 className="">Old Password</h2>
                        <div className="profile-text-holder">
                          <input className="profile-text-holder border-0 outline-0 input-color"  value={oldPassword} type="password" onChange={handleOldPass} />
                          {/* <span className=" p-1">XYZ Limited</span> */}
                        </div>
                      </div>

                      <div className="mt-4 profile">
                        <h2 className="">New Password</h2>
                        <div className="profile-text-holder">
                          <input className="profile-text-holder border-0 outline-0 input-color"  value={newPassword} type="password" onChange={handleNewPass} />
                          {/* <span className=" p-1">james@xyz.com</span> */}
                        </div>
                      </div>

                      <div className="mt-4 profile">
                        <h2 className="">Confirm Password</h2>
                        <div className="profile-text-holder">
                          <input className="profile-text-holder border-0 outline-0 input-color"  value={confrimPassword} type="password" onChange={handleConPass} />
                          <span className=" p-1 text-danger">{passError}</span>
                        </div>
                      </div>
                      <br/><br/>
                      <div className="container">
                        <div className="row">
                          <div className="col">
                          <button className="btn btn-akeru w900" onClick={handleSavePassword}> <Loading loading={isLoadingPass} false_text={"Save Password"} /></button>
                          </div>
                          <div className="col-auto">
                          <button className="btn btn-akeru  btn-akeru-danger  w900 " onClick={handleLogout} > Logout <i class="bi bi-box-arrow-right"></i></button>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
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
