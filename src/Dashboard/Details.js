import React from "react";
function Details({ formData, setForm, navigation }) {
  const { truck, capacity, contact, phone, email, date } = formData
  return (
    <>
      <div className="d-flex justify-content-between border-bottom mb-3 pt-2 pb-1">
        <div className="d-flex justify-content-between dash-truck-nav">
          <li className="list-unstyled dash-details-title">Details</li>
          <li className="list-unstyled dash-details-title">Settings</li>
          <li className="list-unstyled dash-details-title">
            Review and submit
          </li>
        </div>
        <div className="dash-btn-back-holder">
          <button className="btn btn-light btn-sm">Back</button>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: "5%", height: "2px" }}
        ></div>
      </div>

      <form className="dash-form-p">
        <div className="mb-3 d-flex">
          <div className="">
            <input
              type="file"
              className="form-control dash-input-file"
              id="exampleInputTruck Picturs1"
              aria-describedby="Truck modelHelp"
            />
          </div>
          <label
            className="rounded-circle dash-plus-holder form-label"
            htmlFor="exampleInputTruck Picturs1"
          >
            <i
              className="fa fa-plus form-label"
              htmlFor="exampleInputTruck Picturs1"
            ></i>
          </label>

          <label
            htmlFor="exampleInputTruck Picturs1"
            className="dash-file-label-left form-label dash-label position-relative"
          >
            Truck Picturs
          </label>
        </div>

        <div className="mb-3 d-flex">
          <label
            htmlFor="exampleInputTruck model1"
            className="form-label dash-label position-relative"
          >
            Truck model
          </label>
          <input
            type=""
            className="form-control"
            id="exampleInputTruck model1"
            aria-describedby="Truck modelHelp"
            value={truck}
            name="truck"
            onChange={setForm}
          />
        </div>

        <div className="mb-3 d-flex">
          <label
            htmlFor="exampleInputCapacity1"
            className="form-label dash-label position-relative"
          >
            Capacity
          </label>
          <input
            type=""
            className="form-control"
            id="exampleInputCapacity1"
            aria-describedby="CapacitylHelp"
            value={capacity}
            name="capacity"
            onChange={setForm}
          />
        </div>

        <div className="mb-3 d-flex">
          <label
            htmlFor="exampleInputContact person1"
            className="form-label dash-label position-relative"
          >
            Contact person
          </label>
          <input
            type=""
            className="form-control"
            id="exampleInputContact person1"
            aria-describedby="Contact personlHelp"
            value={contact}
            name="contact"
            onChange={setForm}
          />
        </div>

        <div className="mb-3 d-flex">
          <label
            htmlFor="exampleInputPhone no.1"
            className="form-label dash-label position-relative"
          >
            Phone no.
          </label>
          <input
            type=""
            className="form-control"
            id="exampleInputPhone no.1"
            aria-describedby="Phone no.lHelp"
            value={phone}
            name="phone"
            onChange={setForm}
          />
        </div>

        <div className="mb-3 d-flex">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label dash-label position-relative"
          >
            Email
          </label>
          <input
            type=""
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="EmaillHelp"
            value={email}
            name="email"
            onChange={setForm}
          />
        </div>

        <div className="mb-3 d-flex">
          <label
            htmlFor="exampleInputRegistration1"
            className="form-label dash-label position-relative"
          >
            Registration
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputRegistration1"
            aria-describedby="RegistrationlHelp"
            value={date}
            name="date"
            onChange={setForm}
          />
        </div>
      </form>
      <div className="border-top d-flex justify-content-end dash-next-btn-holder pt-2">
        <button
          className="btn btn-light btn-sm"
          onClick={() => navigation.next()}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Details;
