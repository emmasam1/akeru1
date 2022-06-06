import React from "react";
function Seetings({ formData, setForm, navigation }) {
  const { pricing, build, fueature, currency } = formData
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
          <button
            className="btn btn-light btn-sm"
          >
            Back
          </button>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: "25%", height: "2px" }}
        ></div>
      </div>

      <form className="dash-form-p">
        <div className="mb-3 d-flex">
          <div className="position-relative setting-label-bottom">
            <label
              htmlFor="exampleInputCapacity1"
              className="setting-label dash-label position-relative"
            >
              Build bus category
            </label>
            <p className="setting-p">Double click the box to edit</p>
          </div>
          <select
            className="form-select form-select-sm setting-input-height"
            aria-label=".form-select-sm example"
            name="build"
            value={build}
            onChange={setForm}
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="mb-3 d-flex">
        <label
            htmlFor="exampleInputCapacity1"
            className="form-label dash-label position-relative"
          >
            Pricing
          </label>
          <div className="d-flex">
            <div className="d-flex justify-content-center rounded-circle p-bg round-div minus position-relative">
            <i className="fa fa-minus"></i>
            </div>
          <input
            type=""
            className="form-control p-i-bg border-0 w-100"
            id="exampleInputContact Pricing1"
            aria-describedby="Contact Pricing"
            value={pricing}
            name="pricing"
            onChange={setForm}
          />
          <div className="d-flex justify-content-center rounded-circle p-bg round-div plus position-relative">
            <i className="fa fa-plus"></i>
          </div>
          </div>
        </div>

        <div className="mb-3 d-flex">
        <label
            htmlFor="exampleInputCapacity1"
            className="form-label dash-label position-relative"
          >
            Features
          </label>
          <select
            className="form-select form-select-sm setting-input-height setting-input-width"
            aria-label=".form-select-sm example"
            name="fueature"
            value={fueature}
            onChange={setForm}
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="mb-3 d-flex">
        <label
            htmlFor="exampleInputCapacity1"
            className="form-label dash-label position-relative"
          >
            Currency
          </label>
          <select
            className="form-select form-select-sm setting-input-height setting-input-width"
            aria-label=".form-select-sm example"
            name="currency"
            value={currency}
            onChange={setForm}
          >
            <option selected className="l-color">Naira &#8358;</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
      <div className="border-top d-flex justify-content-end dash-next-btn-holder pt-2">
      <button
          className="btn btn-light btn-sm m-0-15"
          onClick={() => navigation.previous()}
        >
          Previous
        </button>
        <button
          className="btn btn-success btn-sm"
          onClick={() => navigation.next()}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Seetings;
