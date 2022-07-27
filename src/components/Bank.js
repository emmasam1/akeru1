import React from "react";
import upload from "../image/upload.svg";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import ROUTE from "../route.json";
import Loading from "./Loading";
function Bank() {
  const [image, setImage] = React.useState([]);
  const [imageURL, setImageURL] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [requestId, setRequestId] = React.useState("");
  const [selectedImage, setselectedImage] = React.useState("");
  let navigate = useNavigate();
  React.useEffect(() => {
    let request_id = localStorage.getItem("request_id");
    if (request_id == null) {
      navigate("/profile")
    } else {
      setRequestId(request_id)
    }
    if (image.length < 1) return;
    const newImageurl = [];
    image.forEach((img) => newImageurl.push(URL.createObjectURL(img)));
    setImageURL(newImageurl);
  }, [image]);

  function ImageChange(e) {
    setImage([...e.target.files]);
    setselectedImage(e.target.files[0])
  }

  const uploadPayment = () => {
setIsLoading(true)
    var imgFormData = new FormData();
    imgFormData.append('receipt', selectedImage);

    axios
      .putForm(`${ROUTE.SITE_URL}/resources/${requestId}/bank-transfer`, imgFormData)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false)
        alert("Payment Uploaded")
        navigate("/profile/pending")
      })
      .catch((err) => {
        setIsLoading(false)
        alert("Upload failed.... Please try again")
        console.log(err);
      });
  }

  return (
    <>
      <h2 className="bank_transfer_h2">
        Please make your transfer to the bank details below
      </h2>
      <div className="bank_transfer mt-4">
        <p>Bank name : Sterling Bank</p>
        <p className="mt-1">Account name : Akeru Ltd</p>
        <p className="mt-1">Account number : 0003202030</p>
        <div className="row">
          <div className="col-md-5">
            <div className="dotted d-flex flex-column justify-content-center mt-2">
              <label className="filebutton align-self-center">
                <img src={upload} alt="imageUpload" />

                <span>
                  <input type="file" id="myfile" name="myfile" onChange={ImageChange} />
                </span>
              </label>
              <span className="text-center">Please upload proof of transfer</span>

            </div>

          </div>
          <div className="col-md-6">
            <div className="receipt-img">
            {imageURL.map((image) => (
              <img
                src={image}
                className="image_prview "
                alt="recipt"
              />
            ))}
            </div>
          </div>
        </div>
        <button className="btn btn-akeru w900 mt-4" onClick={() => uploadPayment()}> <Loading loading={isLoading} false_text={"Upload Payment"} /></button>
      </div>
    </>
  );
}

export default Bank;
