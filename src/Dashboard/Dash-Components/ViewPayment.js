import React, { useEffect } from "react";
import axios from 'axios'
import upload from "../../image/upload.svg";
import ROUTE from "../../route.json";
import { useNavigate, Link } from 'react-router-dom';
import Loading from "../../components/Loading";

function ViewPayment(props) {
  //console.log(props.data);

  const [image, setImage] = React.useState([]);
  const [imageURL, setImageURL] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [requestId, setRequestId] = React.useState(props.request.request_id);
   React.useEffect(() => {
    
    if (image.length < 1) return;
    const newImageurl = [];
    image.forEach((img) => newImageurl.push(URL.createObjectURL(img)));
    setImageURL(newImageurl);
    console.log(imageURL[0]);
  }, [image]);

  function ImageChange(e) { 
    setImage([...e.target.files]);
    uploadPayment(e.target.files[0])
  }

  const uploadPayment=(file)=>{
     var imgFormData = new FormData();
    imgFormData.append('receipt', file);
     axios
        .putForm(`${ROUTE.SITE_URL}/resources/${requestId}/bank-transfer`, imgFormData)
        .then((res) => {
          console.log(res.data);
          props.refresh()
          props.closeModal()
          alert("Payment Uploaded")
         
        })
        .catch((err) => {
          console.log(err);
        alert("Error uploading payment")
        });
   }

   const approvePayment = () => {
    setIsLoading(true)
   
      let data = { "request_id":requestId}
      axios.post(ROUTE.REQUEST + `/confirm-payment`, data)
        .then((res) => {
          console.log(res);
          setIsLoading(false)
          props.refresh()
          alert(res.data.msg)
          props.closeModal()
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false)
          alert("Error approving payment")
        })
   
  }

  return (
    <div className='overlay position-fixed d-flex align-self-center'>
      <div className="request-modal">
        <i className="bi bi-x-lg close-icon" onClick={() => props.closeModal()}></i>
        <h1 className="text-center req_h1 mt-2">Payment Details </h1>
         <hr />
        <div className='container dash-modal-container'>
          <div className="row   ">
            <div className="col-md-6  rounded bg-white p-3 reqNext ">
              <div className="  border-2 ">
                <div className="d-flex justify-content-between ">
                  <p className="req_pro">Amount</p><br />
                  <p className="req_pro_next">
                     ₦{props.request.amount.toLocaleString()}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Service Fee</p>
                  <p className="req_pro_next">
                   ₦{props.request.service_fee.toLocaleString()}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="req_pro w900">Tax</p>
                  <p className="req_pro_next">
                   ₦{(props.request.amount * 0.075).toLocaleString()  }
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="req_pro w900"><b>Total</b></p>
                  <p className="req_pro_next">
                   ₦{(props.request.amount+props.request.service_fee+(props.request.amount * 0.075)).toLocaleString()}
                  </p>
                </div>
              </div>


            </div>
            <div className="col-md-6 rounded bg-white p-3 reqNext ">
              <div className="border-2">
                <div className="dotted d-flex flex-column justify-content-center">
                  <label className="filebutton align-self-center">
                    <img src={upload} alt="imageUpload" />
                    {imageURL.map((image) => (
                      <img
                        src={image}
                        className="image_prview"
                        alt="recipt"
                      />
                    ))}
                    <span>
                      <input type="file" id="myfile" name="myfile" onChange={ImageChange} />
                    </span>
                  </label>
                  <span className="text-center">upload proof of payment</span>
                </div>
                <small>Click the link below to view proof of payment</small> <br/><br/>
                <a className="text-info" href={props.request.receipt} target="_blank" >  <u>View Payment</u> </a>
              </div>
            </div>
          </div>
          <hr/>
        <div className="text-center m-4">
        <button className="btn btn-akeru w900 mt-4" onClick={()=>approvePayment()}> <Loading loading={isLoading} false_text={"Approve Payment"} /></button>
        </div>

        </div>

      </div>
    </div>
  );
}
export default ViewPayment;
