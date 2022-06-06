import React from "react";
import upload from "../image/upload.svg";
function Bank() {
  const [image, setImage] = React.useState([]);
  const [imageURL, setImageURL] = React.useState([]);
  React.useEffect(() => {
    if (image.lenght < 1) return;
    const newImageurl = [];
    image.forEach((img) => newImageurl.push(URL.createObjectURL(img)));
    setImageURL(newImageurl);
  }, [image]);

  function ImageChange(e) {
    setImage([...e.target.files]);
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
        <div className="dotted d-flex flex-column justify-content-center mt-2">
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
              <input type="file" id="myfile" name="myfile" onChange={ImageChange}/>
            </span>
          </label>
          <span className="text-center">Please upload proof of trasnfer</span>
        </div>
        <button className="mt-4 bank-btn btn w900">Submit</button>
      </div>
    </>
  );
}

export default Bank;
