function Card() {
  return (
    <>
      <form>
        <div className="">
          <label htmlFor="exampleInputEmail1" className="form-label Inter">
            Card number
          </label>
          <input
            type="email"
            name="email"
            className="login_input input-height"
            id="exampleInputCard1"
            aria-describedby="cardHelp"
          />
        </div>

        <div className="d-flex">
          <div className="payment-card-form">
          <label htmlFor="exampleInputPassword1" className="form-label Inter">
            Expiry date
          </label>
          <select className="select">
            <option></option>
          </select>
          </div>

          <div>
          <select className="select pay-m Inter">
            <option>Year</option>
          </select>
          </div>
        </div>

        <div className="">
          <label htmlFor="exampleInputEmail1" className="form-label Inter">
          Name on card
          </label>
          <input
            type="email"
            name="email"
            className="login_input input-height"
            id="exampleInputCard1"
            aria-describedby="cardHelp"
          />
        </div>

        <div className="cvv">
          <label htmlFor="exampleInputEmail1" className="form-label Inter">
          CVV
          </label>
          <input
            type="email"
            name="email"
            className="login_input input-height"
            id="exampleInputCard1"
            aria-describedby="cardHelp"
          />
        </div>

        <div className="btn_style">
          <button className="w900">Pay now</button>
        </div>
      </form>
    </>
  );
}

export default Card;
